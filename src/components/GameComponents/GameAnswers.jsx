import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { advanceCurrentQuestion, calculateScore, toggleConfetti } from '../../redux/slices/gameFunctionSlice';




function GameAnswers (props) {

    
 

    const answerArr = useSelector(state=>state.gameFunction.answers)
    const correctAnswer = useSelector(state=>state.gameFunction.correctAnswer)
    const failure = useSelector(state=>state.gameFunction.failure)
    let score = useSelector(state=>state.gameFunction.score)

    const dispatch = useDispatch();
    
    //console.log("In Game Answers", answerArr)
    let tryNum = 0

    const handleAnswer = (e) => {
        // props.setGameState('end')
        const id = e.target.id
        

        console.log("outside IF handleAnswer tryNum", tryNum)

      //  console.log("in handleAnswer correctAnswer", typeof(correctAnswer), typeof(id))
        if(correctAnswer === id && tryNum === 0) {
            score++
            console.log("yes! if, id, cA, tryNum", id, correctAnswer, tryNum)
            dispatch(toggleConfetti("visible"))
            setTimeout(() => {
                dispatch(advanceCurrentQuestion())
                dispatch(calculateScore(score))
                dispatch(toggleConfetti("hidden"))
                }, 3000);
        } else if (correctAnswer === id && tryNum === 1 ) {
            dispatch(advanceCurrentQuestion())
            console.log("yes else if, tryNum", id, correctAnswer, tryNum)
        } else {
            tryNum = 1
            console.log("no! id cA, tryNum", id, correctAnswer, tryNum)
        }
       
    }

    return (
        <div className={props.cname}>
            <button 
                onClick={handleAnswer}
                type='button' 
                className={`${failure ? `btn-answer` : `btn-answer-fail`} flex-1`}
                id={answerArr[0]}
            >
                <span className='btn-answer-text'>
                    {answerArr[0]}
                </span>
            </button>
            <button
                onClick={handleAnswer} 
                type='button' 
                className={`${failure ? `btn-answer` : `btn-answer-fail`} flex-1`}
                id={answerArr[1]}
            >
                <span className='btn-answer-text'>
                    {answerArr[1]}
                </span>
            </button>
            <button 
                onClick={handleAnswer}
                type='button' 
                className={`${failure ? `btn-answer` : `btn-answer-fail`} flex-1`}
                id={answerArr[2]} 
            >
                <span className='btn-answer-text'>
                    {answerArr[2]}  
                </span>
            </button>
        </div>
    )
}

export default GameAnswers