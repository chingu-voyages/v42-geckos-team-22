import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  assignGameState,
  resetCurrentQuestion,
  calculateScore,
} from "../../redux/slices/gameFunctionSlice";

function GameEndWindow(props) {
  let gameState = useSelector((state) => state.gameFunction.gameState);
  let currentQuestion = useSelector(
    (state) => state.gameFunction.currentQuestion
  );
  const score = useSelector((state) => state.gameFunction.score);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEnd = () => {
    gameState = "landing";
    currentQuestion = 0;
    dispatch(assignGameState(gameState));
    dispatch(resetCurrentQuestion(currentQuestion));
    dispatch(calculateScore(0));
    navigate("/");
  };

  const handlePlayAgain = () => {
    currentQuestion = 0;
    gameState = "play";
    dispatch(resetCurrentQuestion(currentQuestion));
    dispatch(assignGameState(gameState));
    dispatch(calculateScore(0));
  };

  return (
    <div className={props.cname}>
      <div className="row-start-1 row-end-2 w-full bg-red-orange" />
      <div className="row-start-2 row-end-3 self-center justify-self-center">
        <p className="btn-answer-text ">Your Score is: {score}!</p>
      </div>
      <div className="row-start-3 row-end-5 flex flex-col justify-self-center md:block">
        <button className="btn-end" type="button" onClick={handlePlayAgain}>
          Play Again
        </button>
        <button className="btn-end" type="button" onClick={handleEnd}>
          End Game
        </button>
      </div>
    </div>
  );
}

export default GameEndWindow;
