import React from "react";
import { DropDown } from "../components/DropDown";
import MobileNav from "../components/MobileNav";

function Home() {
  return (
    <div className="grid h-screen place-items-center text-4xl font-bold">
      <p>HOME PAGE</p>
      <DropDown />
    </div>
  );
}

export default Home;
