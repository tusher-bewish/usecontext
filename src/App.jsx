import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Usecontext from "./Page/Usecontext"

import Home from "./Page/Home"
import Footer from './Page/Footer'
import About from "./Page/About"
import Contact from "./Page/Contact"

const App = () => {
  return (
    <BrowserRouter>
      
      <Usecontext /> {/* Navbar */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
          <Footer/>
    </BrowserRouter>
  )
}

export default App
