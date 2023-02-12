import React from 'react';
import GameAnswerButton from './GameAnswerButton';

function GameAnswers (props) {

    return (
        <div className={props.cname}>
            <GameAnswerButton btnid={0} />
            <GameAnswerButton btnid={1} />
            <GameAnswerButton btnid={2} />
        </div>
    )
}

export default GameAnswers;
