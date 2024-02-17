/* -- BYIMAAN -> THE FUTURE -- */

import React, {useState} from 'react'
import { H1, P, Genres, Genre } from '../../assests';
import { reviews } from '../../wareHouse';

function Reviews({extraCss=''}) {

    return (
        <div className={`reviews w-full px-7 lg:px-14 py-8 ${extraCss}`}>
            <H1 text='Client Reviews' className='w-full text-[3vmax] lg:text-[4vmax] pb-[2.7vmax] border-white border-b-[1.1px]'/>
            <div className="review-container w-full">
                {
                    reviews.map( (review, index) => <Review key={index} review={review} displayMe={index === 0 ? true: false}/>)
                }
            </div>
        </div>
    );
};



function Review({review, extraCss='', displayMe=false}){

    const [displayBody, setDisplayBody] = useState(displayMe);

    const handleReadClick = () => {
        setDisplayBody(!displayBody);
    };

    const Heading = () => {
       return ( 
            <div onClick={handleReadClick} className="heading w-full flex justify-between py-4 ">
                <P text={review.companyName} className='lg:w-1/4'/>
                <P text={'Services'} className='hidden lg:w-1/4 lg:block'/>
                <P text={review.clientName} className='hidden lg:w-[40%] lg:block lg:pl-4'/>
                <P text='READ' className='lg:w-[10%] text-right'/>
            </div>
        );
    };

    const Body = ({extraCss=''}) => {

        const Dummy = ({className=''}) => <div className={className}></div>
        
        const ClientServices = () => {
            return (
                <div className="services lg:w-1/4">
                    <P text={'Services:'} className='lg:hidden'/> 
                    <Genres>
                        {
                            review.services.map( (service, index) => <Genre key={index} genre={service}/>)
                        }
                    </Genres>
                </div>
            );
        };
        const ClientComment = () => {

            const ClientImg = ({className='client-img'}) => <div className={className}><img className='auto-img' src={review.clientImg} alt="client-img" /></div>

            const Comment = ({className='comment'}) => <div className={className}><P text={review.comment} className='opacity-[.8] text-semibold text-sm'/></div>;

            return (
                <div className="client-comment lg:w-[40%] lg:pl-4 ">
                    <P text={review.clientName} className='my-6 lg:hidden'/> 
                    <ClientImg className='w-[13.7vmax] h-[17vmax] lg:w-[8vmax] lg:h-[11vmax] rounded-[14px] overflow-hidden bg-zinc-800'/>
                    <Comment className='pr-20 lg:pr-0 my-8'/>
                </div>
            );
        };

        return (
            <div className={`body w-full flex flex-col lg:flex-row justify-between py-4 cursor-default  ${extraCss}`}>
                <Dummy className='lg:w-1/4'/>
                <ClientServices />
                <ClientComment />
                <Dummy className='lg:w-[10%]'/>
            </div>
        );
    };

    return(
        <div className={`review w-full transition duration-1000 ease-in-out  border-white border-b-[1.1px] ${extraCss}`}>
            <Heading/>
            <Body extraCss={ displayBody ? '' : ' hidden ' }/>
        </div>
    )
}

export default Reviews;
