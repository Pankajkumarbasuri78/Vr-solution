import React from 'react';
import './App.css';
import { Aboutus } from './components/Aboutus/Aboutus';
import { Heading } from './components/common/Heading/Heading';
//import { OfferingCard } from './components/common/OfferingCard/OfferingCard';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Offering } from './components/Offering/Offering';


function App() {
  return (
    <>
    <Hero />
    <Heading name='OUR OFFERINGS '/>
    <Offering />
    <Heading name='About Us'/>
    <Aboutus />
    <Footer />

    </>
  );
}

export default App;
