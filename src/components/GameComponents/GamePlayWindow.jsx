import React from 'react';
import { MoreOptions } from '../GameComponents/utilities';

function GamePlayWindow () {

    return (
        <div className='flex justify-center md:border-4 md:border-black md:flex-grow md:h-96'>
            <div className='m-1 md:flex-1 md:flex md:justify-center'>
                <img className='md:ml-10' src='src\assets\card3.jpg' alt='Three' />
            </div>
            <MoreOptions cname='hidden max-h-14 max-w-14 md:flex md:mr-1 md:mt-2'/>
        </div>
    )
}

export default GamePlayWindow