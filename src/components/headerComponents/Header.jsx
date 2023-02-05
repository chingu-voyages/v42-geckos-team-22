import React, { useState } from "react";
import MobileNav from "./MobileNav";
import { DropDown } from "./DropDown";
import { NavLink, Link } from "react-router-dom";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { RiHome2Fill } from "react-icons/ri";
import { CgClose, CgMenu } from "react-icons/cg";
import EmailModal from "../modalComponents/EmailModal";
import NameModal from "../modalComponents/NameModal";
import PasswordModal from "../modalComponents/PasswordModal";
import SuccessModal from "../modalComponents/SuccessModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/headerSlice";

function Header() {
  const [expandDropDown, setExpandDropDown] = useState(false);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.header);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(0);

  function toggleModal() {
    setShowModal((prevModalState) => !prevModalState);
  }
  function handleBackClick() {
    setPage((prevPage) => prevPage - 1);
  }
  function handleForwardClick() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <header className="body-font z-50 h-24  bg-turquoise text-xl font-bold text-white md:border-t-2 md:border-b-4 md:border-t-black md:border-b-black md:bg-bg_nav">
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

      {isOpen && <MobileNav toggleModal={toggleModal} />}

      {page === 0 && (
        <NameModal
          showModal={showModal}
          toggleModal={toggleModal}
          handleForwardClick={handleForwardClick}
        />
      )}
      {page === 1 && (
        <EmailModal
          showModal={showModal}
          toggleModal={toggleModal}
          handleBackClick={handleBackClick}
          handleForwardClick={handleForwardClick}
        />
      )}
      {page === 2 && (
        <PasswordModal
          showModal={showModal}
          toggleModal={toggleModal}
          handleBackClick={handleBackClick}
          handleForwardClick={handleForwardClick}
        />
      )}
      {page === 3 && (
        <SuccessModal showModal={showModal} toggleModal={toggleModal} />
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
            <span className="flex flex-row items-center hover:font-extrabold hover:text-white">
              <Link className="pr-1" to="/game">
                game type
              </Link>
              {expandDropDown ? <BsCaretUpFill /> : <BsCaretDownFill />}
            </span>
            {expandDropDown && <DropDown />}
          </li>
          <li className="hover:font-extrabold hover:text-white">
            <NavLink to="/faq">faq</NavLink>
          </li>
        </ul>
        <button
          onClick={toggleModal}
          className="hidden uppercase text-gray-100 hover:font-extrabold hover:text-white md:inline-block"
        >
          register
        </button>
      </nav>
    </header>
  );
}

export default Header;