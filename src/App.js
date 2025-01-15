import { useState } from 'react';
import './App.css';
import HeaderCpt from './Components/header/header';
import AboutUsCpt from './Components/about/about';

function App() {
  return (
    <div className="main-container">
      <HeaderCpt />
      <AboutUsCpt />
    </div>
  );
}

export default App;
