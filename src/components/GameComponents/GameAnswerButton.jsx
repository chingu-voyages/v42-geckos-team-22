import React, { useState }from "react";
import { useSelector, useDispatch } from 'react-redux';
import { advanceCurrentQuestion, calculateScore, toggleConfetti, recordFailures, clearFailures } from '../../redux/slices/gameFunctionSlice';

function GameAnswerButton ({btnid}) {

    const answerArr = useSelector(state=>state.gameFunction.answers)
    const correctAnswer = useSelector(state=>state.gameFunction.correctAnswer)
    const failure = useSelector(state=>state.gameFunction.failure)
    const score = useSelector(state=>state.gameFunction.score)
    const [ disabled, setDisabled ] = useState(false)

    const dispatch = useDispatch();

    const handleAnswer = () => {
      
        // props.setGameState('end')
        
        
        //console.log("outside IF handleAnswer tryNum", tryNum)
        //console.log("in handleAnswer correctAnswer", typeof(correctAnswer), typeof(id))
       // console.log("in handle answer answerArr[btnid], try Num", answerArr[btnid], tryNum)
        if(correctAnswer === answerArr[btnid] && failure.length === 0) {
           
            console.log("yes! if, id, cA, failure.length", answerArr[btnid], correctAnswer, failure.length)
            setDisabled(true)
            dispatch(toggleConfetti("visible"))
            console.log("in handleAnswer disabled", disabled)
            
            setTimeout(() => {
                dispatch(clearFailures())
                dispatch(calculateScore(score + 1))
                dispatch(toggleConfetti("hidden"))
                dispatch(advanceCurrentQuestion())
                setDisabled(false)
                }, 3000);
        } else if (correctAnswer === answerArr[btnid] && failure.length > 0 ) {
            dispatch(clearFailures())
            dispatch(advanceCurrentQuestion())
        //    console.log("yes else if, failure.length", answerArr[btnid], correctAnswer, failure.length)
        } else {
            dispatch(recordFailures(btnid))
          
            console.log("no! id cA, failure.length", answerArr[btnid], correctAnswer, failure.length)
        }

    }


    return (
        <button 
                onClick={handleAnswer}
                type='button' 
                className={`${failure.includes(btnid) ? `btn-answer-fail` : `btn-answer`} flex-1`}
                id={answerArr[btnid]}
                disabled={disabled}
            >
                <span className='btn-answer-text'>
                    {answerArr[btnid]}
                </span>
            </button>
    )
}

export default GameAnswerButton