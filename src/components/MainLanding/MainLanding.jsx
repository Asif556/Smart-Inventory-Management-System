import React from 'react'
import './MainLanding.css'
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import {Link} from 'react-scroll';
const MainLanding = () => {


    useEffect(() => {
        const a=new Typewriter('#typewriter', {
          strings: ['INVO'],
          autoStart:true,
          loop:true,
          delay:200
        });
      }, []);
      

  return (
    <div className='main' id='home'>
        <div className="write">
        <h1 className='Name'>
            <span id="typewriter"></span>
            </h1>
        <p className='para'>Unlock smarter business decisions with InventoryPro – the AI-powered solution for seamless inventory tracking, real-time freshness checks, and predictive pricing. Manage your stock effortlessly and boost efficiency like never before.</p>
       <Link to='about' smooth={true} duration={600} > <button className='explore' > Explore  </button></Link>
    </div>
    </div>
  )
}

export default MainLanding