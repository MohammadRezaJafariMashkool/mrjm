import React from 'react'
import './feutures.css'
import sbrPic from '../Assets/Syber.png'
export const syber = ( ) => {
  
  return (
      <div className='feutures-container flxrow rtl bg-black' id='syber-security'>
        <img className='feutures-img' src={sbrPic} alt="" />
        <div className='ltr feutures-p-container font-antiquewhite'>
          <h1>Cyber Security:</h1>
          <p className='feutures-p'>
            Cybersecurity is a cornerstone of our software development process. 
            We understand that in today’s digital world, protecting your data and 
            ensuring the integrity of your systems is paramount. 
            That’s why we design our products with industry-leading security protocols and continuous monitoring to shield you from emerging threats.
          </p>
          <p className='feutures-p'>
            From encryption technologies to secure authentication methods, 
            we implement multi-layered defenses to safeguard your sensitive information. 
            Our team stays ahead of the curve, proactively identifying vulnerabilities and 
            fortifying systems to ensure our solutions not only meet but exceed the highest security standards. With us, your trust is always protected.
          </p>
        </div>
      </div>
  )
}

export default syber;