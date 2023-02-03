import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
import { MoreOptions } from './GameUtilities';
import {useSelector, useDispatch} from 'react-redux'
import gameData from '../../data'
import { startGame, assignAnswers, assignQuestionImage, assignCorrectAnswer, assignGameState } from '../../redux/slices/gameFunctionSlice'

//pixelbay API Key 33121417-d326c5dfd781e6d9400ae77ef

// api format https://pixabay.com/api/?key=33121417-d326c5dfd781e6d9400ae77ef&id=159731

function GamePlayWindow (props) {

    let gameName = useSelector(state=>state.gameFunction.gameType)
    let currentGame = null;
    let currentQuestionImage = useSelector(state=>state.gameFunction.currentQuestionImage)
    let correctAnswer = useSelector(state=>state.gameFunction.correctAnswer)
    let currentQuestion = useSelector(state=>state.gameFunction.currentQuestion)

    const dispatch = useDispatch()

    const findCurrentGame = () => {
        for(const property in gameData) {
            if (gameData[property].gameType == gameName) {
                currentGame = gameData[property].games
            }
            
           // console.log("in FindCurrentGame", currentGame)
        
        }
    };

    const playCurrentGame = () => {
      //  console.log("inPlayCurrentGame currentQuestion", currentQuestion, currentGame.length)
        if (currentQuestion < currentGame.length){
            dispatch((assignAnswers(currentGame[currentQuestion].options)))
            dispatch((assignQuestionImage(currentGame[currentQuestion].img)))
            dispatch((assignCorrectAnswer(currentGame[currentQuestion].name)))
           // console.log("in playCurrentGame correct Answer", currentGame[currentQuestion].name)
        } else {
            dispatch(assignGameState('end'))
        }
    }

    useEffect(()=> {
        gameName = window.location.pathname.slice(6)
        dispatch(startGame(gameName))
        findCurrentGame();
        playCurrentGame();
        console.log("in GamePlayWindow useEffect correct Answer", correctAnswer)
    });  

    return (
        <div className={props.cname}>
            <div className='md:ml-14 md:flex-1 md:flex md:justify-center mt-14 md:mt-0'>
                <p>{gameName}</p>
                <img className='' method='post' encType='multipart/form-data' src={currentQuestionImage} alt={correctAnswer} />
            </div>
            <MoreOptions cname='hidden max-h-14 max-w-14 md:flex md:mr-1 md:mt-2'/>
        </div>
    )
}

export default GamePlayWindow