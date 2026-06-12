-- Create Database
CREATE DATABASE IF NOT EXISTS hospital_management;
USE hospital_management;

-- 1. Patients Table
CREATE TABLE IF NOT EXISTS patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE DEFAULT NULL,
    gender VARCHAR(20) NOT NULL,
    dob DATE NOT NULL,
    cnic VARCHAR(20) DEFAULT NULL,
    address TEXT NOT NULL,
    emergency_contact VARCHAR(50) NOT NULL,
    blood_group VARCHAR(5) DEFAULT NULL,
    password_hash VARCHAR(255) NOT NULL,
    status ENUM('pending', 'approved', 'rejected', 'suspended') DEFAULT 'approved',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Doctors Table
CREATE TABLE IF NOT EXISTS doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    profile_photo_path VARCHAR(255) DEFAULT NULL,
    cnic VARCHAR(20) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(20) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    pmdc_number VARCHAR(50) NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    qualification VARCHAR(255) NOT NULL,
    experience_years INT NOT NULL,
    hospital_affiliation VARCHAR(255) NOT NULL,
    consultation_fee DECIMAL(10,2) NOT NULL,
    languages VARCHAR(255) NOT NULL,
    cnic_front_path VARCHAR(255) DEFAULT NULL,
    cnic_back_path VARCHAR(255) DEFAULT NULL,
    pmdc_certificate_path VARCHAR(255) DEFAULT NULL,
    degree_certificate_path VARCHAR(255) DEFAULT NULL,
    selfie_verification_path VARCHAR(255) DEFAULT NULL,
    experience_certificate_path VARCHAR(255) DEFAULT NULL,
    bank_iban VARCHAR(50) DEFAULT NULL,
    jazzcash_number VARCHAR(20) DEFAULT NULL,
    easypaisa_number VARCHAR(20) DEFAULT NULL,
    status ENUM('pending', 'approved', 'rejected', 'suspended') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Hospitals Table
CREATE TABLE IF NOT EXISTS hospitals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    owner_info TEXT NOT NULL,
    contact_details TEXT NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    gps_location VARCHAR(100) DEFAULT NULL,
    registration_certificate_path VARCHAR(255) DEFAULT NULL,
    hospital_license_path VARCHAR(255) DEFAULT NULL,
    ntn_number VARCHAR(50) DEFAULT NULL,
    bed_capacity INT NOT NULL,
    facilities TEXT NOT NULL,
    status ENUM('pending', 'approved', 'rejected', 'suspended') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Laboratories Table
CREATE TABLE IF NOT EXISTS laboratories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    owner_details TEXT NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    registration_license_path VARCHAR(255) DEFAULT NULL,
    cnic_verification_path VARCHAR(255) DEFAULT NULL,
    available_tests TEXT NOT NULL,
    home_sample_collection BOOLEAN DEFAULT FALSE,
    report_delivery_methods VARCHAR(255) NOT NULL,
    status ENUM('pending', 'approved', 'rejected', 'suspended') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. Pharmacies Table
CREATE TABLE IF NOT EXISTS pharmacies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    pharmacist_details TEXT NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    drug_sale_license_path VARCHAR(255) DEFAULT NULL,
    pharmacist_registration_certificate_path VARCHAR(255) DEFAULT NULL,
    business_registration_path VARCHAR(255) DEFAULT NULL,
    delivery_operating_info TEXT NOT NULL,
    status ENUM('pending', 'approved', 'rejected', 'suspended') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. Admins Table
CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 7. OTP Verifications Table
CREATE TABLE IF NOT EXISTS otp_verifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phone VARCHAR(20) NOT NULL,
    otp_code VARCHAR(6) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    attempts_count INT DEFAULT 0,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
