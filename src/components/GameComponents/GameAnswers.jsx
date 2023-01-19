import React from 'react';

function GameAnswers () {

    return (
        <div className='flex flex-col md:flex-row px-12 md:-my-10 md:h-44 md:mx-6'>
            <button type='button' className='btn-answer flex-1'>
                <span className='btn-answer-text'>
                    ONE
                </span>
            </button>
            <button type='button' className='btn-answer flex-1'>
                <span className='btn-answer-text'>
                    TWO
                </span>
            </button>
            <button type='button' className='btn-answer flex-1'>
                <span className='btn-answer-text'>
                    THREE
                </span>
            </button>
        </div>
    )
}

export default GameAnswers