import React, { useState } from "react";
import MobileNav from "./MobileNav";
import { NavLink, Link } from "react-router-dom";
import { BsCaretDownFill } from "react-icons/bs";
import { RiHome2Fill } from "react-icons/ri";
import { DropDown } from "./DropDown";

function Header() {
  const [expandDropDown, setExpandDropDown] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="body-font h-24  bg-turquoise text-xl font-bold text-white md:border-t-2 md:border-b-4 md:border-t-black md:border-b-black md:bg-bg_nav">
      <ul className="mx-8 flex h-full flex-row items-center justify-between md:hidden">
        <li>
          <Link to="/">
            <RiHome2Fill className="text-4xl" />
          </Link>
        </li>
        <li
          onClick={() => setShowMobileNav(!showMobileNav)}
          className="my-2 flex h-10 w-12 cursor-pointer flex-col gap-y-[0.32rem] shadow hover:bg-red-orange focus:outline-none"
        >
          <span className="burgerMenu mt-2"></span>
          <span className="burgerMenu"></span>
          <span className="burgerMenu"></span>
        </li>
      </ul>

      {showMobileNav ? <MobileNav toggleMobileNav={showMobileNav} /> : null}

      <nav className="hidden h-full uppercase md:mx-32 md:flex md:flex-row md:items-center md:justify-between">
        <ul className="md:flex md:flex-row md:items-center md:gap-24">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li
            onMouseLeave={() => setExpandDropDown(false)}
            onMouseEnter={() => setExpandDropDown(true)}
            className="cursor-pointer uppercase"
          >
            <span className="flex flex-row items-center">
              <p>game type</p>
              <BsCaretDownFill />
            </span>
            {expandDropDown && <DropDown />}
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
