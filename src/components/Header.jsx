import { NavLink, Link } from "react-router-dom";
import { BsCaretDownFill } from "react-icons/bs";
import { RiHome2Fill } from "react-icons/ri";
import React from "react";

function Header() {
  return (
    <header className="body-font h-24  bg-turquoise text-xl font-bold text-white md:border-t-2 md:border-b-4 md:border-t-black md:border-b-black md:bg-bg_nav">
      <ul className="mx-20 flex h-full flex-row items-center justify-between md:hidden">
        <li>
          <Link to="/">
            <RiHome2Fill className="text-4xl" />
          </Link>
        </li>
        <li
          // onClick={{}}
          className="my-2 flex h-10 w-12 cursor-pointer flex-col gap-y-1 shadow hover:bg-light-orange focus:outline-none"
        >
          <span className="burgerMenu mt-2"></span>
          <span className="burgerMenu"></span>
          <span className="burgerMenu"></span>
        </li>
      </ul>

      <nav className="hidden h-full uppercase md:mx-32 md:flex md:flex-row md:items-center md:justify-between">
        <ul className="md:flex md:flex-row md:items-center md:gap-24">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li className="flex flex-row items-center">
            <NavLink>game type</NavLink>
            <BsCaretDownFill />
          </li>
          <li>
            <NavLink to="/faq">faq</NavLink>
          </li>
        </ul>
        <button className="hidden uppercase md:inline-block">register</button>
      </nav>
    </header>
  );
}

export default Header;
