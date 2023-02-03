import React from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function PasswordModal({
  handleBackClick,
  toggleModal,
  showModal,
  registerNewUser,
  savePassword,
  handleKeyDown,
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
            className="relative flex h-full w-full flex-col items-center justify-center bg-orange p-10 text-white sm:h-4/6  sm:w-7/12 sm:max-w-sm sm:rounded-2xl"
          >
            <div className="border relative z-10 flex flex-col rounded-2xl bg-white p-20">
              <MdOutlineArrowBackIosNew
                onClick={handleBackClick}
                className="absolute left-6 top-6 z-50 text-2xl text-gray-500 hover:text-black"
              />

              <img src="src/assets/password.svg" className="" alt="password" />
              <img
                src="src/assets/passwordProgress.svg"
                className="mt-20"
                alt="password progress bar"
              />
            </div>
            <div className="mt-10 flex w-full flex-wrap  place-content-center">
              <input
                autoFocus
                className="rounded-l-xl  border-none bg-white py-5 text-center text-black focus:outline-none"
                type="password"
                name="password"
                placeholder="Password"
                onChange={savePassword}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={registerNewUser}
                className="w-14 rounded-r-xl border-none bg-off-white text-white hover:bg-dark-grey hover:text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
