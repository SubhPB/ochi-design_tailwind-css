/* -- BYIMAAN -> THE FUTURE -- */

import React, {useState} from 'react';
import { H1, P, Dot, Genre, Genres } from '../../assests';
import { easeInOut, motion } from 'framer-motion';

function Projects({extraCss=''}) {

    const projects = [
        {title: 'MARSHALL', imageUrl: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', genres: ['AUDIT', 'COPYWRITING', 'SALES DECK', 'SLIDES DESIGN']},
        {title: 'STARSBUCK', imageUrl: 'https://images.pexels.com/photos/7133637/pexels-photo-7133637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', genres: ['AGENCY', 'COMPANY PRESENTATION']},
        {title: 'NIKE', imageUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', genres: ['BRAND IDENTITY', 'DESIGN RESEARCH', 'INVESTOR DECK']},
        {title: 'LAMBORGHINI', imageUrl: 'https://images.pexels.com/photos/10493497/pexels-photo-10493497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', genres: ['MODEL TEMPLATE']},
    ];

    function ViewAllProjects({text='View All Projects.', extraCss=''}){

        return (
            <div className={`flex gap-6 justify-center items-center mx-[50%] bg-zinc-800  rounded-[10vmin] translate-x-[-50%] w-fit px-6 py-4 my-12 ${extraCss}`}>
                <P text={text} className='text-[20px] text-nowrap ' />
                <Dot />  
            </div>
        );
    };

    return (
        <div className={` project w-full px-7 lg:px-14 py-16  ${extraCss}`}>
            <H1 text='Featured Projects' className='w-full text-[3vmax] lg:text-[4vmax] pb-[2.7vmax] border-white border-b-[1.1px]'/>
            <div className="w-full flex flex-row flex-wrap shrink-0">
                {
                    projects.map( (project, index) => <Project key={index} project={project} atLeft={ index%2 === 0 } ></Project>)
                }
            </div>
            <ViewAllProjects />
        </div>
    )
};

function Project({project, extraCss='', atLeft=false}){

    const {title, imageUrl, genres} = project;

    const Title = ({extraCss=''}) => {
        return (
            <div className={`title ${extraCss} flex flex-row gap-6 justify-center items-center`}>
                <Dot />
                <P text={title} className=' text-lg w-full py-4 '/>
            </div>
        )
    };

    const Image = ({extraCss=''}) => {   

        const [isHovering, setIsHovering] = useState(false);

        const Spanner = ({extraCss=' ', text='Byimaan'}) => {
            const Span = ({extraCss=' '}) => {
                return (
                    <motion.span  initial={{top: '5vmax'}}
                        animate={isHovering ? {top: '0'} : {top: '5vmax'}} 
                        transition={{ease: easeInOut, delay: .06}}
                        className={`relative flex-block text-[x-large] text-[yellow] font-bold capitalize ${extraCss}`}
                        >
                        {title}
                    </motion.span>
                );
            };
            return (
                <div className={`absolute top-[50%] left-[50%] transform: translate-x-[-50%] translate-y-[-50%] bg-transparent z-[100] ${extraCss}`}>
                    <div className="span-holder relative overflow-hidden" >
                      <Span />
                    </div>
                </div>
            );
        };
        
        return (
            <div className={`relative image h-[38vh] lg:h-[80vh] hover:scale-90 transition duration-500 ${extraCss}`}>
                <img onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} src={imageUrl} className='auto-img rounded-[12px] ' alt="project-img" loading='lazy' />
                <Spanner extraCss={ (atLeft) ? ' lg:left-[100%] ' : ' lg:left-[0%] '} />
            </div>
        )
    };

    return (
        <div className={` project pl-2 w-full lg:w-1/2 flex flex-col lg:flex-row flex-wrap mt-4 shrink-0   ${extraCss}'`}>
            <Title extraCss=' w-full '/>
            <Image extraCss=' w-full' />   
            <Genres> 
                {
                    genres.map( (genre, index) => <Genre key={index} genre={genre} />)
                }
            </Genres>
        </div>
    );
}

export default Projects;
