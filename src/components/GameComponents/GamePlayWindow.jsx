import React from 'react';

function GamePlayWindow () {

    return (
        <div className='flex justify-center md:border-4 md:border-black md:flex-grow md:h-96'>
            <div className='m-1 md:flex-1 md:flex md:justify-center'>
                <img className='md:ml-10' src='src\assets\card3.jpg' alt='Three' />
            </div>
            <button type='button' className='hidden max-h-14 max-w-14 md:flex md:mr-1 md:mt-2'>
                <img className='' src='src\assets\btn-more-options.png' />
            </button>
        </div>
    )
}

export default GamePlayWindow