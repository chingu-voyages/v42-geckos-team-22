import React from 'react';

function GameLandingWindow ({handlePlayGame}) {

    return (
        <div className='flex justify-center md:border-4 md:border-black md:flex-grow md:h-96'>
            <button onClick={handlePlayGame}>
                <span>Play</span>
            </button>
        </div>
    )
}

export default GameLandingWindow