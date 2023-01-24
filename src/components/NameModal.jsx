import React from "react";
import { Link } from "react-router-dom";

export default function NameModal({ toggleModal, showModal }) {
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
            className="relative flex h-full w-full flex-col items-center justify-center sm:rounded-2xl bg-turquoise  p-16 text-white sm:h-4/6 sm:w-7/12 sm:max-w-md"
          >
            <div className="relative flex w-full flex-col rounded-2xl border bg-white p-20">
              <img
                src="src/assets/pawl.svg"
                className="absolute right-6 top-6 w-12"
                alt="pawl"
                onClick={toggleModal}
              />
              <img src="src/assets/name.svg" className="" alt="name" />
              <img
                src="src/assets/nameProgress.svg"
                className="mt-20"
                alt="name progress bar"
              />
            </div>
            <input
              className=" mt-10 w-full rounded-xl border-none bg-white py-5 text-center text-black"
              type="text"
              name=""
              placeholder="Name"
            />
          </div>
        </div>
      )}
    </>
  );
}
