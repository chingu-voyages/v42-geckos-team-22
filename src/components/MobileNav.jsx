import React from "react";
import { Link } from "react-router-dom";
import { DropDown } from "../components/DropDown";

function MobileNav(props) {
  return (
    <ul
      className={`z-50 flex h-screen w-screen ${
        props.toggleMobileNav && "animate-slideIn"
      } flex-col items-center justify-evenly bg-turquoise text-3xl uppercase text-white md:hidden`}
    >
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <DropDown toggleDropDown />
      </li>
      <li>
        <Link to="/faq">faq</Link>
      </li>
      <li>
        <button onClick={null} className="uppercase text-white">
          register
        </button>
      </li>
    </ul>
  );
}
export default MobileNav;
