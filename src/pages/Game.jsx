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
        <div className='container mx-auto h-full '>
        <GameHeading /> 
            { gameState == "play"
                ? <>
                    <div className='m-1 border-4 border-black h-4/6 mb-6 mt-12 mx-3 md:border-0' >
                        <div className='md:flex'>
                        <SkipLeft cname='hidden md:block md:mr-1' />
                        <GamePlayWindow />   
                        <SkipRight cname='hidden md:block md:ml-1' />
                        </div>
                        <GameAnswers />
                    </div>
                    <GameControls />
                </>
            : gameState == "loading" ? <GameLoadingWindow setGameState={setGameState}/>
            : gameState == "landing" ? <GameLandingWindow handlePlayGame={handlePlayGame}/>
            : null
                }
        </div>
    )
}

export default Game