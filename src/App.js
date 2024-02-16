/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import Navbar from './commonJSX/Navbar';
import Landing from './commonJSX/Landing';
import Marquee from './components/Marquee/Marquee';
import About from './components/Pages/About';
import Eyes from './commonJSX/Eyes';
import Projects from './components/Projects/Projects';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900'>

      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Projects />
      <Reviews />

    </div>
  )
}

export default App
