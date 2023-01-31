import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
import { MoreOptions } from '../GameComponents/utilities';
import {useSelector, useDispatch} from 'react-redux'
import DummyCard from '../../assets/card3.jpg'
import Circle from '../../assets/Shapes/Circle.png'
import Oval from '../../assets/Shapes/Oval.png'
import Square from '../../assets/Shapes/Square.png'
import Triangle from '../../assets/Shapes/Triangle.png'
import gameData from '../../data'
import { startGame, assignAnswers } from '../../redux/slices/gameFunctionSlice'



//pixelbay API Key 33121417-d326c5dfd781e6d9400ae77ef

// api format https://pixabay.com/api/?key=33121417-d326c5dfd781e6d9400ae77ef&id=159731

function GamePlayWindow (props) {

let gameName = useSelector(state=>state.gameFunction.gameType)
let answers = useSelector(state=>state.gameFunction.answers)
let currentGame = null;

const dispatch = useDispatch()

console.log("in Game Play Window answres", answers)
console.log("in GPW gameData", gameName, gameData.length, Object.values(gameData[1]).includes(gameName))

const findCurrentGame = () => {
    for(const property in gameData) {
        console.log("in FindGameType", `${property}: ${gameData[property].gameType}`)
        if (gameData[property].gameType == gameName) {
            console.log(gameName)
            currentGame = gameData[property].games
            console.log("in findGameType if", currentGame[0].options)
            return currentGame
        }
    }
};

const playCurrentGame = () => {
    for (const property in currentGame) {
        console.log("in playCurrentGame",`${property}: ${currentGame[property].options}`)
        dispatch((assignAnswers(currentGame[property].options)))
    }
}
    


useEffect(()=> {
    gameName = window.location.pathname.slice(6)
    dispatch(startGame(gameName))
    findCurrentGame();
    console.log("in useEffect CurrentGame", currentGame)
    playCurrentGame();
}, []);  


const [ image, setImage ] = useState(Square);


    // Axios
    //     .get('https://pixabay.com/api/?key=33121417-d326c5dfd781e6d9400ae77ef&id=159731',, {headers: {"Access-Control-Allow-Origin": "*"}, })
    //     .then(
    //     (response) => {
    //         console.log(response.data.hits[0].pageURL);
    //         setImage(response.data.hits[0].pageURL)
    //     }
    // );
    

//, {headers: {"Access-Control-Allow-Origin": "*"}, }

    return (
        <div className={props.cname}>
            <div className='md:ml-14 md:flex-1 md:flex md:justify-center mt-14 md:mt-0'>
                <p>{gameName}</p>
                <img className='' method='post' encType='multipart/form-data' src={image} alt='' />
            </div>
            <MoreOptions cname='hidden max-h-14 max-w-14 md:flex md:mr-1 md:mt-2'/>
        </div>
    )
}

export default GamePlayWindow