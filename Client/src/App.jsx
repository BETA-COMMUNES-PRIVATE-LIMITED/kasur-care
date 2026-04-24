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

const App = () => {
  return (
    <div>
      <div className='bg-gray-100 hidden lg:flex'>
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
     

    </div>

  )
}

export default App