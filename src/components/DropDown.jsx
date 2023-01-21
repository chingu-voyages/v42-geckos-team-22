import React from "react";
import { Link } from "react-router-dom";
import { IoColorPaletteSharp } from "react-icons/io5";
import { TbLetterCase, TbNumbers } from "react-icons/tb";
import { FaShapes } from "react-icons/fa";

export const DropDown = () => {
  return (
    <ul className="uppercase">
      <li>
        <Link to="/game/color" className="flex flex-row">
          <p>colors</p>
          <IoColorPaletteSharp />
        </Link>
      </li>
      <li>
        <Link to="/game/letter" className="flex flex-row">
          letters
          <TbLetterCase />
        </Link>
      </li>
      <li>
        <Link to="/game/number" className="flex flex-row">
          numbers
          <TbNumbers />
        </Link>
      </li>
      <li>
        <Link to="/game/shape" className="flex flex-row">
          shapes
          <FaShapes />
        </Link>
      </li>
    </ul>
  );
};
