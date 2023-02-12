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
      
        if(correctAnswer === answerArr[btnid] && failure.length === 0) {
           
            dispatch(toggleConfetti("visible"))
            
            setTimeout(() => {
                dispatch(clearFailures())
                dispatch(calculateScore(score + 1))
                dispatch(toggleConfetti("hidden"))
                dispatch(advanceCurrentQuestion())
                }, 3000);
        } else if (correctAnswer === answerArr[btnid] && failure.length > 0 ) {
            dispatch(clearFailures())
            dispatch(advanceCurrentQuestion())
        } else {
            dispatch(recordFailures(btnid))
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