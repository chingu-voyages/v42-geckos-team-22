import React from "react";
import { BsApple } from "react-icons/bs";

export default function AppStore() {
  return (
    <button class="ml-4 mt-0 inline-flex items-center rounded-lg bg-gray-800 py-3 px-5 hover:bg-gray-700 hover:text-white focus:outline-none md:ml-0 md:mt-4 lg:ml-4 lg:mt-0">
      <BsApple />
      <span class="ml-4 flex flex-col items-start leading-none">
        <span class="mb-1 text-xs text-gray-400">Download on the</span>
        <span class="title-font font-medium">App Store</span>
      </span>
    </button>
  );
}
