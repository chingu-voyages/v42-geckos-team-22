import React, { useState, useEffect } from "react";
// import Axios from 'axios';
import { MoreOptions } from "./GameUtilities";
import { useSelector, useDispatch } from "react-redux";
import gameData from "../../data";
import { startGame, assignAnswers, assignQuestionImage, assignCorrectAnswer, assignGameState, toggleConfetti} from "../../redux/slices/gameFunctionSlice";
import Confetti from "react-confetti";
import GetApiPics from "../../features/api/api";

//pixelbay API Key 33121417-d326c5dfd781e6d9400ae77ef

// api format https://pixabay.com/api/?key=33121417-d326c5dfd781e6d9400ae77ef&id=159731

function GamePlayWindow(props) {
  let gameName = useSelector((state) => state.gameFunction.gameType);
  let currentGame = null;
  let currentQuestionImage = useSelector(
    (state) => state.gameFunction.currentQuestionImage
  );
  let correctAnswer = useSelector((state) => state.gameFunction.correctAnswer);
  let currentQuestion = useSelector(
    (state) => state.gameFunction.currentQuestion
  );
  let success = useSelector((state) => state.gameFunction.success);

  const dispatch = useDispatch();

  const findCurrentGame = () => {
    for (const property in gameData) {
      if (gameData[property].gameType == gameName) {
        currentGame = gameData[property].games;
      }
      //console.log("in FindCurrentGame", gameData[property].gameType)
    }
  };

  const playCurrentGame = () => {
    //  console.log("inPlayCurrentGame currentQuestion", currentQuestion, currentGame.length)
    if (currentQuestion < currentGame.length) {
      dispatch(assignAnswers(currentGame[currentQuestion].options));
      dispatch(assignQuestionImage(currentGame[currentQuestion].img));
      dispatch(assignCorrectAnswer(currentGame[currentQuestion].correctAnswer));
      console.log("in playCurrentGame correct Answer", currentQuestionImage)
    } else {
      dispatch(assignGameState("end"));
    }
  };

  useEffect(() => {
    gameName = window.location.pathname.slice(6);
    dispatch(startGame(gameName));
    findCurrentGame();
    playCurrentGame();
    

    // console.log("in GamePlayWindow useEffect correct Answer success", correctAnswer, success);
  });

  return (
    <div className={props.cname}>
      <div className="mt-14 md:ml-14 md:mt-0 md:flex md:flex-1 md:justify-center">
        <div style={{ visibility: success }}>{<Confetti />}</div>
        {/* <img
          className=""
          method="post"
          encType="multipart/form-data"
          src={currentQuestionImage}
          alt={correctAnswer}
        /> */}
        <GetApiPics currentQuestionImage={currentQuestionImage}/>
      </div>
      <MoreOptions cname="hidden max-h-14 max-w-14 md:flex md:mr-1 md:mt-2" />
    </div>
  );
}

export default GamePlayWindow;
