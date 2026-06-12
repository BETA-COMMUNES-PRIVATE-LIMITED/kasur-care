const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Start Express Server
const server = app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`Doccure Server running in ${process.env.NODE_ENV || 'development'} mode.`);
  console.log(`Server Address: http://localhost:${PORT}`);
  console.log(`===============================================`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(`Unhandled Rejection Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
