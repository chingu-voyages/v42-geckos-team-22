import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="body-font  bg-turquoise text-white md:h-24">
      <nav className="hidden h-full md:mx-32 md:flex md:flex-row md:items-center md:justify-between">
        <ul className="md:flex md:flex-row md:items-center md:gap-14">
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
