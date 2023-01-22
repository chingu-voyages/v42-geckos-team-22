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
            <div className='container mx-auto md:row-span-4 row-span-4'>
                { gameState == "play"
                    ? <div className=''>
                        <div className='m-1 border-4 border-black h-4/6 mb-6 mt-12 mx-3 md:border-0 grid grid-rows-4' >
                            <div className='md:flex row-span-3'>
                            <SkipLeft cname='hidden md:block md:mr-1' />
                            <GamePlayWindow />   
                            <SkipRight cname='hidden md:block md:ml-1' />
                            </div>
                            <GameAnswers cname='flex flex-col md:flex-row px-12 md:-my-10 md:h-44 md:mx-6 row-span-1'/>
                        </div>
                        <GameControls cname='flex justify-around items-center m-1 md:hidden row-span-2'/>
                    </div>
                : gameState == "loading" 
                    ? <GameLoadingWindow 
                        setGameState={setGameState} 
                        cname='flex justify-center md:border-4 md:border-black md:flex-grow md:h-96'
                        />
                : gameState == "landing" 
                    ? <GameLandingWindow 
                        handlePlayGame={handlePlayGame}
                        cname='row-span-6 flex justify-center md:border-4 md:border-black md:flex-grow md:h-96'
                        />
                : null
                    }
            </div>
        </div>
    )
}

export default Game