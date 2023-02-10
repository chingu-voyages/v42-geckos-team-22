import React, { useState } from "react";
import { SkipLeft, SkipRight } from "../components/GameComponents/GameUtilities";
import { useSelector, useDispatch } from "react-redux";
import GameHeading from "../components/GameComponents/GameHeading";
import GameControls from "../components/GameComponents/GameControls";
import GameAnswers from "../components/GameComponents/GameAnswers";
import GamePlayWindow from "../components/GameComponents/GamePlayWindow";
import GameLandingWindow from '../components/GameComponents/GameLandingWindow';
import GameLoadingWindow from '../components/GameComponents/GameLoadingWindow';
import GameEndWindow from "../components/GameComponents/GameEndWindow";
import { assignGameState } from "../redux/slices/gameFunctionSlice";
function Game() {
  // handlePlayGame(), gameState == "loading", gameState == "landing" are commented out to remove from development. May be added back in later once game is funcitonal.
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameFunction.gameState);


  const handlePlayGame = () => {
      dispatch(assignGameState("loading"))
      console.log("game mode", gameState)
  }
  return (
    <div className="grid h-screen grid-rows-3">
      <GameHeading cname="hidden md:border-2 md:border-black md:row-span-1 md:flex" />
      <div className="row-span-3 md:container md:row-span-2 md:mx-auto">
        {
          gameState == "play" ? (
            <div className="">
              <div className="game-window-play__border">
                <div className="row-span-3 md:flex">
                  <SkipLeft cname="hidden md:block md:mr-1" />
                  <GamePlayWindow cname="game-window-play" />
                  <SkipRight cname="hidden md:block md:ml-1" />
                </div>
                <GameAnswers cname="flex flex-col md:flex-row px-12 md:-my-10 md:h-44 md:mx-6 row-span-1" />
              </div>
              <GameControls cname="flex justify-around items-center m-1 md:hidden row-span-2" />
            </div>
          ) : gameState == "loading" ? (
              <div className='md:game-window__border h-96'>
                  <GameLoadingWindow
                  setGameState={setGameState}
                  cname='grid grid-rows-4 h-full'
                  />
              </div>
          ) : gameState == "landing" ? (
              <div className='md:game-window__border h-96'>
                  <GameLandingWindow
                  handlePlayGame={handlePlayGame}
                  cname='grid grid-rows-4 h-full'
                  />
              </div>
          ) : gameState == "end" ? (
            <div className="md:game-window__border h-96">
              <GameEndWindow cname="grid grid-rows-4 h-full" />
            </div>
          ) : null
        }
      </div>
    </div>
  );
}

export default Game;
