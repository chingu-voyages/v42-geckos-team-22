import React from "react";
import {
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function NameModal({
  handleForwardClick,
  toggleModal,
  showModal,
}) {
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
            className="relative flex h-full w-full flex-col items-center justify-center bg-turquoise p-10 text-white sm:h-4/6  sm:w-7/12 sm:max-w-sm sm:rounded-2xl"
          >
            <div className="relative z-10  flex flex-col rounded-2xl border bg-white p-20">
              <MdOutlineArrowForwardIos
                onClick={handleForwardClick}
                className="absolute right-6 top-6 z-50 text-2xl text-gray-500 hover:text-black"
              />
              <img src="src/assets/name.svg" className="" alt="name" />
              <img
                src="src/assets/nameProgress.svg"
                className="mt-20"
                alt="name progress bar"
              />
            </div>
            <input
              className="mt-10 w-full rounded-xl border-none bg-white py-5 text-center text-black focus:outline-none sm:mt-6"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
        </div>
      )}
    </>
  );
}
