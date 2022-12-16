import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "../src/components/Footer";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Contactme from "./components/Contactme";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <Navbar/> 
           
    
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Aboutme" element={<Aboutme />}></Route>
      <Route path="/Portfolio" element={<Portfolio />}></Route>
      <Route path="/Contactme" element={<Contactme />}></Route>
      <Route path="/Resume" element={<Resume />}></Route>




      </Routes>
      <Footer/>
    </Router>
  );
    
}

export default App;