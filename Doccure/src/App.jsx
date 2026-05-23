import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import Navbar from './components/layout/Navbar'
import DoctorRegister from './pages/Auth/DoctorRegister'
import PatientRegister from './pages/Auth/PatientRegister'
// import Doctors from './pages/Dashboard/DoctorDashboard'
import DoctorDashboard from './pages/Dashboard/DoctorDashboard'
import PatientDashboard from './pages/Dashboard/PatientDashboard'
import Appointments from './pages/Appointments/Appointments'
import BookAppointment from './pages/Appointments/BookAppointment'
import Pharmacy from './pages/Pharmacy'
import LabTest from './pages/LabTest'
import Blogs from './pages/Blogs'
import TopBar from './components/layout/TopBar'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Hospitals from './pages/Hospitals'
import BlogsDetail from './pages/BlogsDetail'
import AdminRoutes from './pages/AdminRoutes'
import PatientProfile from './pages/PatientProfile'
import Patients from './pages/Patients'
import DoctorProfile from './pages/DoctorProfile'
import Doctors from './pages/Doctors'
import HomeCare from './pages/HomeCare'


const App = () => {
  return (
    <BrowserRouter>
      <div className='hidden lg:flex'>
        <TopBar />
      </div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/PatientRegister" element={<PatientRegister />} />
        <Route path="/DoctorRegister" element={<DoctorRegister />} />
        <Route path='/patientdashboard' element={<PatientDashboard />} />
        <Route path='/doctordashboard' element={<DoctorDashboard />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/hospitals' element={<Hospitals />} />
        <Route path='/appointments' element={<Appointments />} />
        <Route path='/book-appointment' element={<BookAppointment />} />
        <Route path='/pharmacy' element={<Pharmacy />} />
        <Route path='/labtest' element={<LabTest />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogsDetail />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patients/:id" element={<PatientProfile />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorProfile />} />
        <Route path="/home-care" element={<HomeCare />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App