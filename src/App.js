/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import Navbar from './commonJSX/Navbar';
import Landing from './commonJSX/Landing';
import Marquee from './components/Marquee/Marquee';
import About from './components/Pages/About';

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900'>

      <Navbar />
      <Landing />
      <Marquee />
      <About />

    </div>
  )
}

export default App
