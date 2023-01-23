import React, { useState } from 'react';
import { SkipLeft, SkipRight } from '../components/GameComponents/utilities';
import GameHeading from '../components/GameComponents/GameHeading';
import GameControls from '../components/GameComponents/GameControls';
import GameAnswers from '../components/GameComponents/GameAnswers';
import GamePlayWindow from '../components/GameComponents/GamePlayWindow';
import GameLandingWindow from '../components/GameComponents/GameLandingWindow';
import GameLoadingWindow from '../components/GameComponents/GameLoadingWindow';
function Game () {

    const [ gameState, setGameState ] = useState("landing")

    const handlePlayGame = () => {
        setGameState("loading")
        console.log("game mode", gameState)
    }
    
    return(
        <div className='grid grid-rows-3'>
            <GameHeading cname='hidden md:block md:border-2 md:border-black md:row-span-1 md:flex  max-h-72'/> 
            <div className='container mx-auto md:row-span-4' >
                { gameState == "play"
                    ? <div className=''>
                        <div className='game-window__border' >
                            <div className='md:flex row-span-3'>
                            <SkipLeft cname='hidden md:block md:mr-1' />
                            <GamePlayWindow cname='game-window'/>   
                            <SkipRight cname='hidden md:block md:ml-1' />
                            </div>
                            <GameAnswers cname='flex flex-col md:flex-row px-12 md:-my-10 md:h-44 md:mx-6 row-span-1'/>
                        </div>
                        <GameControls cname='flex justify-around items-center m-1 md:hidden row-span-2'/>
                    </div>
                : gameState == "loading" 
                    ? <div className='game-window__border my-10'>
                        <GameLoadingWindow 
                        setGameState={setGameState} 
                        cname='game-window flex flex-col'
                        />
                    </div>
                : gameState == "landing"
                    ? <div className='game-window__border my-10'>
                        <GameLandingWindow 
                        handlePlayGame={handlePlayGame}
                        cname='game-window flex flex-col'
                        />
                    </div>
                : null
                    }
            </div>
        </div>
    )
}

export default Game