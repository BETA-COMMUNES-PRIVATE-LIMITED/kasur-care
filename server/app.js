const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const { apiLimiter } = require('./middleware/rateLimiter');

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// 1. Security Headers (Helmet)
app.use(helmet({
  crossOriginResourcePolicy: false // Allows frontend to load certificate previews
}));

// 2. Enable CORS
app.use(cors());

// 3. Rate Limiter (Brute-force protection)
app.use('/api', apiLimiter);

// 4. Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 5. Serve certificate uploads statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 6. Mount API routers
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Base route for connectivity check
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Doccure Hospital Management System Backend API is active.'
  });
});

// 7. Unhandled Route Fallback
app.use((req, res, next) => {
  res.status(404).json({ message: 'Requested resource not found.' });
});

// 8. Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error('Global Error Caught:', err.message);
  res.status(err.status || 500).json({
    message: err.message || 'An unexpected error occurred on the server.'
  });
});

module.exports = app;
