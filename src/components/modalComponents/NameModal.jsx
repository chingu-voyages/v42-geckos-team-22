import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import name from "../../assets/modal/name.svg";
import nameProgress from "../../assets/modal/nameProgress.svg";

export default function NameModal({
  handleForwardClick,
  toggleModal,
  showRegisterModal,
  saveName,
  handleKeyDown,
}) {
  return (
    <>
      {showRegisterModal && (
        <div
          onClick={toggleModal} 
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-zinc-200 bg-opacity-40 backdrop-blur-[1.5px]"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="relative flex h-full w-full flex-col items-center justify-center bg-turquoise p-10 text-white sm:h-4/6  sm:w-7/12 sm:max-w-sm sm:rounded-2xl"
          >
            <div className="border relative  z-10 flex flex-col rounded-2xl bg-white p-20">
              <MdOutlineArrowForwardIos
                onClick={handleForwardClick}
                className="absolute right-6 top-6 z-50 text-2xl text-gray-500 hover:text-black"
              />
              <img src={name} className="" alt="name" />
              <img
                src={nameProgress}
                className="mt-20"
                alt="name progress bar"
              />
            </div>
            <div className="mt-10 flex w-full flex-wrap  place-content-center">
              <input
                autoFocus
                className="rounded-l-xl  border-none bg-white py-5 text-center text-black focus:outline-none"
                type="text"
                name="name"
                placeholder="Display Name"
                onChange={saveName}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleForwardClick}
                className="w-14 rounded-r-xl border-none bg-off-white text-white hover:bg-dark-grey hover:text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
