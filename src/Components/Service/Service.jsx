import React from 'react'
import './Service.css'

export const Service = ({ selectedService, setSelectedService, servicesExperience, services, searchText}) => {

  
   // Filter items based on search input
   const filteredItems = searchText === ''?services:services.filter((service) =>service.name.toLowerCase().includes(searchText.toLowerCase()) // Case-insensitive match
  );
  
  



  return (
    <div className='service-container'>
      {selectedService[0] === "servicesExperience"?servicesExperience.map((service) => (
            selectedService[1] === service.name &&
            service.experiences.map((experience) => (
                <div key={service.subname?service.subname:service.name} className="service-small-card flxcln">
                  <img src={experience.img} alt={`Experience ${experience.id}`} />
                  <p>{experience===service.experiences[0]?(service.subname?service.subname:service.name):"Experience"}</p>
                </div>
              ))
        ))
      :filteredItems.map((service) => (
        <div className={"service-small-card flxcln"} onClick={() => setSelectedService(["servicesExperience", service.name])} >
          <img src={service.image} alt={service.name} />
          <p>{service.name}</p>
        </div>
    ))
    }
    </div>
  )
}

export default Service;