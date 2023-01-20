import React from 'react';

function GameAnswers (props) {

    return (
        <div className={props.cname}>
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