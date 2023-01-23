import React from "react";
import { BsApple } from "react-icons/bs";

export default function AppStore() {
  return (
    <button className="ml-4 mt-0 inline-flex items-center rounded-lg bg-gray-300 py-3 px-5 text-turquoise hover:bg-gray-100 hover:font-bold focus:outline-none md:ml-0 md:mt-4 lg:ml-4 lg:mt-0">
      <BsApple className="text-lg font-bold" />
      <span className="ml-4 flex flex-col items-start leading-none">
        <span className="mb-1 text-xs text-turquoise">Download on the</span>
        <span className="title-font font-bold">App Store</span>
      </span>
    </button>
  );
}
