import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/Pages/HomePage';
import { IndustryPage } from './components/Pages/IndustryPage';
import { TrainingPage } from './components/Pages/TrainingPage';



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/industry' element={<IndustryPage />} />
      <Route path='/training' element={<TrainingPage />}/>
    </Routes>

    </>
  );
}

export default App;
