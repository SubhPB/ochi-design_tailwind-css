/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { Genre, Genres } from '../../assests';

function Cards({extraCss=''}) {
  return (
    <div className={`cards w-full px-7 lg:px-14 py-16  flex flex-wrap shrink-0 justify-between ${extraCss}`}>
      <Card extraCss=' w-full lg:w-[50%] h-[55vh] lg:h-[63vh] ' text='@2019-2022' imageUrl='https://images.pexels.com/photos/3583877/pexels-photo-3583877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <Card extraCss='w-full lg:w-[24.75%] h-[55vh] lg:h-[63vh]' text='BUSINESS BOOTCAMP ALUMNI' imageUrl='https://images.pexels.com/photos/18409678/pexels-photo-18409678/free-photo-of-exploring-the-virtual-frontier-girl-immersed-in-the-virtual-reality-using-oculus-quest-vr-headset.jpeg'/>
      <Card extraCss='w-full lg:w-[24.75%] h-[55vh] lg:h-[63vh]' text='Rating-5.0 ON CLUTCH' imageUrl='https://images.pexels.com/photos/6120398/pexels-photo-6120398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    </div>
  )
};

function Card({imageUrl='', text='', extraCss=''}){

    return (
        <div className={`relative rounded-[12px]  bg-zinc-800 mt-4 ${extraCss}`}>
            <img src={imageUrl} className='auto-img' alt="card-img" />
            <Genres extraCss='absolute bottom-[5%] left-[5%]' >
                <Genre genre={text} extraCss='text-[10px] py-2'/>
            </Genres>
            
        </div>
    );
};

export default Cards
