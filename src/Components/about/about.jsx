import React from 'react'
import './about.css'
import abtUsPic from '../../Assets/About Us.jpg'
import lngSotPic from '../../Assets/Ltsc.png'
import aiPic from '../../Assets/AI.jpg'
import sbrPic from '../../Assets/Syber.png'
export const about = ( {searchText, setSearchText, setSelectedService, selectedService}) => {
  
  return (
    <div className='about-container'>
      <div className='about-us-container flxrow' id='about-us'>
          <img src={abtUsPic} alt="" />
          <div className='text-container'>
            <h1>About Us:</h1>
            <p className='about-p'>
              Welcome to our world of innovative software solutions. At MRJM, 
              we specialize in developing high-quality Windows software, mobile applications, 
              and progressive web apps (PWAs). With a proven track record in industries such as real estate, 
              accounting, education, online shops, marketplaces, office automation, and even Telegram bots, 
              we bring versatile expertise to the table.
            </p>
            <p className='about-p'>
              Our team is passionate about crafting intuitive, scalable, and 
              user-friendly applications tailored to your unique business requirements. 
              By blending technical excellence with creative thinking, 
              we turn your ideas into impactful solutions that drive growth, efficiency, and success. Together, let’s 
              build the future of software innovation.
            </p>
          </div>
      </div>
      <div className='loung-time-container flxrow rtl' id='long-time-support'>
          <img src={lngSotPic} alt="" />
          <div className='ltr text-container'>
            <h1>Long Time Support:</h1>
            <p className='about-p'>
              We believe in building relationships that last. 
              Our commitment to long-term support ensures that we’re always here to help you 
              navigate the evolving tech landscape. Whether it’s routine updates, new feature requests, 
              or resolving unforeseen challenges, our dedicated team works tirelessly to keep your systems running smoothly.
            </p>
            <p className='about-p'>
              Our support doesn’t stop at problem-solving; 
              it’s about future-proofing your business. As your goals evolve, 
              we adapt our solutions to meet your growing needs. 
              Partner with us and experience a customer-first approach where your success remains our top priority, long after delivery
            </p>
          </div>
      </div>
      <div className='ai-container flxrow' id='ai'>
          <img src={aiPic} alt="" />
          <div className='text-container'>
            <h1>AI:</h1>
            <p className='about-p'>
            Artificial Intelligence is at the heart of our innovative software solutions. 
            We leverage AI to streamline complex processes, enhance decision-making, 
            and unlock new possibilities for businesses. Whether it's predictive analytics for better insights or 
            automation that reduces operational overhead, our AI solutions are tailored to meet the unique challenges of your industry.
            </p>
            <p className='about-p'>
            By embedding machine learning and natural language processing in our products, 
            we create smarter applications that learn, adapt, and improve over time. 
            From chatbots that offer seamless customer interaction to AI-driven marketplaces that personalize user experiences, 
            we push the boundaries of technology to empower your business.
            </p>
          </div>
      </div>
      <div className='syber-container flxrow rtl' id='syber-security'>
          <img src={sbrPic} alt="" />
          <div className='ltr text-container'>
            <h1>Cyber Security:</h1>
            <p className='about-p'>
              Cybersecurity is a cornerstone of our software development process. 
              We understand that in today’s digital world, protecting your data and 
              ensuring the integrity of your systems is paramount. 
              That’s why we design our products with industry-leading security protocols and continuous monitoring to shield you from emerging threats.
            </p>
            <p className='about-p'>
              From encryption technologies to secure authentication methods, 
              we implement multi-layered defenses to safeguard your sensitive information. 
              Our team stays ahead of the curve, proactively identifying vulnerabilities and 
              fortifying systems to ensure our solutions not only meet but exceed the highest security standards. With us, your trust is always protected.
            </p>
          </div>
      </div>
    </div>
  )
}

export default about;