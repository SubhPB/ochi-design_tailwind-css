/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import Navbar from './commonJSX/Navbar';
import Landing from './commonJSX/Landing';
import Marquee from './components/Marquee/Marquee';
import About from './components/Pages/About';
import Eyes from './commonJSX/Eyes';
import Projects from './components/Projects/Projects';
import Reviews from './components/Reviews/Reviews';
import Cards from './components/Cards/Cards';
import GetReady from './components/GetReady/GetReady';
import Footer from './commonJSX/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });

  return (
    <div className='w-full min-h-screen bg-zinc-900'>

      <Navbar />
      <Landing />
      <div className='z-5' data-scroll data-scroll-section data-scroll-speed='-.1'>
        <Marquee />
        <About />
        <Eyes extraCss=' h-screen' />
      </div>

      <div className='bg-zinc-900' data-scroll data-scroll-section data-scroll-speed='.05'>
        <Projects />
        <Reviews />
        <Cards />
        <GetReady />
        <Footer />
      </div>
      
    </div>
  )
}

export default App
