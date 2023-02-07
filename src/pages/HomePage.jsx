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
    <div className="h-full md:h-screen">
      <div className="flex h-full w-full flex-col items-center justify-start md:grid md:grid-cols-2 md:grid-rows-[12]">
        <span className="absolute hidden h-1/3 md:top-[20%] md:left-[20%] md:z-10 md:inline-block md:max-w-[72rem]">
          <h1 className="h-full w-full uppercase text-gray-50 md:text-headingFont md:font-extrabold md:tracking-wide md:text-black xl:max-w-[93.75rem]">
            the only flash card you need{" "}
            <img
              className="hidden w-20 -translate-y-2 md:inline"
              src={homeslash}
              alt="slash"
            />
          </h1>
        </span>
        <div className="relative inset-y-11 right-5 z-20 self-end md:inset-y-0 md:right-0 md:row-span-5 md:h-full md:ring-2 md:ring-black">
          <span className="inline-block rotate-90 md:ml-4 md:mt-4 md:rotate-0">
            <img className="h-full w-20 md:w-24" src={homedots} alt="dots" />
          </span>
        </div>
        <div className="mb-12 flex h-[12rem] w-full flex-col rounded-sm md:row-span-5 md:mb-0 md:h-full md:rounded-none md:ring-2 md:ring-black">
          <div className="relative ml-8 h-full bg-orange md:ml-0 md:ring-2 md:ring-black">
            <h2 className="absolute left-1/4 top-1/2 w-56 -translate-x-1/4 -translate-y-1/2 text-3xl font-extrabold uppercase tracking-wider text-gray-50 md:hidden">
              the only flash card you need
            </h2>
          </div>
          <div className="hidden h-1/4 bg-pink md:block md:ring-2 md:ring-black">
            <span className="inline-block h-full w-full md:ring-2 md:ring-black">
              <img
                className="h-full w-full object-contain object-center"
                src={homewaves}
                alt="waves"
              />
            </span>
          </div>
        </div>
        <div className="h-16 w-full place-items-center bg-purple py-1 text-center md:row-span-1 md:grid md:h-full md:py-0 md:ring-2 md:ring-black">
          <p className="mt-4 text-lg font-bold capitalize text-off-white md:mt-0 md:text-3xl md:font-semibold md:uppercase">
            effective memory-aid tools
          </p>
        </div>
        <div className="mb-10 h-16 w-full bg-dark-grey py-1 text-center md:row-span-1 md:mb-0 md:grid md:h-full md:place-items-center md:py-0 md:ring-2 md:ring-black">
          <p className="mt-4 text-lg font-bold capitalize text-off-white md:mt-0 md:text-3xl md:font-semibold md:uppercase">
            learn new materials quickly
          </p>
        </div>
        <Link
          to="/game/number"
          className="mt-5 mb-16 h-full w-4/6 py-14 ring-8 ring-black md:row-span-3 md:mb-0 md:mt-0 md:grid md:w-full md:place-items-center md:py-0 md:ring-2"
        >
          <h2 className="text-center text-2xl font-bold uppercase tracking-wide">
            number
          </h2>
          <span className="absolute hidden -translate-x-32 -translate-y-8 md:inline-block">
            <img className="w-20" src={number} alt="number" />
          </span>
        </Link>
        <Link
          to="/game/shape"
          className="mb-16 h-full w-4/6 py-14 ring-8 ring-black md:row-span-3 md:mb-0 md:grid md:w-full md:place-items-center md:py-0 md:ring-2"
        >
          <h2 className="text-center text-2xl font-bold uppercase tracking-wide">
            shape
          </h2>
          <span className="absolute hidden -translate-x-32 -translate-y-8 md:inline-block">
            <img className="w-20" src={shape} alt="shape" />
          </span>
        </Link>
        <Link
          to="/game/color"
          className="mb-16 h-full w-4/6 py-14 ring-8 ring-black md:row-span-3 md:mb-0 md:grid md:w-full md:place-items-center md:py-0 md:ring-2"
        >
          <h2 className="text-center text-2xl font-bold uppercase tracking-wide">
            animal
          </h2>
          <span className="absolute hidden translate-x-32 translate-y-8 md:inline-block">
            <img className="w-20" src={animal} alt="animal" />
          </span>
        </Link>
        <Link
          to="/game/letter"
          className="mb-16 h-full w-4/6 py-14 ring-8 ring-black md:row-span-3 md:mb-0 md:grid md:w-full md:place-items-center md:py-0 md:ring-2"
        >
          <h2 className="text-center text-2xl font-bold uppercase tracking-wide">
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
