const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { verifyToken, restrictTo } = require('../middleware/authMiddleware');

// Route protections: JWT verified AND restricted to admin role
router.use(verifyToken);
router.use(restrictTo('admin'));

// Pending user operations
router.get('/pending-users', adminController.getPendingUsers);
router.get('/user/:role/:id', adminController.getUserDetail);

// Approvals & modifications
router.put('/approve/:role/:id', adminController.approveUser);
router.put('/reject/:role/:id', adminController.rejectUser);
router.put('/suspend/:role/:id', adminController.suspendUser);

// Dashboard Statistics
router.get('/stats', adminController.getStats);

module.exports = router;
