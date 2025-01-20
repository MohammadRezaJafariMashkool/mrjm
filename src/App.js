import './App.css';
import HeaderCpt from './Components/header/header';
import AboutUsCpt from './Components/about';
import LongCpt from './Components/long';
import AiCpt from './Components/ai';
import SyberCpt from './Components/syber';
import CustomersCpt from './Components/customers/customers';
import ProductsCpt from './Components/products/products';
import ContactCpt from './Components/contact/contact';

function App() {
  return (
    <div className="main-container">
      <HeaderCpt />
      <div className='app-body-container'>
        <AboutUsCpt />
        <LongCpt />
        <AiCpt />
        <SyberCpt />
        <ProductsCpt />
        <CustomersCpt />
        <ContactCpt />
      </div>
    </div>
  );
}

export default App;
