import React from 'react'
import './Features.css'
import Cards from '../Cards/Cards'
const Features = () => {
  return (
    <div className='mainbody' id='features'>
        <div className='key'>
          <h2>Key Features</h2>
        </div>
        <div className="cards"><Cards/></div>

    </div>
  )
}

export default Features