/* -- BYIMAAN -> THE FUTURE -- */

export const H1 = ({text='', className='N/A', onClick=function(){}}) => text !== '' && <h1 className={className} onClick={onClick}>{text}</h1>; 

export const P = ({className='', text='', onClick=function(){}}) => text !== '' && <p className={` ${className} `} onClick={onClick}>{text}</p>;

export const Dot = ({className='dot w-3 h-3 rounded-full bg-white', extraCss=''}) => <div className={`${className} ${extraCss}`}></div>;

export const Genre = ({genre=''}) => <P text={genre} className='px-6 py-3 text-sm border-[1px] rounded-[25px] border-white cursor-default '/>

export const Genres = ({extraCss='', className='genres w-full flex flex-row flex-wrap shrink-0 gap-5 mt-4', children}) => {

    return (
        <div className={`${className} ${extraCss}`}>
            {children}
        </div>
    );
};