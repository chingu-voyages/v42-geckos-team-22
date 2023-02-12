import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DropDown } from "./DropDown";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slices/headerSlice";

function MobileNav(props) {
  const [expandDropDown, setExpandDropDown] = useState(false);
  const dispatch = useDispatch();

  return (
    <ul className="absolute z-50 flex h-[200vh] w-screen animate-slideIn flex-col items-center justify-start gap-y-24 bg-turquoise pt-40 text-3xl uppercase text-white md:hidden">
      <li
        onClick={() => dispatch(toggleMenu())}
        className="-mt-24 text-gray-100 hover:text-white"
      >
        <Link to="/">home</Link>
      </li>
      <li className="mx-auto flex flex-col items-center justify-center text-gray-100 hover:text-white">
        <button
          onClick={() => setExpandDropDown(!expandDropDown)}
          className="flex cursor-pointer flex-row items-center justify-center"
        >
          <p className="pr-1">GAME TYPES</p>
          {expandDropDown ? <BsCaretUpFill /> : <BsCaretDownFill />}
        </button>
        {expandDropDown && <DropDown />}
      </li>
      <li
        onClick={() => dispatch(toggleMenu())}
        className="text-gray-100 hover:text-white"
      >
        <Link to="/faq">faq</Link>
      </li>
      {props.currentUser ? (
        <li>
          <button
            onClick={props.logOut}
            className="uppercase text-gray-100 hover:text-white"
          >
            sign out
          </button>
        </li>
      ) : (
        <>
          <li>
            <button
              onClick={props.toggleModal}
              className="uppercase text-gray-100 hover:text-white"
            >
              register
            </button>
          </li>{" "}
          <li>
            <button
              onClick={props.toggleSignInModal}
              className="uppercase text-gray-100 hover:text-white"
            >
              sign in
            </button>
          </li>
        </>
      )}
    </ul>
  );
}
export default MobileNav;
