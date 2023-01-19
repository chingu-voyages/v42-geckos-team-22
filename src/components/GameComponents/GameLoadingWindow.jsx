import React from 'react';

function GameLoadingWindow ({setGameState}) {

    setTimeout(() => {
        setGameState("play")
      }, 3000);

    return (
        <div className='flex justify-center md:border-4 md:border-black md:flex-grow md:h-96'>
            <p>Loading...</p>
        </div>
    )
}

export default GameLoadingWindow