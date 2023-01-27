import React from "react";
import { Link, Outlet } from "react-router-dom";

function Game() {
  return (
    <div className="grid h-screen place-items-center text-xl font-bold">
      <ul className="flex flex-row gap-x-12 pt-4 text-white">
        <li className="bg-turquoise p-2 shadow-answer transition-all duration-300 ease-in-out hover:bg-orange">
          <Link to="/game/color">Color</Link>
        </li>
        <li className="bg-turquoise p-2 shadow-answer transition-all duration-300 ease-in-out hover:bg-orange">
          <Link to="/game/letter">Letter</Link>
        </li>
        <li className="bg-turquoise p-2 shadow-answer transition-all duration-300 ease-in-out hover:bg-orange">
          <Link to="/game/number">Number</Link>
        </li>
        <li className="bg-turquoise p-2 shadow-answer transition-all duration-300 ease-in-out hover:bg-orange">
          <Link to="/game/shape">Shape</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Game;
