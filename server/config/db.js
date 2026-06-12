const mysql = require('mysql2');
require('dotenv').config();

// Create the connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'hospital_management',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Use the promise wrapper
const db = pool.promise();

// Test the connection
db.getConnection()
  .then(connection => {
    console.log('Successfully connected to MySQL database.');
    connection.release();
  })
  .catch(err => {
    console.error('Error connecting to MySQL database:', err.message);
    console.error('Please make sure MySQL is running and configured correctly.');
  });

module.exports = db;
