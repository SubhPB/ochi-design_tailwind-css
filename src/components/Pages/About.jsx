/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react'

function About() {

    const desc = "Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.";

    const H1 = ({text=desc, className='N/A'}) => <h1 className={className}>{text}</h1>; 

    return (
        <div className='w-full px-10 lg:px-20 py-20 lg:pr-[20vw] bg-[#CDEA68] rounded-t-3xl text-black font-thin'>
            <H1 className=' text-4xl font-["Founders_Grotesk"] leading-[3.5vmax] tracking-tight'/>
        </div>
    );
}

export default About
