import { NavLink } from "react-router-dom";
import React from "react";

function Home() {
  return (
    // Container for entire page
    <div>
      {/* Container for entire banner*/}
      <div className="flex flex-row flex-wrap md:w-screen">
        {/* Container for top left of banner */}
        <div className="relative h-56 w-screen md:h-96 md:w-5/12 bg-off-white border-black md:border-2 md:border-t-0 md:border-l-0">
          {/* Fading dots background image, flips horizontally in mobile screens */}
          <img className="absolute w-20 transform -scale-x-100 md:scale-x-100 md:max-h-14 right-4 z-10 md:left-2 top-4" src="/src/assets/homedots.svg"></img>

          {/* Slogan text that only appears in md-size screens*/}
          <p className="hidden md:block absolute z-10 right-0 top-14 uppercase font-black text-8xl leading-tight whitespace-nowrap">The only<br />you need</p>
          
          {/* Banner content for mobile screens */}
          <div className="md:hidden absolute h-36 w-11/12 bg-orange right-0 top-14 flex items-center">
            <p className="md:hidden absolute left-12 my-auto uppercase text-white font-black text-2xl tracking-wider">The only<br />flash card<br />you need</p>
          </div>
        </div>

        {/* Container for top right sections of banner*/}
        {/* Content only appears in md-size screens*/}
        <div className="hidden md:flex flex-col md:w-7/12">
          {/* Orange section */}
          <div className="relative md:h-72 bg-orange border-black md:border-2 md:border-t-0 md:border-r-0">
            {/* Remaining section of slogan, positioned in orange section*/}
            <p className="absolute z-10 left-0 top-14 uppercase font-black text-8xl leading-tight  whitespace-nowrap">flash card</p>
            <img className="absolute max-h-10 left-2 bottom-8" src="/src/assets/slashes.svg"></img>
          </div>
          {/* Pink section with wave background */}
          <div className="h-24 bg-pink border-black border-2 md:border-r-0 bg-left bg-[url('/src/assets/homewaves.svg')] bg-repeat-x">
          </div>
        </div>

        {/* Slogans under banner*/}
        {/* Purple slogan */}
        <div className="w-screen md:w-5/12 h-12 md:h-20 bg-purple border-black md:border-2 md:border-b-4 md:border-l-0 text-white text-center text-lg md:text-2xl font-semibold md:font-medium p-0 m-0 flex justify-center items-center">
          <p className="md:uppercase">Effective Memory-Aid Tools</p>
        </div>
        {/* Dark grey slogan */}
        <div className="w-screen md:w-7/12 h-12 md:h-20 bg-dark-grey border-black md:border-2  md:border-b-4 md:border-r-0 text-white text-center text-lg md:text-2xl font-medium md:font-medium p-0 m-0 flex justify-center items-center">
          <p className="md:uppercase">Learn New Material Quickly</p>
        </div>

      {/* Close container for banner*/}
      </div>

      {/* Container for games list */}
      <div className="md:flex md:w-screen">
        <div className="border-black border-4 md:border-0 md:border-r-4 md:border-b-4 h-28 w-4/6 m-11 mx-auto md:w-5/12 md:h-64 md:m-0 flex items-center justify-center">
          {/* <p className="uppercase text-lg md:text-2xl font-semibold md:font-black">Animals</p> */}
          <NavLink className="uppercase text-lg md:text-2xl font-semibold md:font-black" to="/Game.jsx">Animals</NavLink>
        </div>
        <div className="border-black border-4 md:border-0 md:border-b-4 h-28 w-4/6 m-11 mx-auto md:w-7/12 md:h-64 md:m-0 flex items-center justify-center">
          <NavLink className="uppercase text-lg md:text-2xl font-semibold md:font-black" to="/Game.jsx">Shapes</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
