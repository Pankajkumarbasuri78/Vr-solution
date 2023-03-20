import React from 'react';
import './App.css';
import { Aboutus } from './components/Aboutus/Aboutus';
import { Heading } from './components/common/Heading/Heading';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';


function App() {
  return (
    <>
    <Hero />
    <Heading name='OUR OFFERINGS '/>
    <Heading name='About Us'/>
    <Aboutus />
    <Footer />

    </>
  );
}

export default App;
