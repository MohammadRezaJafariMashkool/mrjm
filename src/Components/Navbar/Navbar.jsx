import React from 'react';
import './Navbar.css';

const Navbar = ({selectedService, setSelectedService}) => {
  const navItems = [
    'Services',
    'TV And Electronics',
    'Door Repair',
    'Fan Installation',
    'Lighting',
    'Assembly',
    'General Handyman',
    'Plumbing',
    'Electrical',
    'Painting',
    'Moving',
    'Smart Home',
    'Window Treatment',
    'Cleaning',
    'Appliance Installation',
    'Babysitting',
    'Gardening and Landscaping',
  ];

  return (
    <div className="navbar-container">
      {navItems.map((item) => (
        <div
          key={item}
          className={"navbar-item "+(selectedService[1]===item?"selected":"")} // Add 'selected' class if item is selected
          onClick={() => setSelectedService([(item!=="Services"?"servicesExperience":"Services"), item])}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
