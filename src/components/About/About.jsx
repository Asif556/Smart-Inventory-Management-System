import React from 'react'
import './About.css'
import { Link } from 'react-scroll'
const About = () => {
  return (
    <div className='About' id='about'>
        <div className="first box">
            <h2>Introducing INVO : Your Smart Solution to Seamless Inventory Management!📦</h2>
            <p>"Ready to transform how you manage your inventory? Say hello to InventoryPro, the cutting-edge solution powered by machine learning for smarter inventory control, freshness checks, and predictive pricing!"</p>
        </div>
        <div className="second box">
            <h2>Unleash the Power of Smarter Inventory:</h2>
            <p>InventoryPro empowers you to manage your stock with unparalleled efficiency. Whether you're streamlining operations or predicting market trends, our advanced machine learning engine is your trusted partner for smarter inventory decisions.</p>
        </div>
        <div className="third box">
            <h2>Infinite Efficiency:</h2>
            <p>InventoryPro is your gateway to limitless efficiency. Simply input your data, and watch as InventoryPro transforms your operations with real-time tracking, freshness analysis, and predictive pricing, helping you make informed decisions effortlessly.</p>

        </div>
        <div className="fourth box">
            <h2>
            Precision in Every Stock Move:</h2>
            <p>Explore a range of inventory management features, from real-time tracking to freshness monitoring, and watch as InventoryPro seamlessly adapts to your business needs. The efficiency is in the details, and every decision drives your success story.</p>
        </div>
        <div className="btn">
            <Link to='features' smooth={true} duration={600}><button className='get'>GET STARTED!</button></Link>
        </div>
    </div>
  )
}

export default About
