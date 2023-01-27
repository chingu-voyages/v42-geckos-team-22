import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DropDown } from "./DropDown";
import { BsCaretDownFill, BsCaretLeftFill } from "react-icons/bs";

function MobileNav(props) {
  const [expandDropDown, setExpandDropDown] = useState(false);

  return (
    <ul className="absolute z-50 flex h-screen w-screen animate-slideIn flex-col items-center justify-evenly bg-turquoise text-3xl uppercase text-white md:hidden">
      <li
        onClick={props.closeMenu}
        className="-mt-24 text-gray-100 hover:text-white"
      >
        <Link to="/">home</Link>
      </li>
      <li
        // onClick={props.closeMenu}
        className="mx-auto flex flex-col items-center justify-center text-gray-100 hover:text-white"
      >
        <button
          onClick={() => setExpandDropDown(!expandDropDown)}
          className="flex cursor-pointer flex-row items-center justify-center"
        >
          <p className="pr-1">GAME TYPES</p>{" "}
          {expandDropDown ? <BsCaretDownFill /> : <BsCaretLeftFill />}
        </button>
        {expandDropDown && <DropDown closeMenu={props.closeMenu} />}
      </li>
      <li onClick={props.closeMenu} className="text-gray-100 hover:text-white">
        <Link to="/faq">faq</Link>
      </li>
      <li>
        <button
          onClick={() => null}
          className="uppercase text-gray-100 hover:text-white"
        >
          register
        </button>
      </li>
    </ul>
  );
}
export default MobileNav;
