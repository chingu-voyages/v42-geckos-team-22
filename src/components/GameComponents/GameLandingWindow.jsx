import React from 'react';

function GameLandingWindow ({handlePlayGame}, props) {

    return (
        <div className={props.cname}>
            
            <button onClick={handlePlayGame}>
                <span>Play</span>
            </button>
        </div>
    )
}

export default GameLandingWindow