const jwt = require('jsonwebtoken');
require('dotenv').config();

// Verify JWT token in request headers
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: Bearer <TOKEN>

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Authorization token required.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecretjwtkey123!@#');
    req.user = decoded; // { id, name, phone, role }
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired authorization token.' });
  }
};

// Restrict access to designated roles (e.g. restrictTo('admin'))
const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: 'Access denied. You do not have permission to access this resource.' 
      });
    }
    next();
  };
};

module.exports = {
  verifyToken,
  restrictTo
};
