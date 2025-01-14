import React from 'react'
import './Header.css'
import siteIcon from '../../Assets/Site Icon Transparent.png'
import callIcon from '../../Assets/Icons/Call Icon.png'
import TextIcon from '../../Assets/Icons/Text Icon.png'
import emailIcon from '../../Assets/Icons/Email Icon.png'
export const Header = ( {searchText, setSearchText, setSelectedService, selectedService}) => {
  
  return (
    <div className='header-container'>
      <div className='header-bar'>
        <img src={siteIcon} alt="" />
        <p>Blog</p>
        <a href="
                  mailto:handypros2010@gmail.com?
                  subject=Become%20a%20pro&
                  body=Full Name: %0D%0A%0D%0ACellphone number: %0D%0A%0D%0AAddress: %0D%0ASecurity Number: %0D%0A%0D%0AAlso Attach a Clear picture of your Identity card."
                  >
          Become a pro
        </a>
        <p>Help</p>
      </div>
      <div className='header-search-container'>
          <div className="evergency-box">
            <p>Do you need someone right now?</p>
            <div className='callemail-row'><img className='email-call-icon' src={callIcon} alt="" /><a href="tel:+12025701270">+1(202)570-1270</a></div>
            <div className='callemail-row'><img className='email-call-icon' src={TextIcon} alt="" /><a href="sms:+12025701270">+1(202)570-1270</a></div>         
            <div className='callemail-row'><img className='email-call-icon' src={emailIcon} alt="" /><a href="mailto:handypros2010@gmail.com">handypros2010@gmail.com</a></div>           
          </div>
          <div className='searchbox'>
            <p>Serch for the service you need: </p>
            <input type="text" placeholder='Search for a service (e.g. "cleaning")' value={searchText} onChange={(e) => {setSearchText(e.target.value); setSelectedService(["Services", "Services"])}}/>
          </div>
      </div>
    </div>
  )
}

export default Header;