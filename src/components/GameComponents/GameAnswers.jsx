import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import GameAnswerButton from './GameAnswerButton';


function GameAnswers (props) {

    const failure = useSelector(state=>state.gameFunction.failure)
    
  
    // useEffect(() => {
    //     console.log("in GameAnsewr useEffect", failure, props)
        
    //     if (failure.includes(0 || 1 || 2)) {

    //     }
    // })

    return (
        <div className={props.cname}>
            <GameAnswerButton btnid={0} />
            <GameAnswerButton btnid={1} />
            <GameAnswerButton btnid={2} />
        </div>
    )
}

export default GameAnswers;
