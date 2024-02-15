/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import Navbar from './commonJSX/Navbar';
import Landing from './commonJSX/Landing';
import Marquee from './components/Marquee/Marquee';
import About from './components/Pages/About';
import Eyes from './commonJSX/Eyes';

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900'>

      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />

    </div>
  )
}

export default App
