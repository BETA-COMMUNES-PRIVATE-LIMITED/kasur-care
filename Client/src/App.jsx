import React from 'react'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import TopBar from './components/layout/TopBar'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Home />
      <Services/>

    </div>

  )
}

export default App