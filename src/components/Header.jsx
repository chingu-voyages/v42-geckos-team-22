import { NavLink } from "react-router-dom";

import React from "react";

function Header() {
  return (
    <div>
      <header className="body-font bg-turquoise text-white">
        <nav className="hidden md:flex md:flex-row">
          <ul>
            <NavLink>HOME</NavLink>
            <NavLink>GAME TYPES</NavLink> //change to drop-down tabbed component
            <NavLink>FAQ</NavLink>
          </ul>
          <button className="hidden md:inline-block">REGISTER</button>
        </nav>
      </header>
    </div>
  );
}

export default Header;
