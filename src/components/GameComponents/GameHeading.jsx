import React from "react";
import Logo from "../../assets/gamePage/FlashyLogo.png";
import ProfileBorder from "../../assets/gamePage/profile-border.png";
import ProfileDots from "../../assets/gamePage/profile-dots.png";

function GameHeading(props) {
  const PERSONNAME = "PERSON NAME";

  return (
    <div className={props.cname}>
      <div className="flex aspect-square flex-col justify-around border-2 border-black bg-light-orange md:w-2/5 lg:w-1/5">
        <div className="flex flex-col items-center justify-center">
          <img src={ProfileBorder} className="h-max" />
          <img src={ProfileDots} className="absolute z-10 translate-x-10" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center text-2xl font-semibold">{PERSONNAME}</p>
        </div>
      </div>
      <div className="header-stripes z-20 flex flex-auto justify-around border-2 border-black bg-red-orange md:w-4/5">
        <div className="self-center font-bold text-white md:ml-6 lg:m-0">
          <p className="lg:text-9x1 text-6xl lg:text-8xl">FLASHY</p>
          <p className="text-3xl lg:text-4xl">FLASH CARD</p>
        </div>
        <div className="flex justify-end self-center md:mr-6 md:h-3/5 lg:m-0 lg:h-4/5">
          <img className="" src={Logo} />
        </div>
      </div>
    </div>
  );
}

export default GameHeading;
