const rateLimit = require('express-rate-limit');

// General rate limiter for all api requests
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    message: 'Too many requests from this IP, please try again after 15 minutes.'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Stricter rate limiter for OTP sending/verification to avoid abuse
const otpLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // Limit each IP to 5 OTP requests per 5 minutes
  message: {
    message: 'Too many OTP requests from this IP, please try again after 5 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  apiLimiter,
  otpLimiter
};
