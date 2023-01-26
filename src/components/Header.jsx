import React, { useState } from "react";
import MobileNav from "./MobileNav";
import { DropDown } from "./DropDown";
import { NavLink, Link } from "react-router-dom";
import { BsCaretDownFill } from "react-icons/bs";
import { RiHome2Fill } from "react-icons/ri";
import { CgClose, CgMenu } from "react-icons/cg";

function Header() {
  const [expandDropDown, setExpandDropDown] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMenu = () => setExpandDropDown(!expandDropDown);

  return (
    <header className="body-font z-50 h-24  bg-turquoise text-xl font-bold text-white md:border-t-2 md:border-b-4 md:border-t-black md:border-b-black md:bg-bg_nav">
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
          {showMobileNav ? (
            <CgClose className="burgerMenu" />
          ) : (
            <CgMenu className="burgerMenu" />
          )}
        </li>
      </ul>

      {showMobileNav && <MobileNav />}

      <nav className="hidden h-full uppercase md:mx-32 md:flex md:flex-row md:items-center md:justify-between">
        <ul className="md:flex md:flex-row md:items-center md:gap-24">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li
            onMouseEnter={toggleMenu}
            onMouseLeave={() => setExpandDropDown(false)}
            className="cursor-pointer uppercase"
          >
            <span className="flex flex-row items-center">
              <Link to="/game">game type</Link>
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
