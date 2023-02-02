import React from "react";
import { MoreOptions } from "../GameComponents/utilities";
import DummyCard from "../../assets/gamePage/card3.jpg";

function GamePlayWindow(props) {
  return (
    <div className={props.cname}>
      <div className="mt-14 md:ml-14 md:mt-0 md:flex md:flex-1 md:justify-center">
        <img className="" src={DummyCard} alt="Three" />
      </div>
      <MoreOptions cname="hidden max-h-14 max-w-14 md:flex md:mr-1 md:mt-2" />
    </div>
  );
}

export default GamePlayWindow;
