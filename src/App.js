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

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900'>

      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes extraCss=' h-screen ' />
      <Projects />
      <Reviews />
      <Cards />
      <GetReady />
      <Footer />

    </div>
  )
}

export default App
