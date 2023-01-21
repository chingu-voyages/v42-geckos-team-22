import React from "react";

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
            className=" flex h-full w-full flex-col items-center justify-center border-8 border-white bg-light-orange text-white "
          >
            {/* <img
              className="absolute bottom-12 w-4/5"
              src="src/assets/mascot.svg"
              alt="mascot"
            /> */}
            <p>Register Account Successfully!</p>
            <p>Let’s start learning</p>
            <img
              src="src/assets/pawl.svg"
              alt="pawl"
              className="absolute right-6 top-6 w-12"
              onClick={toggleModal}
            ></img>
            <button
              className="border-3 rounded-md border-white bg-orange py-2 px-7 font-semibold"
              onClick={toggleModal}
            >
              Home
            </button>
          </div>
        </div>
      )}
    </>
  );
}
