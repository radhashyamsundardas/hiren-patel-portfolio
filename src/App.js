import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/main';








function App() {
  return (
    <Router>
      <Navbar/>      
    
      <Routes>
      <Route path="/" element={<Main />}></Route>

      </Routes>
      <Footer/>
    </Router>
  );
    
}

export default App;
