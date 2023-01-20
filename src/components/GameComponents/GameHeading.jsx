import React from 'react';
import Logo from '../../assets/FlashyLogo.png'

function GameHeading (props) {

    return (
        <div className={props.cname}>
            <div className='border-2 border-black grow-1 bg-light-orange'>
                User Profile
            </div>
            <div className='border-2 border-black grow-4 bg-red-orange grid grid-columns-2'>
                <div className='row-span-1'>
                    <p className='text-8xl'>Flashy</p>
                    <p className='text-6xl'>Flash Card</p>
                </div>
                <div>
                    <img src='src\assets\FlashyLogo.png'/>
                </div>
            </div>
        </div>
    )
}

export default GameHeading