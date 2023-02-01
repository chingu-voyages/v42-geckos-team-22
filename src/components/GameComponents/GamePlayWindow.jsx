import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
import { MoreOptions } from './GameUtilities';
import {useSelector, useDispatch} from 'react-redux'
// import Circle from '../../assets/Shapes/Circle.png'
// import Oval from '../../assets/Shapes/Oval.png'
// import Square from '../../assets/Shapes/Square.png'
// import Triangle from '../../assets/Shapes/Triangle.png'
import gameData from '../../data'
import { startGame, assignAnswers, assignQuestionImage, assignCorrectAnswer } from '../../redux/slices/gameFunctionSlice'

//pixelbay API Key 33121417-d326c5dfd781e6d9400ae77ef

// api format https://pixabay.com/api/?key=33121417-d326c5dfd781e6d9400ae77ef&id=159731

function GamePlayWindow (props) {

let gameName = useSelector(state=>state.gameFunction.gameType)
let answers = useSelector(state=>state.gameFunction.answers)
let currentGame = null;
let currentAnswer = useSelector(state=>state.gameFunction.currentQuestionImage)

const [ image, setImage ] = useState(currentAnswer);

const dispatch = useDispatch()

// console.log("in Game Play Window answres", answers)
// console.log("in GPW gameData", gameName, gameData.length, Object.values(gameData[1]).includes(gameName))

const findCurrentGame = () => {
    for(const property in gameData) {
       // console.log("in FindGameType", `${property}: ${gameData[property].gameType}`)
        if (gameData[property].gameType == gameName) {
            currentGame = gameData[property].games
        }
        
        console.log("in FindCurrentGame", currentGame)
       
    }
};

const playCurrentGame = () => {
    let i = 0;
    dispatch((assignAnswers(currentGame[i].options)))
    dispatch((assignQuestionImage(currentGame[i].img)))
    
    console.log("in playCurrentGame correct Answer", currentGame[i].name)
    // for ( i in currentGame) {
    //     //console.log("in playCurrentGame name",`${property}: ${currentGame[property].name}`)

    //     console.log("In playCurrentGame options", currentGame[i].options)
    //     console.log("In playCurrentGame img ", currentGame[i].img)
    
    //     dispatch((assignAnswers(currentGame[i].options)))
    //     currentAnswer = currentGame[i].img
    //     dispatch((assignQuestionImage(currentAnswer)))
    //     // console.log("in showCurrentQuestion", currentAnswer)S
    //     setImage(currentAnswer)
       
    // }
}

    
useEffect(()=> {
    gameName = window.location.pathname.slice(6)
    dispatch(startGame(gameName))
    findCurrentGame();
    //console.log("in useEffect CurrentGame", currentGame)
    playCurrentGame();
}, []);  

    return (
        <div className={props.cname}>
            <div className='md:ml-14 md:flex-1 md:flex md:justify-center mt-14 md:mt-0'>
                <p>{gameName}</p>
                <img className='' method='post' encType='multipart/form-data' src={currentAnswer} alt="" />
            </div>
            <MoreOptions cname='hidden max-h-14 max-w-14 md:flex md:mr-1 md:mt-2'/>
        </div>
    )
}

export default GamePlayWindow