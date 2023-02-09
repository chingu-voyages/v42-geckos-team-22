import React from "react";
import { Link } from "react-router-dom";
import pawl from "../../assets/modal/pawl.svg";

export default function SuccessModal({ toggleModal, showModal }) {
  return (
    <>
      {showModal && (
        <div
          onClick={toggleModal} // User clicks backdrop will close
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-200 bg-opacity-40 backdrop-blur-[1.5px]"
        >
          <div
            onClick={(e) => {
              // User clicks inside modal will remain open
              // User clicks outside modal will close
              e.stopPropagation();
            }}
            className="relative flex h-full w-full flex-col items-center justify-center gap-y-24 rounded-xl border-6 border-white bg-light-orange text-white sm:h-4/6 sm:max-w-sm sm:justify-between sm:gap-0"
          >
            <img
              src={pawl}
              className="z-50 w-12 translate-x-32 cursor-pointer sm:mt-4 sm:mr-4 sm:translate-x-0 sm:self-end"
              alt="pawl"
              onClick={toggleModal}
            />
            <div className="z-50 flex h-[27rem] w-80 flex-col items-center justify-center bg-mascot bg-cover bg-center bg-no-repeat text-center text-black sm:mb-12">
              <p className="pt-28 text-2xl font-black">
                Account Successfully <br /> Registered
              </p>
              <p className="mt-16 mb-5">Let's start learning</p>
              <Link
                className="rounded-md border-3 border-white bg-orange py-2 px-7 font-semibold text-white"
                onClick={toggleModal}
                // User click button to return home
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
