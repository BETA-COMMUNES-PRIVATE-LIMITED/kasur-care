import React from 'react'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import TopBar from './components/layout/TopBar'
import Specialties from './pages/Specialties'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Home />
      <Services/>
      <Specialties/>
      <Doctors/>

    </div>

  )
}

export default App