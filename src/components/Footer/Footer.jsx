import React from "react";
import { FaFacebookF, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="w-screen bg-turquoise text-gray-300">
      <div className="w-full pt-12 md:flex md:flex-row md:justify-evenly md:px-40 md:pb-12">
        <div className="md:mr-80 md:flex md:flex-col">
          <div className="mb-10 flex flex-col items-center justify-center gap-y-4 md:mb-0 md:items-start">
            <h2 className="text-lg font-bold uppercase text-gray-200">
              connect
            </h2>
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

        <div className="mb-10 flex flex-col items-center justify-center gap-y-4 md:mb-0 md:items-start">
          <h2 className="text-lg font-bold uppercase text-gray-200">about</h2>
          <ul className="flex flex-col items-center justify-center md:items-start">
            <li className="footerLinks">About Us</li>
            <li className="footerLinks">Careers</li>
            <li className="footerLinks">Terms of Use</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-slate-800 bg-opacity-60 py-3 md:flex-row md:justify-between md:px-32">
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
