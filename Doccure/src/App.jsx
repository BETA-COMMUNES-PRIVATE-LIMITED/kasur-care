import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import Navbar from './components/layout/Navbar'
import DoctorRegister from './pages/Auth/DoctorRegister'
import PatientRegister from './pages/Auth/PatientRegister'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Blogs from './pages/Blogs'

const App = () => {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/PatientRegister" element={<PatientRegister/>} />
        <Route path="/DoctorRegister" element={<DoctorRegister/>} />
        <Route path='/doctors' element={<Doctors/>} />
         <Route path='/about' element={<About/>} />
          <Route path='/blogs' element={<Blogs/>} />
        
    </Routes>
    </BrowserRouter>
  )
}

export default App