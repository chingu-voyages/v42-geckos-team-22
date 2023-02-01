import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'

function GameAnswers (props) {

    const answerArr = useSelector(state=>state.gameFunction.answers)
    const correctAnswer = useSelector(state=>state.gameFunction.correctAnswer)
    //console.log("In Game Answers", answerArr)
    
    const handleAnswer = (e) => {
        // props.setGameState('end')
        const id = e.target.id

        console.log("in handleAnswer correctAnswer", correctAnswer)
        // if(correctAnswer == id) {
        //     console.log("yes!", id, correctAnswer)
            
        // } else {
        //     console.log("no!", id, correctAnswer)
        // }
       
    }

    useEffect(()=> {
        
    }, [correctAnswer]);  
    
   

    return (
        <div className={props.cname}>
            <button 
                onClick={handleAnswer}
                type='button' 
                className='btn-answer flex-1'
                id={answerArr[0]}
            >
                <span className='btn-answer-text'>
                    {answerArr[0]}
                </span>
            </button>
            <button
                onClick={handleAnswer} 
                type='button' 
                className='btn-answer flex-1'
                id={answerArr[1]}
            >
                <span className='btn-answer-text'>
                    {answerArr[1]}
                </span>
            </button>
            <button 
                onClick={handleAnswer}
                type='button' 
                className='btn-answer flex-1'
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