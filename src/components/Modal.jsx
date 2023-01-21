import React from "react";
import { Link } from "react-router-dom";

export default function Modal({ toggleModal, showModal }) {
  return (
    <>
      {showModal && (
        <div
          onClick={toggleModal} //close modal when click on this backdrop
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-zinc-200 bg-opacity-40 backdrop-blur-[1.5px]"
        >
          <div
            onClick={(e) => {
              e.stopPropagation(); //allows modal to remain when click on
            }}
            className="sm:max-w-md relative flex h-full w-full flex-col items-center justify-center border-8 border-white bg-light-orange text-white sm:h-4/6 sm:w-7/12 rounded-xl"
          >
            <img
              src="src/assets/pawl.svg"
              className="absolute right-6 top-6 w-12"
              alt="pawl"
              onClick={toggleModal}
            />
            <img
              src="src/assets/mascot.svg"
              className="absolute bottom-12 w-4/5 max-w-md sm:bottom-10 sm:max-w-sm p-4"
              alt="mascot"
            />
            <div className="absolute bottom-32 z-50 flex flex-col items-center justify-center text-center text-black">
              <p className="text-2xl font-black ">
                Register Account <br /> Successfully!
              </p>
              <p className="mt-7 mb-5">Let's start learning</p>

              <Link
                className="border-3 rounded-md border-white bg-orange py-2 px-7 font-semibold text-white"
                onClick={toggleModal}
                to="/"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
