import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Aboutme from './components/aboutme';
import Portfolio from './components/portfolio'








function App() {
  return (

    <div> 
      <Navbar/>
      <Aboutme/>
      <Footer/>
      <Portfolio/>
    </div>
  );
    
}

export default App;
