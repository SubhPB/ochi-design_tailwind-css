/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { MdArrowOutward } from "react-icons/md";

function Landing() {
  return (
    <div className='w-full min-h-70vh pt-1 flex flex-col justify-between'>
      <div className="text-structure mt-7 lg:mt-20 px-7 lg:px-20">
        <Masker text={'WE CREATE'}/>
        <Masker text={'EYE OPENING'} attachImg={true}/>
        <Masker text={'PRESENTATIONS.'}/>
      </div>
      <BottomBtnLine />
    </div>
  )
};

function Masker({text=undefined, attachImg= false, }){

    const _SideImg = () => {
        const imgStyle = " bg-[url('https://images.pexels.com/photos/2035214/pexels-photo-2035214.jpeg')] bg-cover bg-center ";
        return (
            <div className={`w-[13vmin] h-[10vmin] lg:h-[10vmin]  relative lg:top-[3vmin] rounded-[13px] mr-[2vmin] ${imgStyle}`}></div>
        );
    };

    const _Masker = () => {
        return (
            <div className="masker mt-4 flex">
                { attachImg &&  _SideImg()}
                <h1 className="uppercase text-10vmin lg:text-15vmin leading-none font-['Founders_Grotesk] font-bold">{text}</h1>
            </div>
        );
    };
    return !text ? undefined : _Masker();
};

function BottomBtnLine(){

    const btns = [
        'For public and private companies',
        'From the first pitch to IPO',
    ];

    return (
        
        <div className="border-t-[1px] border-white-800 mt-[8.2vmin] mb-3 flex flex-col p-y-8 lg:flex-row  lg:justify-between items-start">
            {
                btns.map( (item, index) => (
                    <p key={index} className='text-md font-light tracking-tight leading-none w-full px-2 mt-2 mb-10 lg:pb-2 text-left lg:w-fit'>{item}</p>
                ))
            }
            <StartProjectBtn /> 
            
        </div>
    );
};

function StartProjectBtn({text='START THE PROJECT.'}){

    return (
        <div className="start-project-btn mt-1 flex pr-3 gap-1">
            <div className="px-4 py-1 border-[1px] border-white-800 rounded-full text-xs">{text}</div>
            <div className='w-fit px-1.5 py-1.5 border-[1px] border-white-800 rounded-full'><MdArrowOutward /></div>
        </div>
    )
}

export default Landing
