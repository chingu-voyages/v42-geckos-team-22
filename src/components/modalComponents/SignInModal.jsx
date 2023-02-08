import React from "react";
import foxHead from "../../assets/modal/fox/foxHead.svg"
import foxLeftArm from "../../assets/modal/fox/foxLeftArm.svg"
import foxLeftLeg from "../../assets/modal/fox/foxLeftLeg.svg"
import foxRightArm from "../../assets/modal/fox/foxRightArm.svg"
import foxRightLeg from "../../assets/modal/fox/foxRightLeg.svg"

export default function SignInModal({
  toggleSignInModal,
  showSignInModal,
  signIn,
  saveEmail,
  savePassword,
}) {
  return (
    <>
      {showSignInModal && (
        <div
          onClick={toggleSignInModal} // User clicks backdrop will close
          className=" fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-bright-orange "
        >
          <div
            onClick={(e) => {
              // User clicks inside modal will remain open
              // User clicks outside modal will close
              e.stopPropagation();
            }}
            className="border-8 relative flex flex-col items-center justify-center rounded-xl bg-white  py-14 px-20 text-dark-grey"
          >
            <div className="relative flex flex-col space-y-2">
              <img src={foxHead} alt="fox head" className="absolute -top-60 " />
              <img
                src={foxLeftArm}
                alt="fox left arm"
                className="absolute -top-32 -left-28 -rotate-45"
              />
              <img
                src={foxRightArm}
                alt="fox right arm"
                className="absolute -top-40 -right-28 rotate-90"
              />
              <img
                src={foxLeftLeg}
                alt="fox left leg"
                className="absolute -left-20 -bottom-28 -z-10 h-48"
              />
              <img
                src={foxRightLeg}
                alt="fox right leg"
                className="absolute -right-3 -bottom-28 -z-10 h-48"
              />
              <label className="font-bold" htmlFor="username">
                Email:
              </label>
              <input
                className="border-b-2 border-dark-grey focus:border-bright-orange focus:outline-none "
                type="email"
                id="email"
                placeholder="Type your email..."
                onChange={saveEmail}
              />
              <label className="font-bold" htmlFor="password">
                Password:
              </label>
              <input
                onKeyDown={(event) => {
                  event.key === "Enter" && signIn();
                }}
                className=" border-b-2 border-dark-grey focus:border-bright-orange focus:outline-none "
                type="password"
                id="password"
                placeholder="Type your password..."
                onChange={savePassword}
              />
              <button
                onClick={signIn}
                type="submit"
                className="rounded-3xl bg-bright-orange p-2 font-bold"
              >
                LOGIN
              </button>
              <button
                onClick={toggleSignInModal}
                type="submit"
                className="rounded-3xl bg-dark-grey p-2 font-bold text-white"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
