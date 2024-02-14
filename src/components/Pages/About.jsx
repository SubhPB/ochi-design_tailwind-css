/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react'

function About() {

    const descH1 = "Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.";

    const H1 = ({text=descH1, className='N/A'}) => <h1 className={className}>{text}</h1>; 

    return (
        <div className='w-full bg-[#CDEA68] rounded-t-3xl text-black font-thin'>
            <H1 className='text-[6vmin]  font-light leading-[5vmax] tracking-tight whitespace-normal  px-10 lg:px-20 py-20 lg:pr-[20vw]'/>
            <Description extraCss=' pl-[2.5rem] lg:pl-[5rem] pt-[2vmax] pb-[6vmax] '/>
        </div>
    );
};

function Description({extraCss=''}){

    const P = ({className='', text=''}) => text !== '' && <p className={` font-[400] text-[16px] ${className} `}>{text}</p>;

    const LeftDesc = ({text='What you can expect: ',extraCss=''}) => <div className={` ${extraCss} `}> <P text={text}/> </div>;
    
    const RightDesc = ({extraCss=''}) => {

        const RightI = ({extraCss=''}) => {

            const txt1 = 'We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital,delivered for one or a hundred people.';
            const txt2 = 'We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.';
    
            return (
                <div className={` ${extraCss} `}>
                    <P text={txt1} className={'mb-[3.5vmax] '} />
                    <P text={txt2} className={''} />
                </div>
            );
        };
    
        const RightII = ({extraCss='', links=['Instagram.', 'Behance.', 'Facebook.', 'LinkedIn.']}) => {
            return (
                <div className={`flex flex-col  lg:flex-col-reverse lg:items-end ${extraCss}`}>
                    <div>
                    <P text={'S: '}/>  
                        {
                            links.map( (v,i) => <P key={i} text={v}/>)
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

export default About;
