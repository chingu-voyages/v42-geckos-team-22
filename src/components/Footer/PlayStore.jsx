import React from "react";
import { FaGooglePlay } from "react-icons/fa";

export default function PlayStore() {
  return (
    <button class="inline-flex items-center rounded-lg bg-gray-800 py-3 px-5 hover:bg-gray-700 hover:text-white focus:outline-none">
      <FaGooglePlay />
      <span class="ml-4 flex flex-col items-start leading-none">
        <span class="mb-1 text-xs text-gray-400">GET IT ON</span>
        <span class="title-font font-medium">Google Play</span>
      </span>
    </button>
  );
}
