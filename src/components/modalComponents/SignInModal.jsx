import React from "react";
import foxHead from "../../assets/modal/fox/foxHead.svg";
import foxLeftArm from "../../assets/modal/fox/foxLeftArm.svg";
import foxLeftLeg from "../../assets/modal/fox/foxLeftLeg.svg";
import foxRightArm from "../../assets/modal/fox/foxRightArm.svg";
import foxRightLeg from "../../assets/modal/fox/foxRightLeg.svg";

export default function SignInModal({
  toggleSignInModal,
  showSignInModal,
  signIn,
  saveEmail,
  savePassword,
}) {
  const [leftArmStyle, setLeftArmStyle] = React.useState({
    position: "absolute",
    top: "-8rem",
    left: "-5.3rem",
    transition: "800ms ease all",
  });
  const [rightArmStyle, setRightArmStyle] = React.useState({
    position: "absolute",
    top: "-9.4rem",
    right: "-5rem",
    transform: "rotate(45deg)",
    transition: "800ms ease all",
  });

  return (
    <>
      {showSignInModal && (
        <div
          onClick={toggleSignInModal} 
          className=" fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-bright-orange "
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="border-8 relative flex flex-col items-center justify-center rounded-xl bg-white  py-14 px-20 text-dark-grey"
          >
            <div className="relative flex flex-col space-y-2">
              <img src={foxHead} alt="fox head" className="absolute -top-52 " />
              <img 
                src={foxLeftArm} 
                alt="fox left arm" 
                style={leftArmStyle} />
              <img
                src={foxRightArm}
                alt="fox right arm"
                style={rightArmStyle}
              />
              <img
                src={foxLeftLeg}
                alt="fox left leg"
                className="absolute -left-12 -bottom-28 -z-10 h-56"
              />
              <img
                src={foxRightLeg}
                alt="fox right leg"
                className="absolute -right-14 -bottom-28 -z-10 h-56"
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
                onMouseLeave={() => {
                  setLeftArmStyle({
                    ...leftArmStyle,
                    transform: "rotate(0deg)",
                  });
                  setRightArmStyle({
                    ...rightArmStyle,
                    transform: "rotate(45deg)",
                  });
                }}
                onMouseOver={() => {
                  setLeftArmStyle({
                    ...leftArmStyle,
                    transform: "rotate(-45deg)",
                  });
                  setRightArmStyle({
                    ...rightArmStyle,
                    transform: "rotate(90deg)",
                  });
                }}
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
