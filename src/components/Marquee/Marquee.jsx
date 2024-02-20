/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {

    const H1 = ({text=' WE ARE OCHI!. ', size=' text-[14vmax] '}) => (
        <motion.h1 
            className={`${size} leading-none font-['Founders_Grotesk] font-bold pr-1`}
            initial={{x:'0'}} animate={{x: '-100%'}} 
            transition={{repeat: Infinity, ease: 'linear', duration: 5 }}
            > {text}
        </motion.h1>
    );


    return (
        <div className='relative w-full mt-[13vmax] lg:mt-0 pt-8 pb-16 bg-[#004D43] overflow-hidden rounded-2xl translate-y-6 z-5'>
            <div className="text-marquee p-5 border-t-[2px] border-b-[2px] border-zinc-300 flex whitespace-nowrap y-[2vmax]">
            <H1 /> <H1 />
            </div>
        </div>
    );
}

export default Marquee
