import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'
import Login from './Login'
import Error404 from './Error404'
import Header from './Header'

const RoutesApp = () => {
  return (
    <Router>
      <div className="w-1/5 shadow-xl shadow-gray-500 rounded-lg flex items-center justify-center flex-col">
        <Header />
      </div>

      <div className="w-4/5 rounded-lg overflow-y-auto">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default RoutesApp