import React from 'react'
import './feutures.css'
import aiPic from '../Assets/AI.jpg'
export const about = () => {
  
  return (
      <div className='feutures-container flxrow bg-dark-brown' id='ai'>
          <img className='feutures-img' src={aiPic} alt="" />
          <div className='font-bisque feutures-p-container '>
            <h1>AI:</h1>
            <p className='feutures-p'>
            Artificial Intelligence is at the heart of our innovative software solutions. 
            We leverage AI to streamline complex processes, enhance decision-making, 
            and unlock new possibilities for businesses. Whether it's predictive analytics for better insights or 
            automation that reduces operational overhead, our AI solutions are tailored to meet the unique challenges of your industry.
            </p>
            <p className='feutures-p'>
            By embedding machine learning and natural language processing in our products, 
            we create smarter applications that learn, adapt, and improve over time. 
            From chatbots that offer seamless customer interaction to AI-driven marketplaces that personalize user experiences, 
            we push the boundaries of technology to empower your business.
            </p>
          </div>
      </div>
  )
}

export default about;