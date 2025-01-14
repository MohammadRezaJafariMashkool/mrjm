import { useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
 import Service from './Components/Service/Service';
import Header from './Components/Header/Header';

import ApplianceInstallationService from './Assets/Services/Appliance Installation.jpg'
import ApplianceInstallation1 from './Assets/Posts/Applience Installatin (1).jpg'
import ApplianceInstallation2 from './Assets/Posts/Applience Installatin (2).jpg'
import ApplianceInstallation3 from './Assets/Posts/Applience Installatin (3).jpg'
import ApplianceInstallation4 from './Assets/Posts/Applience Installatin (4).jpg'
import Assembly1 from './Assets/Posts/Assembly (1).jpg'
import Assembly2 from './Assets/Posts/Assembly (2).jpg'
import Assembly3 from './Assets/Posts/Assembly (3).jpg'
import Assembly4 from './Assets/Posts/Assembly (4).jpg'
import Assembly5 from './Assets/Posts/Assembly (5).jpg'
import Assembly6 from './Assets/Posts/Assembly (6).jpg'
import Assembly7 from './Assets/Posts/Assembly (7).jpg'
import Assembly8 from './Assets/Posts/Assembly (8).jpg'
import Assembly9 from './Assets/Posts/Assembly (9).jpg'
import Assembly10 from './Assets/Posts/Assembly (10).jpg'
import Assembly11 from './Assets/Posts/Assembly (11).jpg'
import Assembly12 from './Assets/Posts/Assembly (12).jpg'
import Assembly13 from './Assets/Posts/Assembly (13).jpg'
import Assembly14 from './Assets/Posts/Assembly (14).jpg'
import Assembly15 from './Assets/Posts/Assembly (15).jpg'
import Assembly16 from './Assets/Posts/Assembly (16).jpg'
import Assembly17 from './Assets/Posts/Assembly (17).jpg'
import Assembly18 from './Assets/Posts/Assembly (18).jpg'
import Assembly19 from './Assets/Posts/Assembly (19).jpg'
import Assembly20 from './Assets/Posts/Assembly (20).jpg'
import Assembly21 from './Assets/Posts/Assembly (21).jpg'
import Assembly22 from './Assets/Posts/Assembly (22).jpg'
import Assembly23 from './Assets/Posts/Assembly (23).jpg'
import Assembly24 from './Assets/Posts/Assembly (24).jpg'
import Assembly25 from './Assets/Posts/Assembly (25).jpg'
import Assembly26 from './Assets/Posts/Assembly (26).jpg'
import HolidayLighting1 from './Assets/Posts/Holiday Lighting (1).jpg'
import HolidayLighting2 from './Assets/Posts/Holiday Lighting (2).jpg'
import HolidayLighting3 from './Assets/Posts/Holiday Lighting (3).jpg'
import Lighting1 from './Assets/Posts/Lighting (1).jpg'
import Lighting2 from './Assets/Posts/Lighting (2).jpg'
import Lighting3 from './Assets/Posts/Lighting (3).jpg'
import Lighting4 from './Assets/Posts/Lighting (4).jpg'
import Lighting5 from './Assets/Posts/Lighting (5).jpg'
import Lighting6 from './Assets/Posts/Lighting (6).jpg'
import Lighting7 from './Assets/Posts/Lighting (7).jpg'
import Lighting8 from './Assets/Posts/Lighting (8).jpg'
import Lighting9 from './Assets/Posts/Lighting (9).jpg'
import Lighting10 from './Assets/Posts/Lighting (10).jpg'
import Lighting11 from './Assets/Posts/Lighting (11).jpg'
import Lighting12 from './Assets/Posts/Lighting (12).jpg'
import Lighting13 from './Assets/Posts/Lighting (13).jpg'
import Lighting14 from './Assets/Posts/Lighting (14).jpg'
import cleaningService from './Assets/Services/Cleaning/Cleaning.jpg'
import gutterCleaningService from './Assets/Services/Cleaning/Gutter Cleaning.jpg'
import powerWashingService from './Assets/Services/Cleaning/Power Washing.jpg'
import electricalService from './Assets/Services/Electrical.jpg'
import fanInstallationService from './Assets/Services/Fan Installation.jpg'
import furnitureAssemblyService from './Assets/Services/Furniture Assembly.jpg'
import generalHandymanService from './Assets/Services/General Handyman.jpg'
import holidayLightingService from './Assets/Services/Lighting/Holiday Lighting.jpg'
import lightingService from './Assets/Services/Lighting/Lighting.jpg'
import movingService from './Assets/Services/Moving.jpg'
import paintingService from './Assets/Services/Painting.jpg'
import plumbingService from './Assets/Services/Plumbing.jpg'
import smartHomeService from './Assets/Services/Smart Home.jpg'
import TVMountingService from './Assets/Services/TV Mounting.jpg'
import windowTreatmentService from './Assets/Services/WindowTreatment.jpg'
import DoorRepairService from './Assets/Services/Door Repair.jpg'
import BabysittingPicture from './Assets/Services/babysitting.jpg'
import GardeningPicture from './Assets/Services/Gardening.jpg'
import TVMounting1 from './Assets/Posts/TV Mounting (1).jpg'
import TVMounting2 from './Assets/Posts/TV Mounting (2).jpg'
import TVMounting3 from './Assets/Posts/TV Mounting (3).jpg'
import TVMounting4 from './Assets/Posts/TV Mounting (4).jpg'
import TVMounting5 from './Assets/Posts/TV Mounting (5).jpg'
import TVMounting6 from './Assets/Posts/TV Mounting (6).jpg'
import TVMounting7 from './Assets/Posts/TV Mounting (7).jpg'
import TVMounting8 from './Assets/Posts/TV Mounting (8).jpg'
import TVMounting9 from './Assets/Posts/TV Mounting (9).jpg'
import TVMounting10 from './Assets/Posts/TV Mounting (10).jpg'
import TVMounting11 from './Assets/Posts/TV Mounting (11).jpg'
import TVMounting12 from './Assets/Posts/TV Mounting (12).jpg'
import TVMounting13 from './Assets/Posts/TV Mounting (13).jpg'
import TVMounting14 from './Assets/Posts/TV Mounting (14).jpg'
import TVMounting15 from './Assets/Posts/TV Mounting (15).jpg'
import TVMounting16 from './Assets/Posts/TV Mounting (16).jpg'
import TVMounting17 from './Assets/Posts/TV Mounting (17).jpg'

function App() {
 const [selectedService, setSelectedService] = useState(["Services", "Services"]);
const [searchText, setSearchText] = useState('');
 const servicesExperience = [
  {name: 'Appliance Installation',
    experiences: [
      { id: 0, img: ApplianceInstallationService },
      { id: 1, img: ApplianceInstallation1 },
      { id: 2, img: ApplianceInstallation2 },
      { id: 3, img: ApplianceInstallation3 },
      { id: 4, img: ApplianceInstallation4 },
    ],},
  {name: 'Cleaning',
    experiences: [{ id: 0, img: cleaningService }],},
  {name: 'Door Repair',
    experiences: [{ id: 0, img: DoorRepairService }],},
  {name: 'Cleaning',
    experiences: [{ id: 0, img: gutterCleaningService }],},
  {name: 'Cleaning',
    experiences: [{ id: 0, img: powerWashingService }],},
  {name: 'Electrical',
    experiences: [{ id: 0, img: electricalService }],},
  {name: 'Fan Installation',
    experiences: [{ id: 0, img: fanInstallationService }],},
  {name: 'Assembly',
    experiences: [
      { id: 0, img: furnitureAssemblyService },
      { id: 1, img: Assembly1 },
      { id: 2, img: Assembly2 },
      { id: 3, img: Assembly3 },
      { id: 4, img: Assembly4 },
      { id: 5, img: Assembly5 },
      { id: 6, img: Assembly6 },
      { id: 7, img: Assembly7 },
      { id: 8, img: Assembly8 },
      { id: 9, img: Assembly9 },
      { id: 10, img: Assembly10 },
      { id: 11, img: Assembly11 },
      { id: 12, img: Assembly12 },
      { id: 13, img: Assembly13 },
      { id: 14, img: Assembly14 },
      { id: 15, img: Assembly15 },
      { id: 16, img: Assembly16 },
      { id: 17, img: Assembly17 },
      { id: 18, img: Assembly18 },
      { id: 19, img: Assembly19 },
      { id: 20, img: Assembly20 },
      { id: 21, img: Assembly21 },
      { id: 22, img: Assembly22 },
      { id: 23, img: Assembly23 },
      { id: 24, img: Assembly24 },
      { id: 25, img: Assembly25 },
      { id: 26, img: Assembly26 },
    ],},
  {name: 'General Handyman',
    experiences: [{ id: 0, img: generalHandymanService },],},
  {name: 'Lighting', subname:'Holiday Lighting',
    experiences: [
      { id: 0, img: holidayLightingService },
      { id: 1, img: HolidayLighting1 },
      { id: 2, img: HolidayLighting2 },
      { id: 3, img: HolidayLighting3 },
    ],},
  {name: 'Lighting',
    experiences: [
      { id: 0, img: lightingService },
      { id: 1, img: Lighting1 },
      { id: 2, img: Lighting2 },
      { id: 3, img: Lighting3 },
      { id: 4, img: Lighting4 },
      { id: 5, img: Lighting5 },
      { id: 6, img: Lighting6 },
      { id: 7, img: Lighting7 },
      { id: 8, img: Lighting8 },
      { id: 9, img: Lighting9 },
      { id: 10, img: Lighting10 },
      { id: 11, img: Lighting11 },
      { id: 12, img: Lighting12 },
      { id: 13, img: Lighting13 },
      { id: 14, img: Lighting14 },
    ],},
  {name: 'Moving',
    experiences: [
      { id: 0, img: movingService },
    ],},
  {name: 'Painting',
    experiences: [
      { id: 0, img: paintingService },
    ],},
  {name: 'Plumbing',
    experiences: [
      { id: 0, img: plumbingService },
    ],},
  {name: 'Smart Home',
    experiences: [
      { id: 0, img: smartHomeService },
    ],},
  {name: 'TV And Electronics',
    experiences: [
      { id: 0, img: TVMountingService },
      { id: 1, img: TVMounting1 },
      { id: 2, img: TVMounting2 },
      { id: 3, img: TVMounting3 },
      { id: 4, img: TVMounting4 },
      { id: 5, img: TVMounting5 },
      { id: 6, img: TVMounting6 },
      { id: 7, img: TVMounting7 },
      { id: 8, img: TVMounting8 },
      { id: 9, img: TVMounting9 },
      { id: 10, img: TVMounting10 },
      { id: 11, img: TVMounting11 },
      { id: 12, img: TVMounting12 },
      { id: 13, img: TVMounting13 },
      { id: 14, img: TVMounting14 },
      { id: 15, img: TVMounting15 },
      { id: 16, img: TVMounting16 },
      { id: 17, img: TVMounting17 },
    ],},
  {name: 'Window Treatment',
    experiences: [
      { id: 0, img: windowTreatmentService },
    ],},
  {name: 'Babysitting',
    experiences: [
      { id: 0, img: BabysittingPicture },
    ],},
  {name: 'Gardening and Landscaping',
    experiences: [
      { id: 0, img: GardeningPicture },
    ],}
];
const services = [
  {name: 'Appliance Installation', image: ApplianceInstallationService},
  {name: 'Cleaning', image: cleaningService},
  {name: 'Door Repair', image: DoorRepairService},
  {name: 'Cleaning', image: gutterCleaningService},
  {name: 'Cleaning', image: powerWashingService},
  {name: 'Electrical',  image: electricalService},
  {name: 'Fan Installation',  image: fanInstallationService},
  {name: 'Assembly',  image: furnitureAssemblyService},
  {name: 'General Handyman',  image: generalHandymanService},
  {name: 'Lighting', image: holidayLightingService},
  {name: 'Lighting',  image: lightingService},
  {name: 'Moving', image: movingService},
  {name: 'Painting', image: paintingService},
  {name: 'Plumbing', image: plumbingService},
  {name: 'Smart Home', image: smartHomeService},
  {name: 'TV And Electronics', image: TVMountingService},
  {name: 'Window Treatment', image: windowTreatmentService},
  {name: 'Babysitting', image: BabysittingPicture},
  {name: 'Gardening and Landscaping', image: GardeningPicture}
];

  return (
    <div className="main-container">
      <Header searchText={searchText} setSearchText={setSearchText} selectedService={selectedService} setSelectedService={setSelectedService}/>
      <div className='body-container'>
        {/* Navbar is always visible */}
        <Navbar selectedService={selectedService} setSelectedService={setSelectedService}/>        
        {/* Render the selected component dynamically */}
        <div className="content-container">
          <Service 
            selectedService={selectedService} 
            setSelectedService={setSelectedService} 
            services={services} 
            servicesExperience={servicesExperience} 
            searchText={searchText}/>

        </div>
      </div>
    </div>
  );
}

export default App;
