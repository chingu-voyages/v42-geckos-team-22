import React from "react";
import { FaGooglePlay } from "react-icons/fa";

export default function PlayStore() {
  return (
    <button className="inline-flex items-center rounded-lg bg-gray-300 py-3 px-5 text-turquoise hover:bg-gray-100 hover:font-extrabold focus:outline-none">
      <FaGooglePlay className="text-lg font-bold" />
      <span className="ml-4 flex flex-col items-start leading-none">
        <span className="mb-1 text-xs text-turquoise">GET IT ON</span>
        <span className="title-font font-bold">Google Play</span>
      </span>
    </button>
  );
}
