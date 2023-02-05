import React from "react";
import { Link } from "react-router-dom";
import homeslash from "../assets/homePage/slashes.svg";
import homedots from "../assets/homePage/homedots.svg";
import homewaves from "../assets/homePage/homewaves.svg";
import animal from "../assets/homePage/animal.svg";
import shape from "../assets/homePage/shape.svg";
import number from "../assets/homePage/number.svg";
import lettercase from "../assets/homePage/lettercase.svg";

function HomePage() {
  return (
    <div className="h-screen">
      <div className="flex h-full w-full flex-col items-center justify-start md:grid md:grid-cols-2 md:grid-rows-[12]">
        <span className="absolute inline-block h-1/3 max-w-[72rem] md:top-[20%] md:left-[20%] md:z-10">
          <h1 className="relative h-full uppercase text-gray-50 md:text-headingFont md:font-extrabold md:tracking-wide md:text-black">
            the only flash card you need{" "}
            <img
              className="hidden w-20 -translate-y-2 md:inline"
              src={homeslash}
              alt="slash"
            />
          </h1>
        </span>
        <div className="relative self-end md:row-span-5 md:h-full md:ring-2 md:ring-black">
          <span className=" inline-block rotate-90 md:ml-4 md:mt-4 md:rotate-0">
            <img className="h-full w-16 md:w-24" src={homedots} alt="dots" />
          </span>
        </div>
        <div className="h-full w-full md:row-span-5 md:flex md:flex-col md:ring-2 md:ring-black">
          <div className="ml-10 h-full bg-orange md:ml-0">meow</div>
          <div className="h-1/4 bg-pink md:block">
            <span className="inline-block h-full w-full ring-2 ring-black">
              <img
                className="h-full w-full object-contain object-center"
                src={homewaves}
                alt="waves"
              />
            </span>
          </div>
        </div>
        <div className="h-full w-full place-items-center bg-purple ring-2 ring-black md:row-span-1 md:grid">
          <p className="text-3xl font-semibold uppercase text-off-white">
            effective memory-aid tools
          </p>
        </div>
        <div className="h-full w-full bg-dark-grey ring-2 ring-black md:row-span-1 md:grid md:place-items-center">
          <p className="text-3xl font-semibold uppercase text-off-white">
            learn new materials quickly
          </p>
        </div>

        <Link
          to="/"
          className="h-full w-4/6 ring-2 ring-black md:row-span-3 md:grid md:w-full md:place-items-center"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide">number</h2>
          <span className="absolute hidden -translate-x-32 -translate-y-8 md:inline-block">
            <img className="w-20" src={number} alt="number" />
          </span>
        </Link>
        <Link
          to="/"
          className="h-full w-4/6 ring-2 ring-black md:row-span-3 md:grid md:w-full md:place-items-center"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide">shape</h2>
          <span className="absolute hidden -translate-x-32 -translate-y-8 md:inline-block">
            <img className="w-20" src={shape} alt="shape" />
          </span>
        </Link>
        <Link
          to="/"
          className="h-full w-4/6 ring-2 ring-black md:row-span-3 md:grid md:w-full md:place-items-center"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide">animal</h2>
          <span className="absolute hidden translate-x-32 translate-y-8 md:inline-block">
            <img className="w-20" src={animal} alt="animal" />
          </span>
        </Link>
        <Link
          to="/"
          className="h-full w-4/6 ring-2 ring-black md:row-span-3 md:grid md:w-full md:place-items-center"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide">
            lettercase
          </h2>
          <span className="absolute hidden translate-x-32 translate-y-8 md:inline-block">
            <img className="w-20" src={lettercase} alt="lettercase" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
