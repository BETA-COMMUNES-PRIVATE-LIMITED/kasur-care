const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Parse JSON payloads
app.use(express.json());

// Parse URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Serve certificate uploads statically (so admins can access them)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Base route for sanity check
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Welcome to the Doccure Hospital Management System Backend API'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.message);
  res.status(err.status || 500).json({
    message: err.message || 'An unexpected error occurred on the server.'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
