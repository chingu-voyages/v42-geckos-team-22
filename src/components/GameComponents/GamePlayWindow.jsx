import React, { useEffect } from "react";
import { MoreOptions } from "./GameUtilities";
import { useSelector, useDispatch } from "react-redux";
import gameData from "../../data";
import { startGame, assignAnswers, assignQuestionImage, assignCorrectAnswer, assignGameState } from "../../redux/slices/gameFunctionSlice";
import Confetti from "react-confetti";
import GetApiPics from "../../features/api/api";

function GamePlayWindow(props) {
  let gameName = useSelector((state) => state.gameFunction.gameType);
  let currentGame = null;
  let currentQuestionImage = useSelector( (state) => state.gameFunction.currentQuestionImage);
  let currentQuestion = useSelector((state) => state.gameFunction.currentQuestion);
  let success = useSelector((state) => state.gameFunction.success);

  const dispatch = useDispatch();

  const findCurrentGame = () => {
    for (const property in gameData) {
      if (gameData[property].gameType == gameName) {
        currentGame = gameData[property].games;
      }

    }
  };

  const playCurrentGame = () => {
    if (currentQuestion < currentGame.length) {
      dispatch(assignAnswers(currentGame[currentQuestion].options));
      dispatch(assignQuestionImage(currentGame[currentQuestion].img));
      dispatch(assignCorrectAnswer(currentGame[currentQuestion].correctAnswer));
    } else {
      dispatch(assignGameState("end"));
    }
  };

  useEffect(() => {
    gameName = window.location.pathname.slice(6);
    dispatch(startGame(gameName));
    findCurrentGame();
    playCurrentGame();
  });

  return (
    <div className={props.cname}>
      <div style={{ visibility: success }}>{<Confetti />}</div>
      <div className="mt-14 md:ml-14 md:mt-0 md:flex md:flex-1 md:justify-center">
        <GetApiPics currentQuestionImage={currentQuestionImage} />
      </div>
      <MoreOptions cname="hidden max-h-14 max-w-14 md:flex md:mr-1 md:mt-2" />
    </div>
  );
}

export default GamePlayWindow;
