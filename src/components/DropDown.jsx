import React from "react";
import { Link } from "react-router-dom";
import { IoColorPaletteSharp } from "react-icons/io5";
import { TbLetterCase, TbNumbers } from "react-icons/tb";
import { FaShapes } from "react-icons/fa";

export const DropDown = () => {
  return (
    <ul className="bg-red-orange uppercase text-white">
      <li className="hover:bg-orange">
        <Link to="/game/color" className="dropDown">
          <IoColorPaletteSharp className="dropDownIcons" />
          <p>colors</p>
        </Link>
      </li>
      <li className="hover:bg-orange">
        <Link to="/game/letter" className="dropDown">
          <TbLetterCase className="dropDownIcons" />
          <p>letters</p>
        </Link>
      </li>
      <li className="hover:bg-orange">
        <Link to="/game/number" className="dropDown">
          <TbNumbers className="dropDownIcons" />
          numbers
        </Link>
      </li>
      <li className="hover:bg-orange">
        <Link to="/game/shape" className="dropDown">
          <FaShapes className="dropDownIcons" />
          shapes
        </Link>
      </li>
    </ul>
  );
};
