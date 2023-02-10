import React from 'react';
import { useSelector } from "react-redux";


function GameLandingWindow (props) {

    let gameName = useSelector((state) => state.gameFunction.gameType);

    return (
        <div className={props.cname}>
            <div className='row-start-1 row-end-2 w-full bg-red-orange' />
            <div className='row-start-2 row-end-5 justify-self-center self-center text-center mx-10'>   
                <button 
                    className='btn-answer mx-10 w-72 h-24'
                    type='button'
                    onClick={props.handlePlayGame}>
                    <span className='btn-answer-text'>Play {gameName.toUpperCase()}</span>
                </button>
            </div>
            
            
        </div>
    )
}

export default GameLandingWindow