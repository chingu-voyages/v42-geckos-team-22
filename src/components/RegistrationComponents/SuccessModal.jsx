import React from "react";
import { Link } from "react-router-dom";
import mascot from "../../assets/modal/mascot.svg";
import pawl from "../../assets/modal/pawl.svg";

export default function SuccessModal({ toggleModal, showModal }) {
  return (
    <>
      {showModal && (
        <div
          onClick={toggleModal} // User clicks backdrop will close
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-zinc-200 bg-opacity-40 backdrop-blur-[1.5px]"
        >
          <div
            onClick={(e) => {
              // User clicks inside modal will remain open
              // User clicks outside modal will close
              e.stopPropagation();
            }}
            className="border-8 relative flex h-full w-full flex-col items-center justify-center rounded-xl border-white bg-light-orange text-white sm:h-4/6 sm:w-7/12 sm:max-w-md"
          >
            <img
              src={pawl}
              className="absolute right-6 top-6 z-50 w-12"
              alt="pawl"
              onClick={toggleModal}
            />
            <img
              src={mascot}
              className="absolute bottom-14 w-4/5 max-w-md p-4"
              alt="mascot"
            />
            <div className="absolute bottom-36 z-50 flex flex-col items-center justify-center text-center text-black">
              <p className="text-2xl font-black">
                Account Successfully <br /> Registered
              </p>
              <p className="mt-7 mb-5">Let's start learning</p>
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
