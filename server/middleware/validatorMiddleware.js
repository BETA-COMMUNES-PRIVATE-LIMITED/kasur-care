const { body, validationResult } = require('express-validator');

// Helper to handle validation errors
const validateResults = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      message: errors.array()[0].msg, 
      errors: errors.array() 
    });
  }
  next();
};

const sendOtpValidator = [
  body('phone')
    .notEmpty().withMessage('Phone number is required.')
    .isString().withMessage('Phone number must be a string.'),
  validateResults
];

const verifyOtpValidator = [
  body('phone')
    .notEmpty().withMessage('Phone number is required.')
    .isString().withMessage('Phone number must be a string.'),
  body('otp_code')
    .notEmpty().withMessage('OTP code is required.')
    .isLength({ min: 6, max: 6 }).withMessage('OTP code must be exactly 6 digits.'),
  validateResults
];

const registerPatientValidator = [
  body('name').notEmpty().withMessage('Full Name is required.').trim(),
  body('phone').notEmpty().withMessage('Mobile Number is required.'),
  body('gender').notEmpty().withMessage('Gender is required.'),
  body('dob').notEmpty().withMessage('Date of Birth is required.').isDate().withMessage('Invalid date format.'),
  body('address').notEmpty().withMessage('Address is required.').trim(),
  body('emergency_contact').notEmpty().withMessage('Emergency Contact is required.'),
  body('password')
    .notEmpty().withMessage('Password is required.')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
  validateResults
];

const registerDoctorValidator = [
  body('name').notEmpty().withMessage('Full Name is required.').trim(),
  body('cnic').notEmpty().withMessage('CNIC is required.'),
  body('dob').notEmpty().withMessage('Date of Birth is required.').isDate().withMessage('Invalid date format.'),
  body('gender').notEmpty().withMessage('Gender is required.'),
  body('phone').notEmpty().withMessage('Mobile Number is required.'),
  body('email').notEmpty().withMessage('Email Address is required.').isEmail().withMessage('Invalid email.'),
  body('pmdc_number').notEmpty().withMessage('PMDC Registration Number is required.'),
  body('specialization').notEmpty().withMessage('Specialization is required.'),
  body('qualification').notEmpty().withMessage('Qualification is required.'),
  body('experience_years').notEmpty().withMessage('Experience is required.').isInt({ min: 0 }).withMessage('Experience must be a positive integer.'),
  body('hospital_affiliation').notEmpty().withMessage('Hospital/Clinic Affiliation is required.'),
  body('consultation_fee').notEmpty().withMessage('Consultation Fee is required.').isFloat({ min: 0 }).withMessage('Consultation fee must be a positive number.'),
  body('languages').notEmpty().withMessage('Languages are required.'),
  body('password')
    .notEmpty().withMessage('Password is required.')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
  validateResults
];

const registerHospitalValidator = [
  body('name').notEmpty().withMessage('Hospital Name is required.').trim(),
  body('type').notEmpty().withMessage('Hospital Type is required.'),
  body('owner_info').notEmpty().withMessage('Owner Information is required.'),
  body('contact_details').notEmpty().withMessage('Contact Details are required.'),
  body('phone').notEmpty().withMessage('Phone number is required.'),
  body('address').notEmpty().withMessage('Address is required.'),
  body('bed_capacity').notEmpty().withMessage('Bed Capacity is required.').isInt({ min: 0 }).withMessage('Bed capacity must be a positive integer.'),
  body('facilities').notEmpty().withMessage('Facilities summary is required.'),
  body('password')
    .notEmpty().withMessage('Password is required.')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
  validateResults
];

const registerLaboratoryValidator = [
  body('name').notEmpty().withMessage('Laboratory Name is required.').trim(),
  body('owner_details').notEmpty().withMessage('Owner Details are required.'),
  body('phone').notEmpty().withMessage('Phone number is required.'),
  body('available_tests').notEmpty().withMessage('Available tests list is required.'),
  body('report_delivery_methods').notEmpty().withMessage('Report delivery methods are required.'),
  body('password')
    .notEmpty().withMessage('Password is required.')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
  validateResults
];

const registerPharmacyValidator = [
  body('name').notEmpty().withMessage('Pharmacy Name is required.').trim(),
  body('pharmacist_details').notEmpty().withMessage('Pharmacist details are required.'),
  body('phone').notEmpty().withMessage('Phone number is required.'),
  body('delivery_operating_info').notEmpty().withMessage('Delivery and Operating Information is required.'),
  body('password')
    .notEmpty().withMessage('Password is required.')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
  validateResults
];

const registerAdminValidator = [
  body('name').notEmpty().withMessage('Name is required.').trim(),
  body('phone').notEmpty().withMessage('Phone number is required.'),
  body('email').notEmpty().withMessage('Email is required.').isEmail().withMessage('Invalid email.'),
  body('password').notEmpty().withMessage('Password is required.').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.'),
  body('security_key').notEmpty().withMessage('Admin security key is required.'),
  validateResults
];

const loginValidator = [
  body('emailOrPhone').notEmpty().withMessage('Email or Phone is required.'),
  body('password').notEmpty().withMessage('Password is required.'),
  validateResults
];

module.exports = {
  sendOtpValidator,
  verifyOtpValidator,
  registerPatientValidator,
  registerDoctorValidator,
  registerHospitalValidator,
  registerLaboratoryValidator,
  registerPharmacyValidator,
  registerAdminValidator,
  loginValidator
};
