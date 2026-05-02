import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import Register from './pages/Auth/Register'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/register" element={<Register/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App