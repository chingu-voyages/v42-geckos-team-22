import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="h-screen">
      <div className="md:grid-rows-12 h-full w-full md:grid md:grid-cols-2">
        <span className="absolute z-10 inline-block h-1/2 max-w-[75rem]">
          <h1 className="relative h-full uppercase leading-5 tracking-wide md:text-8xl md:font-extrabold">
            the only flash card you need
          </h1>
          {/* <h1 className="relative max-w-[73rem] uppercase tracking-wide md:top-[20%] md:left-[20%] md:text-8xl md:font-extrabold">
            the only flash card you need
          </h1> */}
        </span>
        <div className="ring-2 ring-black md:row-span-5">1</div>
        <div className="h-full ring-2 ring-black md:row-span-5 md:flex md:flex-col">
          <div className="h-full bg-orange">orange</div>
          <div className="h-1/3 bg-pink">pink</div>
        </div>
        <div className="md: h-full place-items-center bg-purple ring-2 ring-black md:row-span-1 md:grid">
          <p className="text-3xl font-semibold uppercase text-off-white">
            effective memory-aid tools
          </p>
        </div>
        <div className="h-full bg-dark-grey ring-2 ring-black md:row-span-1 md:grid md:place-items-center">
          <p className="text-3xl font-semibold uppercase text-off-white">
            learn new materials quickly
          </p>
        </div>
        <Link
          to="/"
          className="h-full ring-2 ring-black md:row-span-3 md:grid md:place-items-center"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide">number</h2>
          <span className="absolute"></span>
        </Link>
        <Link
          to="/"
          className="h-full ring-2 ring-black md:row-span-3 md:grid md:place-items-center"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide">shape</h2>
          <span className="absolute"></span>
        </Link>
        <Link
          to="/"
          className="h-full ring-2 ring-black md:row-span-3 md:grid md:place-items-center"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide">animal</h2>
          <span className="absolute"></span>
        </Link>
        <Link
          to="/"
          className="h-full ring-2 ring-black md:row-span-3 md:grid md:place-items-center"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide">
            lettercase
          </h2>
          <span className="absolute"></span>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
