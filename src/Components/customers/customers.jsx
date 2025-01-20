import React from 'react'
import './customers.css'
import handyPic from '../../Assets/customers/handy.png'
import avaPic from '../../Assets/customers/ava.png'
import torshiPic from '../../Assets/customers/torshizi.png'
import municipalityPic from '../../Assets/customers/muni.png'
import estehkamPic from '../../Assets/customers/est.png'
export const customers = () => {
  const customersList =[
    {name: 'Handy Pros', picture: handyPic},
    {name: 'Ava Protein', picture: avaPic},
    {name: 'Torshizi', picture: torshiPic},
    {name: 'Bagershar Municipality', picture: municipalityPic},
    {name: 'Estehkampey', picture: estehkamPic}
  ]
  return (
      <div className='customers-container flxcln' id='customers'>
          <p className='customers-container-header'>Customers</p>
          <div className='customers-list-container flxrow'>
          {customersList.map((customer) => (
            <div className="customer-item flxcln unselectable" key={customer.id}>
              <img src={customer.picture} alt="" className="customer-icon" />
              <p className="customer-p">{customer.name}</p>
            </div>
          ))}

          </div>
      </div>
  )
}

export default customers;