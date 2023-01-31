import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function GameEndWindow (props) {

    const score = "10"

    const navigate = useNavigate();

    const handleEnd = () => {
        navigate('/')
        console.log('handleEnd')
    }

    const handlePlayAgain = () => {
        props.setGameState("play")
        console.log('handleEnd')
    }

    return (
        <div className={props.cname}>
            <div className='row-start-1 row-end-2 w-full bg-red-orange' />
            <div className='row-start-2 row-end-3 self-center justify-self-center'>
                <p className='btn-answer-text '>
                    Your Score is: {score}!
                </p>    
            </div> 
            <div className='row-start-3 row-end-5 justify-self-center flex flex-col md:block'>
                <button 
                    className='btn-end'
                    type='button'
                    onClick={handlePlayAgain}
                >
                    <span className='btn-answer-text'>Play Again</span>
                </button>
                <button 
                    className='btn-end'
                    type='button'
                    onClick={handleEnd}
                >
                    <span className='btn-answer-text'>End Game</span>
                </button> 
            </div> 
                
           
            
            
        </div>
    )
}

export default GameEndWindow