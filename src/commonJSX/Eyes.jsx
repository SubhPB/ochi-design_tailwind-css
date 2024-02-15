/* -- BYIMAAN -> THE FUTURE -- */

import React, { useEffect, useRef, useState } from 'react';

function Eyes() {

    const [rotate, setRotate] = useState(270);
    const targetDiv = useRef(null);

    const VirtualEye = () => {

        const Eye = ({ extraCss ='', children}) => {
            return (
                <div className={`rounded-full flex justify-center items-center  ${extraCss}`}>
                    {children}
                </div>
            );
        };
        const EyeLine = ({extraCss='', children}) => {
            return (
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className={`line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ${extraCss}`}>
                    {children}
                </div>
            );
        };

        return (
            <Eye extraCss=' bg-white w-[15vmax] h-[15vmax]'>
                <Eye extraCss='bg-black w-2/3 h-2/3 relative'>
                    <EyeLine>
                        <Eye extraCss=' bg-white w-[2.6vmax] h-[2.6vmax] m-x-1'>
                            
                        </Eye>    
                    </EyeLine> 
                    <h3 className=' realtive text-white'>Play</h3>
                </Eye>    
            </Eye> 
        );
    };

    const BackgroundPicture = ({children}) => {
        return (
            <div ref={targetDiv} className="mat relative w-full h-screen bg-cover bg-center overflow-hidden bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
                <div className="absolute flex gap-[2.2vmax] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-red-500 z-10">
                    {children}
                </div>    
            </div>
        );
    };

    useEffect( () => {
        
        const event = targetDiv.current.addEventListener('mousemove', e => {
            const mouseX = e.clientX, mouseY = e.clientY;
            const deltaX = mouseX - window.innerWidth/2, deltaY = mouseY - window.innerHeight/2;
            
            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI) - 180;
            setRotate(angle);
        });

        return () => targetDiv.current.removeEventListener('mousemove',event);
    },[rotate]);

    return (
        
        <BackgroundPicture>
            <VirtualEye /> {/* -- left eye -- */}

            <VirtualEye /> {/* -- right eye -- */}
        </BackgroundPicture>
        
    );
};

export default Eyes;
