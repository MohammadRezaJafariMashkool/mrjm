import React from 'react'
import './feutures.css'
import abtUsPic from '../Assets/About Us.jpg'
export const about = () => {
  
  return (
      <div className='feutures-container flxrow bg-yellow' id='about'>
          <img className='feutures-img' src={abtUsPic} alt="" />
          <div className='feutures-p-container'>
            <h1>Who We Are:</h1>
            <p className='feutures-p'>
              Welcome to our world of innovative software solutions. At MRJM, 
              we specialize in developing high-quality Windows software, mobile applications, 
              and progressive web apps (PWAs). With a proven track record in industries such as real estate, 
              accounting, education, online shops, marketplaces, office automation, and even Telegram bots, 
              we bring versatile expertise to the table.
            </p>
            <p className='feutures-p'>
              Our team is passionate about crafting intuitive, scalable, and 
              user-friendly applications tailored to your unique business requirements. 
              By blending technical excellence with creative thinking, 
              we turn your ideas into impactful solutions that drive growth, efficiency, and success. Together, let’s 
              build the future of software innovation.
            </p>
          </div>
      </div>
  )
}

export default about;