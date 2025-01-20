import React from 'react'
import './feutures.css'
import lngSotPic from '../Assets/Ltsc.png'
export const long = () => {
  
  return (
      <div className='feutures-container bg-coffee flxrow rtl' id='long'>
          <img className='feutures-img' src={lngSotPic} alt="" />
          <div className='ltr feutures-p-container'>
            <h1>Long Term Support:</h1>
            <p className='feutures-p'>
              We believe in building relationships that last. 
              Our commitment to long-term support ensures that we’re always here to help you 
              navigate the evolving tech landscape. Whether it’s routine updates, new feature requests, 
              or resolving unforeseen challenges, our dedicated team works tirelessly to keep your systems running smoothly.
            </p>
            <p className='feutures-p'>
              Our support doesn’t stop at problem-solving; 
              it’s about future-proofing your business. As your goals evolve, 
              we adapt our solutions to meet your growing needs. 
              Partner with us and experience a customer-first approach where your success remains our top priority, long after delivery
            </p>
          </div>
      </div>
  )
}

export default long;