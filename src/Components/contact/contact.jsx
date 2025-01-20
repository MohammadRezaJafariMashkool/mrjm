import React from 'react'
import './contact.css'
import callIcn from '../../Assets/Icons/call.png'
import emailIcn from '../../Assets/Icons/email.png'
import addressIcn from '../../Assets/Icons/address.png'
export const contact = () => {
  
  return (
    <div className='contact-container flxrow' id='contact'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10155.3665244292!2d-77.29052714820695!3d38.83983003240516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64fcd7b73dc17%3A0xc72c6e9e49e9fe60!2sExpert%20Men!5e0!3m2!1sen!2sit!4v1737329083142!5m2!1sen!2sit" className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="contact-details-container flxcln">
          <h1>Contact Us</h1>
          <div className="contact-row-container flxrow"><img src={callIcn} alt="" className="contact-icon" /><a href='tell:0039 3511369102' className="contact-a">0039 3511369102</a></div>
          <div className="contact-row-container flxrow"><img src={emailIcn} alt="" className="contact-icon" /><a href='mailto:mrjm@info.ir' className="contact-a">mrjm@info.ir</a></div>
          <div className="contact-row-container flxrow"><img src={addressIcn} alt="" className="contact-icon" /><a href='https://maps.app.goo.gl/s48cse6Wk6ttDS5TA' className="contact-a" target="_blank">Corso del Popolo, 151, 30172 Venezia VE, Italy</a></div>
          <div className="contact-row-container flxrow"><img src={addressIcn} alt="" className="contact-icon" /><a href='https://maps.app.goo.gl/tFELGGDoTvwNL56U8' className="contact-a" target="_blank">4144 Evergreen Dr, Fairfax, VA 22032, United States</a></div>
          <div className="contact-row-container flxrow"><img src={addressIcn} alt="" className="contact-icon" /><a href='https://maps.app.goo.gl/R5tGXDwsbKu2fZa46' className="contact-a" target="_blank">GCV2+X5P, Tehran, Tehran Province, Iran</a></div>
        </div>
    </div>
  )
}

export default contact;