import React from 'react';

function GameAnswers (props) {

    const handleAnswer = () => {
        props.setGameState('end')
    }

    return (
        <div className={props.cname}>
            <button 
                onClick={handleAnswer}
                type='button' 
                className='btn-answer flex-1'
            >
                <span className='btn-answer-text'>
                    ONE
                </span>
            </button>
            <button
                onClick={handleAnswer} 
                type='button' 
                className='btn-answer flex-1'
            >
                <span className='btn-answer-text'>
                    TWO
                </span>
            </button>
            <button 
                onClick={handleAnswer}
                type='button' 
                className='btn-answer flex-1'
            >
                <span className='btn-answer-text'>
                    THREE
                </span>
            </button>
        </div>
    )
}

export default GameAnswers