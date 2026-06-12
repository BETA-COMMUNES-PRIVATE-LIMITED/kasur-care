const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Helper to generate a 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Send OTP
 * POST /api/auth/send-otp
 */
exports.sendOTP = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ message: 'Phone number is required.' });
    }

    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

    // Invalidate old OTPs
    await db.query('UPDATE otp_verifications SET expires_at = NOW() WHERE phone = ? AND is_verified = FALSE', [phone]);

    // Save new OTP
    await db.query(
      'INSERT INTO otp_verifications (phone, otp_code, expires_at, attempts_count, is_verified) VALUES (?, ?, ?, 0, FALSE)',
      [phone, otp, expiresAt]
    );

    if (process.env.NODE_ENV === 'development') {
      console.log(`\n===========================================`);
      console.log(`[DEV MODE] OTP sent to ${phone}: ${otp}`);
      console.log(`===========================================\n`);
      return res.status(200).json({
        message: 'OTP sent successfully (Logged to console in development mode).'
      });
    } else {
      try {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

        if (accountSid && authToken && twilioPhone) {
          const client = require('twilio')(accountSid, authToken);
          await client.messages.create({
            body: `Your Doccure Verification OTP is: ${otp}. Valid for 5 minutes.`,
            from: twilioPhone,
            to: phone
          });
          return res.status(200).json({ message: 'OTP sent successfully via SMS.' });
        } else {
          console.warn('Twilio credentials missing. OTP code is:', otp);
          return res.status(200).json({
            message: 'OTP logged to console. Configure Twilio credentials for SMS.'
          });
        }
      } catch (smsError) {
        console.error('Twilio SMS Error:', smsError.message);
        return res.status(500).json({ message: 'Failed to send SMS OTP.' });
      }
    }
  } catch (error) {
    console.error('Send OTP Error:', error);
    res.status(500).json({ message: 'Server error. Failed to send OTP.' });
  }
};

/**
 * Resend OTP
 */
exports.resendOTP = async (req, res) => {
  return exports.sendOTP(req, res);
};

/**
 * Verify OTP
 */
exports.verifyOTP = async (req, res) => {
  try {
    const { phone, otp_code } = req.body;

    if (!phone || !otp_code) {
      return res.status(400).json({ message: 'Phone and OTP code are required.' });
    }

    const [records] = await db.query(
      'SELECT id, otp_code, expires_at, attempts_count FROM otp_verifications WHERE phone = ? AND is_verified = FALSE ORDER BY created_at DESC LIMIT 1',
      [phone]
    );

    if (records.length === 0) {
      return res.status(400).json({ message: 'No active OTP found. Please request a new one.' });
    }

    const record = records[0];

    if (new Date() > new Date(record.expires_at)) {
      return res.status(400).json({ message: 'OTP code has expired.' });
    }

    if (record.attempts_count >= 3) {
      return res.status(400).json({ message: 'Maximum attempts exceeded. Please request a new OTP.' });
    }

    if (record.otp_code !== otp_code) {
      const attempts = record.attempts_count + 1;
      await db.query('UPDATE otp_verifications SET attempts_count = ? WHERE id = ?', [attempts, record.id]);
      
      const remaining = 3 - attempts;
      if (remaining <= 0) {
        return res.status(400).json({ message: 'Maximum attempts exceeded. Please request a new OTP.' });
      }
      return res.status(400).json({ message: `Invalid OTP. Remaining attempts: ${remaining}` });
    }

    await db.query('UPDATE otp_verifications SET is_verified = TRUE WHERE id = ?', [record.id]);
    res.status(200).json({ message: 'OTP verified successfully. You can now register.' });
  } catch (error) {
    console.error('Verify OTP Error:', error);
    res.status(500).json({ message: 'Server error. Failed to verify OTP.' });
  }
};

// Helper: check OTP was verified
const checkOtpVerified = async (phone) => {
  const [records] = await db.query(
    'SELECT id FROM otp_verifications WHERE phone = ? AND is_verified = TRUE ORDER BY created_at DESC LIMIT 1',
    [phone]
  );
  return records.length > 0;
};

// Helper: delete verified OTP
const deleteVerifiedOtp = async (phone) => {
  await db.query('DELETE FROM otp_verifications WHERE phone = ?', [phone]);
};

// Helper: check duplicate phone in specific table
const isPhoneRegistered = async (table, phone) => {
  const [rows] = await db.query(`SELECT id FROM ${table} WHERE phone = ?`, [phone]);
  return rows.length > 0;
};

// Helper: get uploaded file path
const getFilePath = (req, fieldName) => {
  if (req.files && req.files[fieldName] && req.files[fieldName][0]) {
    return `/uploads/${req.files[fieldName][0].filename}`;
  }
  return null;
};

// Helper: get uploaded file name
const getFileName = (req, fieldName) => {
  if (req.files && req.files[fieldName] && req.files[fieldName][0]) {
    return req.files[fieldName][0].originalname;
  }
  return null;
};

/**
 * Register Patient
 */
exports.registerPatient = async (req, res) => {
  try {
    const { name, phone, email, gender, dob, cnic, address, emergency_contact, blood_group, password } = req.body;

    const otpOk = await checkOtpVerified(phone);
    if (!otpOk) {
      return res.status(400).json({ message: 'Phone number has not been verified via OTP.' });
    }

    const dup = await isPhoneRegistered('patients', phone);
    if (dup) {
      return res.status(400).json({ message: 'Phone number is already registered.' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await db.query(
      'INSERT INTO patients (name, phone, email, gender, dob, cnic, address, emergency_contact, blood_group, password_hash, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "approved")',
      [name, phone, email || null, gender, dob, cnic || null, address, emergency_contact, blood_group || null, passwordHash]
    );

    await deleteVerifiedOtp(phone);
    res.status(201).json({ message: 'Patient registered successfully! You can now log in.' });
  } catch (error) {
    console.error('Patient Register Error:', error);
    res.status(500).json({ message: 'Server error. Registration failed.' });
  }
};

/**
 * Register Doctor
 */
exports.registerDoctor = async (req, res) => {
  try {
    const { 
      name, cnic, dob, gender, phone, email, pmdc_number, specialization, 
      qualification, experience_years, hospital_affiliation, consultation_fee, languages, password 
    } = req.body;

    const otpOk = await checkOtpVerified(phone);
    if (!otpOk) {
      return res.status(400).json({ message: 'Phone number has not been verified via OTP.' });
    }

    const dup = await isPhoneRegistered('doctors', phone);
    if (dup) {
      return res.status(400).json({ message: 'Phone number is already registered.' });
    }

    // Required files validation
    const requiredFiles = ['cnic_front', 'cnic_back', 'pmdc_certificate', 'degree_certificate', 'selfie_verification'];
    for (const f of requiredFiles) {
      if (!req.files || !req.files[f]) {
        return res.status(400).json({ message: `Verification document '${f}' is required.` });
      }
    }

    const profilePhotoPath = getFilePath(req, 'profile_photo');
    const cnicFrontPath = getFilePath(req, 'cnic_front');
    const cnicBackPath = getFilePath(req, 'cnic_back');
    const pmdcCertPath = getFilePath(req, 'pmdc_certificate');
    const degreePath = getFilePath(req, 'degree_certificate');
    const selfiePath = getFilePath(req, 'selfie_verification');
    const expCertPath = getFilePath(req, 'experience_certificate'); // optional

    const bankIban = req.body.bank_iban || null;
    const jazzcash = req.body.jazzcash_number || null;
    const easypaisa = req.body.easypaisa_number || null;

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await db.query(
      `INSERT INTO doctors (
        name, profile_photo_path, cnic, dob, gender, phone, email, password_hash, 
        pmdc_number, specialization, qualification, experience_years, hospital_affiliation, 
        consultation_fee, languages, cnic_front_path, cnic_back_path, pmdc_certificate_path, 
        degree_certificate_path, selfie_verification_path, experience_certificate_path, 
        bank_iban, jazzcash_number, easypaisa_number, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "pending")`,
      [
        name, profilePhotoPath, cnic, dob, gender, phone, email, passwordHash,
        pmdc_number, specialization, qualification, experience_years, hospital_affiliation,
        consultation_fee, languages, cnicFrontPath, cnicBackPath, pmdcCertPath,
        degreePath, selfiePath, expCertPath, bankIban, jazzcash, easypaisa
      ]
    );

    await deleteVerifiedOtp(phone);
    res.status(201).json({
      message: 'Registration submitted successfully. Our verification team will review your certificates and documents. Please allow 2-3 working days for verification. You will be notified once your account is approved.'
    });
  } catch (error) {
    console.error('Doctor Register Error:', error);
    res.status(500).json({ message: 'Server error. Doctor registration failed.' });
  }
};

/**
 * Register Hospital
 */
exports.registerHospital = async (req, res) => {
  try {
    const { name, type, owner_info, contact_details, phone, address, gps_location, ntn_number, bed_capacity, facilities, password } = req.body;

    const otpOk = await checkOtpVerified(phone);
    if (!otpOk) {
      return res.status(400).json({ message: 'Phone number has not been verified via OTP.' });
    }

    const dup = await isPhoneRegistered('hospitals', phone);
    if (dup) {
      return res.status(400).json({ message: 'Phone number already registered.' });
    }

    // Documents check
    if (!req.files || !req.files['registration_certificate'] || !req.files['hospital_license']) {
      return res.status(400).json({ message: 'Registration Certificate and Hospital License uploads are required.' });
    }

    const regCertPath = getFilePath(req, 'registration_certificate');
    const licensePath = getFilePath(req, 'hospital_license');

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await db.query(
      `INSERT INTO hospitals (name, type, owner_info, contact_details, phone, password_hash, address, gps_location, registration_certificate_path, hospital_license_path, ntn_number, bed_capacity, facilities, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "pending")`,
      [name, type, owner_info, contact_details, phone, passwordHash, address, gps_location || null, regCertPath, licensePath, ntn_number || null, bed_capacity, facilities]
    );

    await deleteVerifiedOtp(phone);
    res.status(201).json({
      message: 'Registration submitted successfully. Our verification team will review your hospital certificates. Please allow 2-3 working days for verification.'
    });
  } catch (error) {
    console.error('Hospital Register Error:', error);
    res.status(500).json({ message: 'Server error. Hospital registration failed.' });
  }
};

/**
 * Register Laboratory
 */
exports.registerLaboratory = async (req, res) => {
  try {
    const { name, owner_details, phone, available_tests, home_sample_collection, report_delivery_methods, password } = req.body;

    const otpOk = await checkOtpVerified(phone);
    if (!otpOk) {
      return res.status(400).json({ message: 'Phone number has not been verified via OTP.' });
    }

    const dup = await isPhoneRegistered('laboratories', phone);
    if (dup) {
      return res.status(400).json({ message: 'Phone number already registered.' });
    }

    // Documents check
    if (!req.files || !req.files['registration_license'] || !req.files['cnic_verification']) {
      return res.status(400).json({ message: 'Registration License and Owner CNIC document uploads are required.' });
    }

    const licensePath = getFilePath(req, 'registration_license');
    const cnicPath = getFilePath(req, 'cnic_verification');

    const homeCollection = home_sample_collection === 'true' || home_sample_collection === true;

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await db.query(
      `INSERT INTO laboratories (name, owner_details, phone, password_hash, registration_license_path, cnic_verification_path, available_tests, home_sample_collection, report_delivery_methods, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, "pending")`,
      [name, owner_details, phone, passwordHash, licensePath, cnicPath, available_tests, homeCollection, report_delivery_methods]
    );

    await deleteVerifiedOtp(phone);
    res.status(201).json({
      message: 'Registration submitted successfully. Our verification team will review your laboratory documents. Please allow 2-3 working days for verification.'
    });
  } catch (error) {
    console.error('Laboratory Register Error:', error);
    res.status(500).json({ message: 'Server error. Laboratory registration failed.' });
  }
};

/**
 * Register Pharmacy
 */
exports.registerPharmacy = async (req, res) => {
  try {
    const { name, pharmacist_details, phone, delivery_operating_info, password } = req.body;

    const otpOk = await checkOtpVerified(phone);
    if (!otpOk) {
      return res.status(400).json({ message: 'Phone number has not been verified via OTP.' });
    }

    const dup = await isPhoneRegistered('pharmacies', phone);
    if (dup) {
      return res.status(400).json({ message: 'Phone number already registered.' });
    }

    // Documents check
    const required = ['drug_sale_license', 'pharmacist_registration_certificate', 'business_registration'];
    for (const r of required) {
      if (!req.files || !req.files[r]) {
        return res.status(400).json({ message: `Verification document '${r}' is required.` });
      }
    }

    const drugLicense = getFilePath(req, 'drug_sale_license');
    const pharmCert = getFilePath(req, 'pharmacist_registration_certificate');
    const bizReg = getFilePath(req, 'business_registration');

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await db.query(
      `INSERT INTO pharmacies (name, pharmacist_details, phone, password_hash, drug_sale_license_path, pharmacist_registration_certificate_path, business_registration_path, delivery_operating_info, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, "pending")`,
      [name, pharmacist_details, phone, passwordHash, drugLicense, pharmCert, bizReg, delivery_operating_info]
    );

    await deleteVerifiedOtp(phone);
    res.status(201).json({
      message: 'Registration submitted successfully. Our verification team will review your pharmacy documents. Please allow 2-3 working days for verification.'
    });
  } catch (error) {
    console.error('Pharmacy Register Error:', error);
    res.status(500).json({ message: 'Server error. Pharmacy registration failed.' });
  }
};

/**
 * Register Admin
 */
exports.registerAdmin = async (req, res) => {
  try {
    const { name, phone, email, password, security_key } = req.body;

    const systemKey = process.env.ADMIN_SECURITY_KEY || 'admin123';
    if (security_key !== systemKey) {
      return res.status(403).json({ message: 'Invalid admin security key.' });
    }

    const [existing] = await db.query('SELECT id FROM admins WHERE email = ? OR phone = ?', [email, phone]);
    if (existing.length > 0) {
      return res.status(400).json({ message: 'Email or phone number is already registered as Admin.' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await db.query(
      'INSERT INTO admins (name, phone, email, password_hash) VALUES (?, ?, ?, ?)',
      [name, phone, email, passwordHash]
    );

    res.status(201).json({ message: 'Admin registered successfully! You can now log in.' });
  } catch (error) {
    console.error('Admin Register Error:', error);
    res.status(500).json({ message: 'Server error. Admin registration failed.' });
  }
};

// ========================================================
// LOGINS & SHARED ACTIONS
// ========================================================

const performLogin = async ({ req, res, table, role }) => {
  try {
    const { emailOrPhone, password } = req.body;

    let queryField = 'phone';
    if (table === 'admins' && emailOrPhone.includes('@')) {
      queryField = 'email';
    }

    const [users] = await db.query(`SELECT * FROM ${table} WHERE ${queryField} = ?`, [emailOrPhone]);
    if (users.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const user = users[0];

    // Status Checks
    if (table !== 'admins') {
      if (user.status === 'pending') {
        return res.status(403).json({ message: 'Your account is under review. Please wait for approval from our verification team.' });
      }
      if (user.status === 'rejected') {
        return res.status(403).json({ message: 'Your account verification was rejected. Please contact support.' });
      }
      if (user.status === 'suspended') {
        return res.status(403).json({ message: 'Your account has been suspended. Please contact administration.' });
      }
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, phone: user.phone, role },
      process.env.JWT_SECRET || 'supersecretjwtkey123!@#',
      { expiresIn: process.env.JWT_EXPIRE || '24h' }
    );

    res.status(200).json({
      message: 'Login successful.',
      token,
      user: { id: user.id, name: user.name, phone: user.phone, role }
    });
  } catch (error) {
    console.error(`Login Error inside ${table}:`, error);
    res.status(500).json({ message: 'Server error. Login failed.' });
  }
};

exports.loginPatient = (req, res) => performLogin({ req, res, table: 'patients', role: 'patient' });
exports.loginDoctor = (req, res) => performLogin({ req, res, table: 'doctors', role: 'doctor' });
exports.loginHospital = (req, res) => performLogin({ req, res, table: 'hospitals', role: 'hospital' });
exports.loginLaboratory = (req, res) => performLogin({ req, res, table: 'laboratories', role: 'laboratory' });
exports.loginPharmacy = (req, res) => performLogin({ req, res, table: 'pharmacies', role: 'pharmacy' });
exports.loginAdmin = (req, res) => performLogin({ req, res, table: 'admins', role: 'admin' });

exports.login = async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    const tables = [
      { name: 'patients', role: 'patient' },
      { name: 'doctors', role: 'doctor' },
      { name: 'hospitals', role: 'hospital' },
      { name: 'laboratories', role: 'laboratory' },
      { name: 'pharmacies', role: 'pharmacy' },
      { name: 'admins', role: 'admin' }
    ];

    for (const item of tables) {
      let queryField = 'phone';
      if (item.name === 'admins' && emailOrPhone.includes('@')) {
        queryField = 'email';
      }

      const [users] = await db.query(`SELECT * FROM ${item.name} WHERE ${queryField} = ?`, [emailOrPhone]);
      if (users.length > 0) {
        const user = users[0];

        if (item.name !== 'admins') {
          if (user.status === 'pending') {
            return res.status(403).json({ message: 'Your account is under review. Please wait for approval from our verification team.' });
          }
          if (user.status === 'rejected') {
            return res.status(403).json({ message: 'Your account verification was rejected. Please contact support.' });
          }
          if (user.status === 'suspended') {
            return res.status(403).json({ message: 'Your account has been suspended. Please contact administration.' });
          }
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (isMatch) {
          const token = jwt.sign(
            { id: user.id, name: user.name, phone: user.phone, role: item.role },
            process.env.JWT_SECRET || 'supersecretjwtkey123!@#',
            { expiresIn: process.env.JWT_EXPIRE || '24h' }
          );

          return res.status(200).json({
            message: 'Login successful.',
            token,
            user: { id: user.id, name: user.name, phone: user.phone, role: item.role }
          });
        }
      }
    }

    res.status(400).json({ message: 'Invalid credentials.' });
  } catch (error) {
    console.error('Unified Login Error:', error);
    res.status(500).json({ message: 'Server error. Login failed.' });
  }
};
