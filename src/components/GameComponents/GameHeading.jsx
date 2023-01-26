import React from 'react';
import Logo from '../../assets/FlashyLogo.png'

function GameHeading (props) {

    const PERSONNAME = "PERSON NAME"
    
    return (
        <div className={props.cname}>
            <div className='border-2 border-black  md:w-2/5 lg:w-1/5 aspect-square bg-light-orange flex flex-col justify-around'>
                <div className='flex flex-col justify-center items-center'>
                    <img src='src\assets\profile-border.png' className='h-max'/>
                    <img src='src\assets\profile-dots.png' className='absolute z-10'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='font-semibold text-2xl text-center'>{PERSONNAME}</p>
                </div>
            </div>
            <div className='z-20 border-2 border-black flex-auto md:w-4/5 bg-red-orange flex justify-around header-stripes'>
                <div className='font-bold text-white self-center md:ml-6 lg:m-0'>
                    <p className='text-6xl lg:text-8xl lg:text-9x1'>FLASHY</p>
                    <p className='text-3xl lg:text-4xl'>FLASH CARD</p>
                </div>
                <div className='self-center flex justify-end md:h-3/5 md:mr-6 lg:h-4/5 lg:m-0'>
                    <img 
                        className=''
                        src='src\assets\FlashyLogo.png'/>
                </div>
            </div>
        </div>
    )
}

export default GameHeading