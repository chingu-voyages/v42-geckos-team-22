import React from "react";
import AppStore from "./AppStore";
import PlayStore from "./PlayStore";
import { FaFacebookF, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-turquoise pt-20 text-gray-200">
      <div>
        <h2>connect</h2>
        <div className="flex flex-row gap-x-2">
          <span>
            <FaFacebookF className="socialIcons" />
          </span>
          <span>
            <FaTwitter className="socialIcons" />
          </span>
          <span>
            <FaYoutube className="socialIcons" />
          </span>
          <span>
            <RiInstagramFill className="socialIcons" />
          </span>
          <span>
            <FaTiktok className="socialIcons" />
          </span>
        </div>
      </div>
      <div>
        <h2>shop</h2>
        <ul className="flex flex-col">
          <li>Amazon</li>
          <li>Merch</li>
          <li>eBooks</li>
          <li>iTunes</li>
        </ul>
      </div>
      <div>
        <h2>about</h2>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Terms of Use</li>
          <li>
            <span className="inline-block">
              <p>42 Developer Street</p>
              <p>San Francisco, CA 94105</p>
            </span>
          </li>
          <li>+1 (415) - HIR - EMEH</li>
        </ul>
      </div>
      <div className="bg-slate-800 bg-opacity-60">f</div>
    </footer>
  );
}

export default Footer;
