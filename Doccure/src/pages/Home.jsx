import React from 'react'
import TopBar from '../components/layout/TopBar'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/common/Hero'
import Services from '../components/common/Services'
import Specialities from '../components/common/Specialities'
import Doctors from './Doctors'
import About from './About'
import Testimonial from '../components/common/Testimonial'
import TrustPartner from '../components/common/TrustPartner'
import Quries from '../components/common/Quries'
import Blogs from './Blogs'
import Footer from '../components/layout/Footer'


const Home = () => {
  return (
   <>
   <TopBar/>
   <Navbar/>
   <Hero/>
   <Services/>
   <Specialities/>
   <Doctors/>
   <About/>
   <Testimonial/>
   <TrustPartner/>
   <Quries/>
   <Blogs/>
   <Footer/>

   
   </>
  )
}

export default Home