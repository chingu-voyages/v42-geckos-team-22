import React from "react";
import AppStore from "./AppStore";
import PlayStore from "./PlayStore";
import { FaFacebookF, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="w-screen bg-turquoise text-gray-300">
      <div className="w-full pt-20 md:flex md:flex-row md:justify-around md:px-40">
        <div className="md:flex md:flex-col">
          <div className="mb-10 flex flex-col items-center justify-center gap-y-4">
            <h2 className="text-lg font-bold uppercase">download</h2>
            <figure>
              <PlayStore />
              <AppStore />
            </figure>
          </div>

          <div className="mb-10 flex flex-col items-center justify-center gap-y-4">
            <h2 className="text-lg font-bold uppercase">connect</h2>
            <div className="flex flex-row gap-x-3">
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
        </div>
        <div className="mb-10 flex flex-col items-center justify-center gap-y-4">
          <h2 className="text-lg font-bold uppercase">shop</h2>
          <ul className="flex flex-col items-center justify-center">
            <li className="footerLinks">Amazon</li>
            <li className="footerLinks">Merch</li>
            <li className="footerLinks">eBooks</li>
            <li className="footerLinks">iTunes</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-4 pb-20">
          <h2 className="text-lg font-bold uppercase">about</h2>
          <ul className="flex flex-col items-center justify-center">
            <li className="footerLinks">About Us</li>
            <li className="footerLinks">Careers</li>
            <li className="footerLinks">Terms of Use</li>
            <li className="my-4">
              <span className="flex flex-col items-center justify-center">
                <p>42 Developer Street</p>
                <p>San Francisco, CA 94105</p>
              </span>
            </li>
            <li>+1 (415) - HIRE - MEEH</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center  justify-center bg-slate-800 bg-opacity-60 py-3 md:flex-row md:justify-between md:px-32">
        <p className="text-sm">
          © 2023 | Made with 🧡 & 🥑 by Team{" "}
          <a
            href="https://github.com/chingu-voyages/v42-geckos-team-22"
            target="_blank"
            className="footerLinks"
          >
            Geckos22
          </a>
        </p>
        <h2 className="text-puple-200 text-sm font-bold">FLASHY</h2>
      </div>
    </footer>
  );
}

export default Footer;
