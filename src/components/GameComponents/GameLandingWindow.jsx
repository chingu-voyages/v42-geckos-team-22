import React from 'react';

function GameLandingWindow (props) {

    return (
        <div className={props.cname}>
            <div className='grow-2 w-full bg-red-orange' />
            <div className='grow-4 flex flex-col justify-center text-center mx-10'>   
                <button 
                    className='btn-answer mx-10'
                    type='button'
                    onClick={props.handlePlayGame}>
                    <span className='btn-answer-text'>Play</span>
                </button>
            </div>
            
            
        </div>
    )
}

export default GameLandingWindow