import React, { useState } from "react";
import { Link } from "react-router-dom";
import homedots from "../assets/homePage/homedots.svg";
import homewaves from "../assets/homePage/homewaves.svg";
import animal from "../assets/homePage/animal.svg";
import shape from "../assets/homePage/shape.svg";
import number from "../assets/homePage/number.svg";
import lettercase from "../assets/homePage/lettercase.svg";

function HomePage() {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className=" h-full md:h-screen">
      <div className="flex h-full w-full flex-col items-center justify-start md:grid md:grid-cols-2 md:grid-rows-[15]">
        <div
          className="relative inset-y-11 right-5 z-20 self-end md:inset-y-0 md:right-0 md:row-span-5 md:h-full md:border-r-4 md:border-black
"
        >
          <span className="inline-block rotate-90 md:ml-4 md:mt-4 md:rotate-0">
            <img className="h-full w-20 md:w-24" src={homedots} alt="dots" />
          </span>
          <h1 className="absolute right-1 top-1/2 hidden -translate-y-1/2 whitespace-nowrap font-extrabold uppercase leading-snug md:z-10 md:inline-block md:text-[4.2rem] xl:text-[5rem]">
            the only <br /> you need
          </h1>
        </div>
        <div className="relative mb-12 flex h-[12rem] w-full flex-col rounded-sm md:row-span-5 md:mb-0 md:h-full md:rounded-none ">
          <div className="absolute top-1/2 left-1 hidden -translate-y-1/2 md:z-10 md:flex md:flex-col md:gap-y-0">
            <h1 className="hidden whitespace-nowrap font-extrabold uppercase leading-snug md:z-10 md:inline-block md:text-[4.2rem] xl:text-[5rem]">
              flash card <br /> \\\\\\
            </h1>
          </div>
          <div className="relative ml-8 h-full bg-orange md:ml-0 md:flex md:items-center md:border-b-4 md:border-black">
            <h2 className="absolute left-1/4 top-1/2 w-56 -translate-x-1/4 -translate-y-1/2 text-3xl font-extrabold uppercase tracking-wider text-gray-50 md:hidden">
              the only flash card you need
            </h2>
          </div>
          <div className="hidden h-1/4 bg-pink md:block ">
            <span className="inline-block h-full w-full ">
              <img
                className="h-full w-full object-contain object-center"
                src={homewaves}
                alt="waves"
              />
            </span>
          </div>
        </div>
        <div className="h-16 w-full place-items-center bg-purple py-1 text-center md:row-span-1 md:grid md:h-full md:border-r-4 md:border-t-4 md:border-b-4 md:border-black md:py-0">
          <p className="mt-4 text-lg font-bold capitalize text-off-white md:mt-0 md:text-2xl md:font-semibold md:uppercase">
            effective memory-aid tools
          </p>
        </div>
        <div className="mb-10 h-16 w-full bg-dark-grey py-1 text-center md:row-span-1 md:mb-0 md:grid md:h-full md:place-items-center  md:border-t-4 md:border-b-4 md:border-black md:py-0">
          <p className="mt-4 text-lg font-bold capitalize text-off-white md:mt-0 md:text-2xl md:font-semibold md:uppercase">
            learn new materials quickly
          </p>
        </div>
        <Link
          to="/game/number"
          className="mt-5 mb-16 h-full w-4/6 py-14 ring-4 ring-black md:row-span-3 md:mb-0 md:mt-0 md:grid md:w-full md:place-items-center md:border-r-4 md:border-b-4 md:border-black md:py-0  md:ring-0 "
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
          className="mb-16 h-full w-4/6 py-14 ring-4 ring-black md:row-span-3 md:mb-0 md:grid md:w-full md:place-items-center md:border-b-4 md:border-black md:py-0 md:ring-0"
        >
          <h2 className="text-center text-2xl font-bold uppercase tracking-wide">
            shape
          </h2>
          <span className="absolute hidden -translate-x-32 -translate-y-8 md:inline-block">
            <img className="w-20" src={shape} alt="shape" />
          </span>
        </Link>
        <Link
          to="/game/animal"
          className="mb-16 h-full w-4/6 py-14 ring-4 ring-black md:row-span-3 md:mb-0 md:grid md:w-full md:place-items-center md:border-r-4 md:border-b-4 md:border-black md:py-0 md:ring-0"
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
          className="mb-16 h-full w-4/6 py-14 ring-4 ring-black md:row-span-3 md:mb-0 md:grid md:w-full md:place-items-center md:border-b-4 md:border-black md:py-0 md:ring-0"
        >
          <h2 className="text-center text-2xl font-bold uppercase tracking-wide">
            lettercase
          </h2>
          <span className="absolute hidden translate-x-32 translate-y-8 md:inline-block">
            <img className="w-20" src={lettercase} alt="lettercase" />
          </span>
        </Link>

        {seeMore ? (
          <>
            <Link
              to="/"
              className="mb-16 h-full w-4/6 py-14 ring-4 ring-black md:row-span-3 md:mb-0 md:grid md:w-full md:place-items-center md:border-r-4 md:border-black md:py-0 md:ring-0"
            >
              <h2 className="text-center text-2xl font-bold uppercase tracking-wide">
                COMING SOON
              </h2>
              <span className="absolute hidden translate-x-32 translate-y-8 md:inline-block">
                <img src="" alt="" />
              </span>
            </Link>
            <Link
              to="/"
              className="mb-16 h-full w-4/6 py-14 ring-4 ring-black md:row-span-3 md:mb-0 md:grid md:w-full md:place-items-center md:border-black  md:py-0 md:ring-0 "
            >
              <h2 className="text-center text-2xl font-bold uppercase tracking-wide">
                COMING SOON
              </h2>
              <span className="absolute hidden translate-x-32 translate-y-8 md:inline-block">
                <img src="" alt="" />
              </span>
            </Link>
          </>
        ) : (
          <p
            onClick={() => setSeeMore(true)}
            className="h-full cursor-pointer pb-4 text-sm font-semibold md:col-span-2 md:row-span-1 md:grid md:place-content-center md:pb-0 "
          >
            SEE MORE \\\\\\
          </p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
