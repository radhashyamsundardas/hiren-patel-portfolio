import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar'
import Aboutme from './components/aboutme'

function App() {
  return (
    <div> 
      {/* <Header/> */}
      <Navbar/>
      <Aboutme/>
      <Footer/>
    </div>
  );
}

export default App;
