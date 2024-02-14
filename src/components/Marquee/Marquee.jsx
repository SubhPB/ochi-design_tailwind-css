/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react'

function Marquee() {

    const H1 = ({text=' WE ARE OCHI!. ', size=' text-[13vmax] '}) => <h1 className={`${size} leading-none font-['Founders_Grotesk] font-bold`}>{text}</h1>;


    return (
        <div className='w-full mt-[13vmax] lg:mt-0 py-8 bg-[#004D43] overflow-hidden rounded-2xl'>
            <div className="text-marquee p-5 border-t-[2px] border-b-[2px] border-zinc-300 flex whitespace-nowrap gap-10">
                <H1 /> <H1 />
            </div>
        </div>
    );
}

export default Marquee
