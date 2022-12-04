import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';








function App() {
  return (
    <Router>
      <Navbar/>      
    
      <Routes>
      <Route path="/" element={<Home />}></Route>

      </Routes>
      <Footer/>
    </Router>
  );
    
}

export default App;
