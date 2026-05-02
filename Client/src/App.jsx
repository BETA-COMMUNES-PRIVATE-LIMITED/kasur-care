import React from 'react'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import TopBar from './components/layout/TopBar'
import Specialties from './pages/Specialties'
import Text from './pages/Text'
import Reason from './pages/Reason'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import TrustPartner from './pages/TrustPartner'
import  Quries from './pages/Quries'
import Blog from './pages/Blog'
import Footer from './pages/Footer'

const App = () => {
  return (

    <div>
      <div className='bg-gray-100 sticky  z-50 hidden lg:flex'>
      <TopBar />   
      </div>
      <Navbar />  
      <Home />
      <Services/>
      <Specialties/>
      <Doctors/>
      <Text/>
      <Reason/>
      <About/>
      <Testimonials/>
      <TrustPartner/>
      <Quries/>
      <Blog/>
      <Footer/>
     

    </div>

  )
}

export default App