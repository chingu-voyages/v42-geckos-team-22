import React, { useState } from 'react';
import GameControls from '../components/GameComponents/GameControls';
import GameAnswers from '../components/GameComponents/GameAnswers';
import GamePlayWindow from '../components/GameComponents/GamePlayWindow';
import GameLandingWindow from '../components/GameComponents/GameLandingWindow';

function Game () {

    const [ gameState, setGameState ] = useState("landing")

    const handlePlayGame = () => {
        setGameState("play")
        console.log("game mode", gameState)
    }
    
    return(
        <div className='container mx-auto h-full '>
            { gameState == "play"
                ? <>
                    <div className='m-1 border-4 border-black h-4/6 mb-6 mt-12 mx-3 md:border-0' >
                        <div className='md:flex'>
                        <button type='button' className='hidden md:block md:mr-1'>
                            <img className='flex-none' src='src\assets\btn-skip-left.png' />
                        </button>
                        
                        <GamePlayWindow />   
                        <button type='button' className='hidden md:block md:ml-1'>
                        <img className='flex-none' src='src\assets\btn-skip-right.png' />
                        </button>
                        </div>
                        <GameAnswers />
                    </div>
                    <GameControls />
                </>
            : gameState == "landing" ? <GameLandingWindow handlePlayGame={handlePlayGame}/>
            : null
                }
        </div>
    )
}

export default Game