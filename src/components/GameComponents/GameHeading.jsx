import React from 'react';
import Logo from '../../assets/FlashyLogo.png'

function GameHeading (props) {

    return (
        <div className={props.cname}>
            <div className='border-2 border-black flex-grow-1 aspect-square bg-light-orange'>
                User Profile
            </div>
            <div className='border-2 border-black flex-grow-3 bg-red-orange flex justify-around header-stripes'>
                <div className='font-bold text-white self-center'>
                    <p className='text-8xl lg:text-9x1'>FLASHY</p>
                    <p className='text-4xl'>FLASH CARD</p>
                </div>
                <div className='self-center flex justify-end h-4/5'>
                    <img 
                        className=''
                        src='src\assets\FlashyLogo.png'/>
                </div>
            </div>
        </div>
    )
}

export default GameHeading