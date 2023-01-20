import { NavLink } from "react-router-dom";

import React from "react";

function Header() {
  return (
    <header className="body-font  bg-turquoise bg-bg_nav text-xl font-bold text-white md:h-24 md:border-t-2 md:border-b-4 md:border-t-black md:border-b-black">
      <nav className="hidden h-full md:mx-32 md:flex md:flex-row md:items-center md:justify-between">
        <ul className="md:flex md:flex-row md:items-center md:gap-24">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink>GAME TYPE</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
        </ul>
        <button className="hidden md:inline-block">REGISTER</button>
      </nav>
    </header>
  );
}

export default Header;
