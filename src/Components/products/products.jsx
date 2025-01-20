import React from 'react'
import './products.css'
import muniPic from '../../Assets/products/Nalsa Municipality.png'
import amlakPic from '../../Assets/products/Nalsa Amlak.png'
import accPic from '../../Assets/products/Nalsa Accounting.png'
import medicPic from '../../Assets/products/NalsaMedic.png'
import berockPic from '../../Assets/products/BeRock.png'
import realPic from '../../Assets/products/Nalsa Real State.png'
export const products = () => {
  const productsList =[
    {name:'Nalsa Municipality',
      descripton: 'Nalsa Municipality is a Windows software solution tailored for municipalities to automate the environment unit. It streamlines property management and pollution tracking, ensuring better environmental oversight. The software supports network usage, making it ideal for collaborative workflows.', 
      picture: muniPic},
    {name:'Nalsa Amlak',
      descripton: 'Nalsa Amlak is a Windows software designed to automate the renovation audit units of municipalities. It aids in managing construction projects and tracking edits or updates to buildings within a designated area, ensuring compliance and efficiency.', 
      picture: amlakPic},
    {name:'Nalsa Accounting',
      descripton: 'Nalsa Accounting is a Windows-based accounting software specifically tailored for the real estate and construction industries. It simplifies financial tracking, project budgeting, and financial reporting, empowering businesses to manage their finances effortlessly.', 
      picture: accPic},
    {name:'NalsaMedic',
      descripton: 'NalsaMedic is a mobile application designed to help users store their medical history and schedule future doctor appointments. It’s a convenient way to keep track of your health and ensure you never miss important medical dates.', 
      picture: medicPic},
    {name:'BeRock',
      descripton: 'BeRock is a mobile application that connects users with professional coaches for personalized workout and diet programs. It helps manage fitness routines, sends reminders, and offers healthy recipes, making it a comprehensive health and wellness tool.', 
      picture: berockPic},
    {name:'Nalsa Real State',
      descripton: 'Nalsa Real State is a web application for real estate businesses. It offers tools to manage property listings, streamline client interactions, and simplify day-to-day operations, enhancing productivity and customer satisfaction.', 
      picture: realPic},
  ]
  return (
      <div className='products-container flxcln' id='products'>
          <p className='products-header'>products</p>
          <div className='products-list-container'>
          {productsList.map((product) => (
            <div className="product-item flxrow unselectable" key={product.id}>
              <img src={product.picture} alt="" className="product-icon" />
              <div className="product-item-p-container">
                <p className="product-name-p">{product.name}</p>
                <p className="product-description-p">{product.descripton}</p>
                </div>              
            </div>
          ))}

          </div>
      </div>
  )
}

export default products;