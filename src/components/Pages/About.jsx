/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { H1, P } from '../../assests';
function About() {

    const descH1 = "Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.";

    return (
        <div data-scroll data-scroll-speed='-0.1'  className='relative w-full bg-[#CDEA68] rounded-t-3xl text-black font-thin z-10'>
            <H1 text={descH1} className='text-[6vmin]  font-light leading-[5vmax] tracking-tight whitespace-normal  px-10 lg:px-20 py-20 lg:pr-[20vw]'/>
            <Description extraCss=' pl-[2.5rem] lg:pl-[5rem] pt-[2vmax] pb-[6vmax] '/>
            <ImageAndApproach extraCss=' p-[2.5rem] lg:pl-[5rem] flex flex-col lg:flex-row' />
        </div>
    );
};

function Description({extraCss=''}){

    const LeftDesc = ({text='What you can expect: ',extraCss=''}) => <div className={` ${extraCss} `}> <P className='font-[400] text-[18px] ' text={text}/> </div>;
    
    const RightDesc = ({extraCss=''}) => {
 
        const RightI = ({extraCss=''}) => {

            const txt1 = 'We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital,delivered for one or a hundred people.';
            const txt2 = 'We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.';
    
            return (
                <div className={` ${extraCss} `}>
                    <P text={txt1} className={'font-[400] text-[17px] mb-[3.5vmax] '} />
                    <P text={txt2} className={'font-[400] text-[17px] '} />
                </div>
            );
        };
    
        const RightII = ({extraCss='', links=['Instagram.', 'Behance.', 'Facebook.', 'LinkedIn.']}) => {
            return (
                <div className={`flex flex-col  lg:flex-col-reverse lg:items-end ${extraCss}`}>
                    <div>
                    <P text={'S: '} className='font-[400] text-[16px] '/>  
                        {
                            links.map( (v,i) => <P className='font-[400] text-[18px] ' key={i} text={v}/>)
                        }         
                    </div>
                </div>
            );
        };
        return (
            <div className={`flex flex-col lg:flex-row lg:justify-between ${extraCss} `}>
                <RightI extraCss='w-full lg:w-[60%]' />
                <RightII extraCss='w-full lg:w-[40%]'/>
            </div>
        );
    };

    return (
        <div className={`desc w-full h-fit flex flex-col lg:flex-row  py-[7vmax] border-y-[.8px] border-grey mt-8 gap-[2vmax] lg:gap-[0vmax] ${extraCss} `}>
            <LeftDesc extraCss='w-[70%] lg:w-[40%]'/>
            <RightDesc extraCss='w-[70%] lg:w-[45%] gap-[2vmax] lg:gap-[0vmax]'/>
        </div>
    )
};

function ImageAndApproach({extraCss=''}){

    const ReadMore = ({title='Our Approach:', url='/', extraCss=''}) => {

        const handleClick = () => { window.location = url };

        return (
            <div className={`w-full lg:w-1/2 ${extraCss}`}>
                <H1 text={title} className='font-semibold text-[7vmin] lg:text-[5vmin]'/>
                <P text='Read More.' className=' pl-5 pr-9 py-3 mt-2 bg-black font-semibold rounded-[20px] w-fit text-white' onClick={handleClick}/>
            </div>
        );
    };
    const TeamImage = ({extraCss=''}) => {
        
        return (
            <div className={`w-full h-[64vmin] mt-6 lg:mt-0 rounded-[10px] lg:w-1/2 bg-[url('https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg')] bg-cover bg-center ${extraCss}`}>
            </div>
        );
    };

    return (
        <div className={`w-full ${extraCss}`}>
            <ReadMore />
            <TeamImage />
        </div>
    );
}

export default About;
