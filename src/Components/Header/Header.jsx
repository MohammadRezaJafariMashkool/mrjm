import React from 'react'
import './header.css'
import logoIcn from '../../Assets/logo.png'
import aiIcn from '../../Assets/Icons/ai-icon.png'
import SybIcn from '../../Assets/Icons/sybersecurity-icon.png'
import PdtIcn from '../../Assets/Icons/products-icon.png'
import CusIcn from '../../Assets/Icons/customers-icon.png'
import CntIcn from '../../Assets/Icons/contactus-icon.png'
export const Header = () => {
  
  return (
    <div className='header-container'>
      <div className="header-logo-container"><img className='logo-icon' src={logoIcn} alt="" /></div>
      <div className="header-menu-items-container">
        <img src={aiIcn} alt="" /><a href='#ai'>AI</a>
        <img src={SybIcn} alt="" /><a href='#syber-security'>Syber Security</a>
        <img src={PdtIcn} alt="" /><a href='#'>Products</a>
        <img src={CusIcn} alt="" /><a href='#'>Customers</a>
        <img src={CntIcn} alt="" /><a href='#'>Cantact Us</a>
      </div>
    </div>
  )
}

export default Header;