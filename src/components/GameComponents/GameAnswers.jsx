import React from 'react';
import { useSelector } from 'react-redux'

function GameAnswers (props) {

    const handleAnswer = () => {
        props.setGameState('end')
    }

    const answerArr = useSelector(state=>state.gameFunction.answers)

    console.log("In Game Answers", answerArr)

    return (
        <div className={props.cname}>
            <button 
                onClick={handleAnswer}
                type='button' 
                className='btn-answer flex-1'
            >
                <span className='btn-answer-text'>
                    {answerArr[0]}
                </span>
            </button>
            <button
                onClick={handleAnswer} 
                type='button' 
                className='btn-answer flex-1'
            >
                <span className='btn-answer-text'>
                    {answerArr[1]}
                </span>
            </button>
            <button 
                onClick={handleAnswer}
                type='button' 
                className='btn-answer flex-1'
            >
                <span className='btn-answer-text'>
                    {answerArr[2]}  
                </span>
            </button>
        </div>
    )
}

export default GameAnswers