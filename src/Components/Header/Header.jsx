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
        <a href='#ai'><img className='menu-item-img' src={aiIcn} alt="" /><p className='menu-item-p'>AI</p></a>
        <a href='#syber-security'><img className='menu-item-img' src={SybIcn} alt="" /><p className='menu-item-p'>Syber Security</p></a>
        <a href='#'><img className='menu-item-img' src={PdtIcn} alt="" /><p className='menu-item-p'>Products</p></a>
        <a href='#'><img className='menu-item-img' src={CusIcn} alt="" /><p className='menu-item-p'>Customers</p></a>
        <a href='#'><img className='menu-item-img' src={CntIcn} alt="" /><p className='menu-item-p'>Cantact Us</p></a>
      </div>
    </div>
  )
}

export default Header;