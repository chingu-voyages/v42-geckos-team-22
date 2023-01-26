import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DropDown } from "./DropDown";
import { BsCaretDownFill } from "react-icons/bs";
// import { IoColorPaletteSharp } from "react-icons/io5";
// import { TbLetterCase, TbNumbers } from "react-icons/tb";
// import { FaShapes } from "react-icons/fa";

function MobileNav() {
  const [expandDropDown, setExpandDropDown] = useState(false);

  const closeMenu = () => setExpandDropDown(!expandDropDown);

  return (
    <ul className="z-50 flex h-screen w-screen animate-slideIn flex-col items-center justify-evenly bg-turquoise text-3xl uppercase text-white md:hidden">
      <li className="text-gray-100 hover:text-white">
        <Link to="/">home</Link>
      </li>
      <li className="flex flex-col items-center justify-center text-gray-100 hover:text-white">
        <button
          onClick={() => setExpandDropDown(!expandDropDown)}
          className="flex flex-row items-center justify-center"
        >
          <p className="pr-1">GAME TYPES</p> <BsCaretDownFill />
        </button>
      </li>
      <li className={`${expandDropDown ? "inline-block" : "hidden"}`}>
        {expandDropDown && <DropDown />}
      </li>
      <li className="text-gray-100 hover:text-white">
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
