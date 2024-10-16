import React from 'react'
import './Navbar.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [scrolled, set] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 150) {
            set(true);
        } else {
            set(false);
        }
    };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
  
  },[])
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <Link to='home'smooth={true} duration={600} ><div className="logo"><h1>INVO</h1></div></Link>
      <div className="links">
      <Link className='link' to='home'smooth={true} duration={1000} >Home</Link>
      <Link className='link' to='about' smooth={true} duration={1000}>About</Link>
      <Link className='link' to='features'smooth={true} duration={1000} >Features</Link>
      <Link className='link' to='footer'smooth={true} duration={1000} >Contact Us</Link>
      </div>
      </nav>
  )
}

export default Navbar