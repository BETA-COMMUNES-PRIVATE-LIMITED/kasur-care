const db = require('../config/db');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Helper to get transporter
const getTransporter = () => {
  if (process.env.NODE_ENV === 'development') {
    return null;
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
    port: process.env.SMTP_PORT || 2525,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || ''
    }
  });
};

/**
 * Get all users with pending status
 * GET /api/admin/pending-users
 */
exports.getPendingUsers = async (req, res) => {
  try {
    const pendingList = [];

    // Retrieve pending from Doctors
    const [doctors] = await db.query(
      'SELECT id, name, phone, "doctor" AS role, status, pmdc_certificate_path AS certificate_path, created_at AS upload_date FROM doctors WHERE status = "pending"'
    );
    pendingList.push(...doctors);

    // Laboratories
    const [labs] = await db.query(
      'SELECT id, name, phone, "laboratory" AS role, status, registration_license_path AS certificate_path, created_at AS upload_date FROM laboratories WHERE status = "pending"'
    );
    pendingList.push(...labs);

    // Pharmacies
    const [pharmacies] = await db.query(
      'SELECT id, name, phone, "pharmacy" AS role, status, drug_sale_license_path AS certificate_path, created_at AS upload_date FROM pharmacies WHERE status = "pending"'
    );
    pendingList.push(...pharmacies);

    // Hospitals
    const [hospitals] = await db.query(
      'SELECT id, name, phone, "hospital" AS role, status, hospital_license_path AS certificate_path, created_at AS upload_date FROM hospitals WHERE status = "pending"'
    );
    pendingList.push(...hospitals);

    // Sort by upload date
    pendingList.sort((a, b) => new Date(a.upload_date) - new Date(b.upload_date));

    res.status(200).json(pendingList);
  } catch (error) {
    console.error('Get Pending Users Error:', error);
    res.status(500).json({ message: 'Server error. Failed to fetch pending users.' });
  }
};

/**
 * Get single user detailed profile by role and ID
 * GET /api/admin/user/:role/:id
 */
exports.getUserDetail = async (req, res) => {
  try {
    const { role, id } = req.params;

    const allowedTables = {
      patient: 'patients',
      doctor: 'doctors',
      laboratory: 'laboratories',
      pharmacy: 'pharmacies',
      hospital: 'hospitals'
    };

    const tableName = allowedTables[role];
    if (!tableName) {
      return res.status(400).json({ message: 'Invalid user role requested.' });
    }

    const [records] = await db.query(`SELECT * FROM ${tableName} WHERE id = ?`, [id]);
    if (records.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const user = records[0];
    delete user.password_hash; // Security: do not send password hash

    res.status(200).json({
      role,
      ...user
    });
  } catch (error) {
    console.error('Get User Detail Error:', error);
    res.status(500).json({ message: 'Server error. Failed to fetch user details.' });
  }
};

/**
 * Update User Status (Approve / Reject / Suspend)
 */
const updateUserStatus = async ({ res, role, id, targetStatus, reason = null }) => {
  try {
    const allowedTables = {
      patient: 'patients',
      doctor: 'doctors',
      laboratory: 'laboratories',
      pharmacy: 'pharmacies',
      hospital: 'hospitals'
    };

    const tableName = allowedTables[role];
    if (!tableName) {
      return res.status(400).json({ message: 'Invalid user role.' });
    }

    // Verify user exists
    const [records] = await db.query(`SELECT id, name, phone FROM ${tableName} WHERE id = ?`, [id]);
    if (records.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const user = records[0];

    // Update status
    await db.query(`UPDATE ${tableName} SET status = ? WHERE id = ?`, [targetStatus, id]);

    // Send notifications
    const subject = `Doccure Registration Update: ${targetStatus.toUpperCase()}`;
    let bodyText = `Hello ${user.name},\n\nYour Doccure verification status has been updated to: ${targetStatus.toUpperCase()}.\n`;
    if (targetStatus === 'approved') {
      bodyText += `You are now approved! You can log in using your registered phone number and password.\n`;
    } else if (targetStatus === 'rejected') {
      bodyText += `Reason: ${reason || 'Your uploaded documents could not be verified.'}\n\nPlease try registering again with correct documents.\n`;
    } else if (targetStatus === 'suspended') {
      bodyText += `Your account has been suspended by the administration. Please contact support.\n`;
    }
    bodyText += `\nBest Regards,\nDoccure Team`;

    const transporter = getTransporter();
    if (transporter) {
      const mailOptions = {
        from: process.env.SMTP_FROM || 'noreply@kasurcare.com',
        to: user.email || 'notification@kasurcare.com',
        subject,
        text: bodyText
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.error('SMTP Error:', err.message);
        else console.log('Mail sent:', info.response);
      });
    } else {
      console.log(`\n===========================================`);
      console.log(`[DEV MODE] Sending notification email to phone: ${user.phone}`);
      console.log(`Subject: ${subject}`);
      console.log(`Body:\n${bodyText}`);
      console.log(`===========================================\n`);
    }

    res.status(200).json({ 
      message: `User '${user.name}' (${role}) updated to ${targetStatus} successfully.` 
    });
  } catch (error) {
    console.error('Update Status Error:', error);
    res.status(500).json({ message: 'Server error. Failed to update status.' });
  }
};

exports.approveUser = (req, res) => {
  const { role, id } = req.params;
  updateUserStatus({ res, role, id, targetStatus: 'approved' });
};

exports.rejectUser = (req, res) => {
  const { role, id } = req.params;
  const { reason } = req.body;
  updateUserStatus({ res, role, id, targetStatus: 'rejected', reason });
};

exports.suspendUser = (req, res) => {
  const { role, id } = req.params;
  updateUserStatus({ res, role, id, targetStatus: 'suspended' });
};

/**
 * Admin Stats Summary Dashboard
 * GET /api/admin/stats
 */
exports.getStats = async (req, res) => {
  try {
    // 1. Total roles count
    const [[{ count: patientsCount }]] = await db.query('SELECT COUNT(*) AS count FROM patients');
    const [[{ count: doctorsCount }]] = await db.query('SELECT COUNT(*) AS count FROM doctors');
    const [[{ count: labsCount }]] = await db.query('SELECT COUNT(*) AS count FROM laboratories');
    const [[{ count: pharmaciesCount }]] = await db.query('SELECT COUNT(*) AS count FROM pharmacies');
    const [[{ count: hospitalsCount }]] = await db.query('SELECT COUNT(*) AS count FROM hospitals');

    // 2. Pending, Approved, Rejected summaries across professional tables
    let pendingCount = 0;
    let approvedCount = 0;
    let rejectedCount = 0;
    let suspendedCount = 0;

    const tables = ['doctors', 'laboratories', 'pharmacies', 'hospitals'];
    for (const t of tables) {
      const [[{ count: p }]] = await db.query(`SELECT COUNT(*) AS count FROM ${t} WHERE status = "pending"`);
      const [[{ count: a }]] = await db.query(`SELECT COUNT(*) AS count FROM ${t} WHERE status = "approved"`);
      const [[{ count: r }]] = await db.query(`SELECT COUNT(*) AS count FROM ${t} WHERE status = "rejected"`);
      const [[{ count: s }]] = await db.query(`SELECT COUNT(*) AS count FROM ${t} WHERE status = "suspended"`);
      
      pendingCount += p;
      approvedCount += a;
      rejectedCount += r;
      suspendedCount += s;
    }

    // Add patients approved status
    const [[{ count: pa }]] = await db.query('SELECT COUNT(*) AS count FROM patients WHERE status = "approved"');
    approvedCount += pa;

    res.status(200).json({
      totalPatients: patientsCount,
      totalDoctors: doctorsCount,
      totalLaboratories: labsCount,
      totalPharmacies: pharmaciesCount,
      totalHospitals: hospitalsCount,
      pendingApprovals: pendingCount,
      approvedAccounts: approvedCount,
      rejectedAccounts: rejectedCount,
      suspendedAccounts: suspendedCount
    });
  } catch (error) {
    console.error('Get Stats Error:', error);
    res.status(500).json({ message: 'Server error. Failed to retrieve statistics.' });
  }
};
