import React from 'react';

function GameLoadingWindow ({setGameState}, props) {

    setTimeout(() => {
        setGameState("play")
      }, 3000);

    return (
        <div className={props.cname}>
            <p>Loading...</p>
        </div>
    )
}

export default GameLoadingWindow