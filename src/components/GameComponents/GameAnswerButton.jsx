import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { advanceCurrentQuestion, calculateScore, toggleConfetti, recordFailures, clearFailures } from '../../redux/slices/gameFunctionSlice';

function GameAnswerButton ({btnid}) {

    const answerArr = useSelector(state=>state.gameFunction.answers)
    const correctAnswer = useSelector(state=>state.gameFunction.correctAnswer)
    const failure = useSelector(state=>state.gameFunction.failure)
    const score = useSelector(state=>state.gameFunction.score)

    const dispatch = useDispatch();

    
    const handleAnswer = () => {
        
        let tryNum = 0
        // props.setGameState('end')
        
        
        //console.log("outside IF handleAnswer tryNum", tryNum)
        //console.log("in handleAnswer correctAnswer", typeof(correctAnswer), typeof(id))
        console.log("in handle answer answerArr[btnid], try Num", answerArr[btnid], tryNum)
        if(correctAnswer === answerArr[btnid] && tryNum === 0) {
           
            //console.log("yes! if, id, cA, tryNum", id, correctAnswer, tryNum)
            dispatch(toggleConfetti("visible"))
            
            setTimeout(() => {
                dispatch(clearFailures())
                dispatch(calculateScore(score + 1))
                dispatch(toggleConfetti("hidden"))
                dispatch(advanceCurrentQuestion())
                }, 3000);
        } else if (correctAnswer === answerArr[btnid] && tryNum === 1 ) {
            dispatch(clearFailures())
            dispatch(advanceCurrentQuestion())
           // console.log("yes else if, tryNum", id, correctAnswer, tryNum)
        } else {
            dispatch(recordFailures(btnid))
            tryNum = 1
            console.log("no! id cA, tryNum", answerArr[btnid], correctAnswer, tryNum)
        }

    }


    return (
        <button 
                onClick={handleAnswer}
                type='button' 
                className={`${failure.includes(btnid) ? `btn-answer-fail` : `btn-answer`} flex-1`}
                id={answerArr[btnid]}
            >
                <span className='btn-answer-text'>
                    {answerArr[btnid]}
                </span>
            </button>
    )
}

export default GameAnswerButton