import React from "react";
import { Link } from "react-router-dom";
import { GiPanda } from "react-icons/gi";
import { TbLetterCase, TbNumbers } from "react-icons/tb";
import { FaShapes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/slices/headerSlice";
import { assignGameState, resetCurrentQuestion, calculateScore } from "../../redux/slices/gameFunctionSlice";


export const DropDown = () => {
  const dispatch = useDispatch();

  let gameState = useSelector((state) => state.gameFunction.gameState);
  let currentQuestion = useSelector(
    (state) => state.gameFunction.currentQuestion
  );
  
  const handleToggleGame = () => {
    dispatch(toggleMenu())
    gameState = "landing";
    currentQuestion = 0;
    dispatch(assignGameState(gameState));
    dispatch(resetCurrentQuestion(currentQuestion));
    dispatch(calculateScore(0));
  }

  return (
    <ul className="z-40 flex w-screen animate-dropDown flex-col bg-[#1B5D68] p-1 text-2xl uppercase text-off-white md:absolute md:w-auto md:p-4">
      <li
        onClick={handleToggleGame}
        className="shadow-top w-full py-4 hover:bg-[#217382] md:shadow-none"
      >
        <Link to="/game/number" className="dropDown">
          <TbNumbers className="dropDownIcons" />
          <p>number</p>
        </Link>
      </li>
      <li
        onClick={handleToggleGame}
        className="w-full py-4 hover:bg-[#217382]"
      >
        <Link to="/game/shape" className="dropDown">
          <FaShapes className="dropDownIcons" />
          <p>shape</p>
        </Link>
      </li>
      <li
        onClick={handleToggleGame}
        className="w-full py-4 hover:bg-[#217382]"
      >
        <Link to="/game/animal" className="dropDown">
          <GiPanda className="dropDownIcons" />
          <p>animal</p>
        </Link>
      </li>
      <li
        onClick={handleToggleGame}
        className="shadow-bottom w-full py-4 hover:bg-[#217382] md:shadow-none"
      >
        <Link to="/game/letter" className="dropDown">
          <TbLetterCase className="dropDownIcons" />
          <p>lettercase</p>
        </Link>
      </li>
    </ul>
  );
};
