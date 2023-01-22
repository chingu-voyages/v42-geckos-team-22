import React from 'react';

function GameLandingWindow (props) {

    return (
        <div className={props.cname}>
            
            <button 
                className='btn-answer flex-initial mx-10'
                type='button'
                onClick={props.handlePlayGame}>
                <span className='btn-answer-text'>Play</span>
            </button>
        </div>
    )
}

export default GameLandingWindow