const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const upload = require('../middleware/uploadMiddleware');
const { otpLimiter } = require('../middleware/rateLimiter');
const { 
  sendOtpValidator, 
  verifyOtpValidator, 
  registerPatientValidator, 
  registerDoctorValidator,
  registerHospitalValidator,
  registerLaboratoryValidator,
  registerPharmacyValidator,
  registerAdminValidator,
  loginValidator
} = require('../middleware/validatorMiddleware');

// OTP Routes
router.post('/send-otp', otpLimiter, sendOtpValidator, authController.sendOTP);
router.post('/resend-otp', otpLimiter, sendOtpValidator, authController.resendOTP);
router.post('/verify-otp', verifyOtpValidator, authController.verifyOTP);

// Registration routes with specific Multer fields
router.post('/register/patient', registerPatientValidator, authController.registerPatient);

router.post(
  '/register/doctor',
  upload.fields([
    { name: 'profile_photo', maxCount: 1 },
    { name: 'cnic_front', maxCount: 1 },
    { name: 'cnic_back', maxCount: 1 },
    { name: 'pmdc_certificate', maxCount: 1 },
    { name: 'degree_certificate', maxCount: 1 },
    { name: 'selfie_verification', maxCount: 1 },
    { name: 'experience_certificate', maxCount: 1 }
  ]),
  registerDoctorValidator,
  authController.registerDoctor
);

router.post(
  '/register/hospital',
  upload.fields([
    { name: 'registration_certificate', maxCount: 1 },
    { name: 'hospital_license', maxCount: 1 }
  ]),
  registerHospitalValidator,
  authController.registerHospital
);

router.post(
  '/register/laboratory',
  upload.fields([
    { name: 'registration_license', maxCount: 1 },
    { name: 'cnic_verification', maxCount: 1 }
  ]),
  registerLaboratoryValidator,
  authController.registerLaboratory
);

router.post(
  '/register/pharmacy',
  upload.fields([
    { name: 'drug_sale_license', maxCount: 1 },
    { name: 'pharmacist_registration_certificate', maxCount: 1 },
    { name: 'business_registration', maxCount: 1 }
  ]),
  registerPharmacyValidator,
  authController.registerPharmacy
);

router.post('/register/admin', registerAdminValidator, authController.registerAdmin);

// Login Routes
router.post('/login/patient', loginValidator, authController.loginPatient);
router.post('/login/doctor', loginValidator, authController.loginDoctor);
router.post('/login/hospital', loginValidator, authController.loginHospital);
router.post('/login/laboratory', loginValidator, authController.loginLaboratory);
router.post('/login/pharmacy', loginValidator, authController.loginPharmacy);
router.post('/login/admin', loginValidator, authController.loginAdmin);
router.post('/login', loginValidator, authController.login); // Unified login

module.exports = router;
