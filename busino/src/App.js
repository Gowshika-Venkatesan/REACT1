import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home"
import { BrowserRouter } from "react-router-dom";
import ImageSlider from './components/pages/ImageSlider';
import { SliderData } from './components/pages/Slider';
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import { FooterContainer } from './container/Footer'


function App() {
  return (
      <>
       <BrowserRouter>
           <Navbar />
           <Home />
           <Contact/>
           <About/>
           <Service/>

           <ImageSlider slides={SliderData} />;
       </BrowserRouter>
          <FooterContainer />
       </>
          );
}

export default App;
