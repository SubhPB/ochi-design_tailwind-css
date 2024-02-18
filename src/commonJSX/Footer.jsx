/* -- BYIMAAN -> THE FUTURE -- */

import React from 'react';
import { H1, P } from '../assests';

function Footer({extraCss=''}) {

    const Header = ({extraCss=''}) => {
        return (
            <div className={`w-full flex flex-col lg:flex-row ${extraCss}`}>
                <div className="w-full lg:w-1/2 ">
                    <H1 className='w-full text-[5.5vmax] font-bold leading-[.7]' text='EYE -'/>
                    <H1 className='w-full text-[5.5vmax] font-bold' text='OPENING'/>
                </div>
                <div className="w-full lg:w-1/2">
                    <H1 className='w-full lg:w-1/2 text-[5.5vmax] font-bold leading-[.7]' text='PRESENTATION'/>
                    <AllLists />
                </div>
            </div>
        )
    };

    const LinkList = ({extraCss='', links=['Instagram', 'Behance', 'Facebook', 'LinkedIn'], title='S:'}) => {

        return (
            <div className={`w-1/2 my-4 ${extraCss}`}>
                <P className=' mb-4' text={title}/>
                {
                    links.map( (link, index) => <P key={index} className='w-full ' text={link}/>)
                }
            </div>
        )
    };

    const AllLists = ({extraCss=''}) => {
        return (
            <div className={`w-full flex flex-wrap shrink-0 mt-4 ${extraCss}`}>
                <LinkList />
                <LinkList />
                <LinkList />
            </div>
        );
    };

    return (
        <div className={` w-full min-h-[100vh] px-7 lg:px-14 py-[6.5vmin] bg-zinc-900  ${extraCss}`}>
            <Header />
            
        </div>
    )
};

export default Footer;
