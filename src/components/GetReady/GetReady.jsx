/* -- BYIMAAN -> THE FUTURE -- */

import React, {useRef} from 'react'
import { H1, Dot, P } from '../../assests';
import Eyes from '../../commonJSX/Eyes';

function GetReady() {

    const animationRef = useRef(null);

    const Heading = ({className=''}) => {

        const h1ClassName = 'w-full text-[5.3vmax] lg:text-[10vmax] font-[800] text-center text-zinc-900';

        return (
            <div className={className}>
                <H1 text='READY' className={h1ClassName} />
                <H1 text='TO START' className={h1ClassName + ' leading-[.8] '} />
                <H1 text='THE PROJECT?' className={h1ClassName}/>
            </div>
        )
    };

    function Footer({className=''}){
        return (
            <div className={className}>
                <Button text='START THE PROJECT' extraCss='  bg-zinc-800  '/>
                <H1 text='OR' className='w-full text-sm font-[600] text-center text-zinc-900 my-4'/>
                <Button text='HELLO@OCHI.DESIGN' extraCss=' bg-transparent border-[1px] border-black text-black' dotExtraCss=' bg-zinc-900 ' />
            </div>
        )
    };

    function Button({text='Get Ready!.', extraCss='', dotExtraCss=''}){
        return (
            <div className={`flex gap-10 justify-center items-center mx-[50%] rounded-[10vmin] translate-x-[-50%] w-fit px-6 py-4  ${extraCss}`}>
                <P text={text} className=' text-[13px] text-nowrap ' />
                <Dot extraCss={dotExtraCss}/>  
            </div>
        );
    };



    return (
        <div ref={animationRef} className='get-ready w-full px-7 lg:px-14 py-[18vmin] bg-[#CDEA68] flex flex-col'>
            <Heading className='w-full'/>
            <Eyes extraCss=' h-[45vh] lg:h-[45vh] bg-none ' animationRef={animationRef}/>
            <Footer className=' w-full mt-14'/>
        </div>
    );
}

export default GetReady;
