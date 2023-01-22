import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DropDown } from "../components/DropDown";
import { BsCaretDownFill } from "react-icons/bs";

function MobileNav() {
  const [expandDropDown, setExpandDropDown] = useState(false);

  return (
    <ul
      className={`z-50 flex h-screen w-screen ${"animate-slideIn"} flex-col items-center justify-evenly bg-turquoise text-3xl uppercase text-white md:hidden`}
    >
      <li>
        <Link to="/">home</Link>
      </li>
      <li className="flex flex-col items-center justify-center">
        <button
          onClick={() => setExpandDropDown(!expandDropDown)}
          className="flex flex-row items-center justify-center"
        >
          <p>Game Types</p> <BsCaretDownFill />
        </button>
        {expandDropDown && <DropDown />}
      </li>
      <li>
        <Link to="/faq">faq</Link>
      </li>
      <li>
        <button onClick={() => null} className="uppercase text-white">
          register
        </button>
      </li>
    </ul>
  );
}
export default MobileNav;
