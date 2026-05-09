import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import Navbar from './components/layout/Navbar'
import DoctorRegister from './pages/Auth/DoctorRegister'
import PatientRegister from './pages/Auth/PatientRegister'
import Doctors from './pages/Dashboard/DoctorDashboard'
import DoctorDashboard from './pages/Dashboard/DoctorDashboard'
import PatientDashboard from './pages/Dashboard/PatientDashboard'

import Blogs from './pages/Blogs'
import TopBar from './components/layout/TopBar'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Hospitals from './pages/Hospitals'

const App = () => {
  return (
    <BrowserRouter>
    <div className='hidden lg:flex'>
    <TopBar/>
    </div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/PatientRegister" element={<PatientRegister/>} />
        <Route path="/DoctorRegister" element={<DoctorRegister/>} />
        <Route path='/patientdashboard' element={<PatientDashboard/>} />
        <Route path='/doctordashboard' element={<DoctorDashboard/>}/>
         <Route path='/about' element={<AboutUs/>} />
          <Route path='/contact' element={<ContactUs/>} />
           <Route path='/hospitals' element={<Hospitals/>} />
          <Route path='/blogs' element={<Blogs/>} />
        
    </Routes>
    </BrowserRouter>
  )
}

export default App