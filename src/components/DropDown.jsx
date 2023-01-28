import React from "react";
import { Link } from "react-router-dom";
import { IoColorPaletteSharp } from "react-icons/io5";
import { TbLetterCase, TbNumbers } from "react-icons/tb";
import { FaShapes } from "react-icons/fa";

export const DropDown = (props) => {
  return (
    <ul className="z-50 flex w-screen flex-col bg-red-orange p-1 text-2xl uppercase text-off-white md:absolute md:w-auto md:animate-dropDown md:p-2">
      <li onClick={props.closeMenu} className="w-full py-4 hover:bg-orange">
        <Link to="/game/color" className="dropDown">
          <IoColorPaletteSharp className="dropDownIcons" />
          <p>colors</p>
        </Link>
      </li>
      <li onClick={props.closeMenu} className="w-full py-4 hover:bg-orange">
        <Link to="/game/letter" className="dropDown">
          <TbLetterCase className="dropDownIcons" />
          <p>letters</p>
        </Link>
      </li>
      <li onClick={props.closeMenu} className="w-full py-4 hover:bg-orange">
        <Link to="/game/number" className="dropDown">
          <TbNumbers className="dropDownIcons" />
          <p>numbers</p>
        </Link>
      </li>
      <li onClick={props.closeMenu} className="w-full py-4 hover:bg-orange">
        <Link to="/game/shape" className="dropDown">
          <FaShapes className="dropDownIcons" />
          <p>shapes</p>
        </Link>
      </li>
    </ul>
  );
};
