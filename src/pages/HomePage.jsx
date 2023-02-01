import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="h-screen w-screen">
      <div className="md:grid-rows-11 h-full w-full md:grid md:grid-cols-2">
        <div className="ring-2 md:row-span-4">1</div>
        <div className="h-full ring-2 md:row-span-4 md:flex md:flex-col">
          <div className="h-full bg-orange">orange</div>
          <div className="h-1/3 bg-pink">pink</div>
        </div>
        <div className="h-full bg-purple ring-2 md:row-span-1">3</div>
        <div className="h-full bg-dark-grey ring-2 md:row-span-1">4</div>
        <Link
          to="/"
          className="h-full ring-2 md:row-span-3 md:grid md:place-items-center"
        >
          <h2 className="uppercase">number</h2>
          <span className="absolute"></span>
        </Link>
        <Link
          to="/"
          className="h-full ring-2 md:row-span-3 md:grid md:place-items-center"
        >
          <h2 className="uppercase">shape</h2>
          <span className="absolute"></span>
        </Link>
        <Link
          to="/"
          className="h-full ring-2 md:row-span-3 md:grid md:place-items-center"
        >
          <h2 className="uppercase">color</h2>
          <span className="absolute"></span>
        </Link>
        <Link
          to="/"
          className="h-full ring-2 md:row-span-3 md:grid md:place-items-center"
        >
          <h2 className="uppercase">lowercase</h2>
          <span className="absolute"></span>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
