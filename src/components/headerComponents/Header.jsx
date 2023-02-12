import React, { useState } from "react";
import MobileNav from "./MobileNav";
import { DropDown } from "./DropDown";
import { NavLink, Link } from "react-router-dom";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { RiHome2Fill } from "react-icons/ri";
import { CgClose, CgMenu } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/slices/headerSlice";

function Header(props) {
  const [expandDropDown, setExpandDropDown] = useState(false);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.header);

  return (
    <header className="body-font z-50 h-24 bg-turquoise text-xl  font-bold text-white md:border-t-2 md:border-b-4 md:border-t-black md:border-b-black md:bg-bg_nav">
      <ul className="mx-8 flex h-full flex-row items-center justify-between md:hidden">
        <li>
          <Link to="/">
            <RiHome2Fill className="text-4xl" />
          </Link>
        </li>
        <li
          onClick={() => dispatch(toggleMenu())}
          className="my-2 flex h-10 w-12 cursor-pointer flex-col gap-y-[0.32rem] shadow transition-all duration-300 ease-in-out hover:bg-red-orange focus:outline-none"
        >
          {isOpen ? (
            <CgClose className="burgerMenu" />
          ) : (
            <CgMenu className="burgerMenu" />
          )}
        </li>
      </ul>

      {isOpen && (
        <MobileNav
          toggleModal={props.toggleModal}
          toggleSignInModal={props.toggleSignInModal}
          logOut={props.logOut}
          signIn={props.signIn}
          toggleMenu={props.toggleMenu}
          currentUser={props.currentUser}
        />
      )}

      <nav className="hidden h-full uppercase md:mx-32 md:flex md:flex-row md:items-center md:justify-between">
        <ul className="text-gray-100 md:flex md:flex-row md:items-center md:gap-24">
          <li className="hover:font-extrabold hover:text-white">
            <NavLink to="/">home</NavLink>
          </li>
          <li
            onMouseEnter={() => setExpandDropDown(!expandDropDown)}
            onMouseLeave={() => setExpandDropDown(false)}
            className="cursor-pointer uppercase"
          >
            <span className="flex flex-row items-center whitespace-nowrap hover:font-extrabold hover:text-white">
              <button className="cursor-pointer pr-1 uppercase">
                game type
              </button>
              {expandDropDown ? <BsCaretUpFill /> : <BsCaretDownFill />}
            </span>
            {expandDropDown && <DropDown />}
          </li>
          <li className="hover:font-extrabold hover:text-white">
            <NavLink to="/faq">faq</NavLink>
          </li>
        </ul>

        <div className="flex space-x-6">
          {props.currentUser?.displayName ? (
            <button
              onClick={props.logOut}
              className=" uppercase text-gray-100 hover:font-extrabold hover:text-white md:inline-block"
            >
              {props.currentUser.displayName} (Sign Out)
            </button>
          ) : (
            <>
              <button
                onClick={props.toggleSignInModal}
                className="whitespace-nowrap uppercase text-gray-100 hover:font-extrabold hover:text-white md:inline-block"
              >
                Sign In
              </button>

              <button
                onClick={props.toggleModal}
                className="hidden uppercase text-gray-100 hover:font-extrabold hover:text-white md:inline-block"
              >
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
