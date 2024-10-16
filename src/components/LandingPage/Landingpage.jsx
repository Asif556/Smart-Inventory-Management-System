import React from 'react'
import MainLanding from '../MainLanding/MainLanding'
import About from '../About/About'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
const Landingpage = () => {
  return (
    <div>
      <Navbar/>
      <MainLanding/>
      <About/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default Landingpage