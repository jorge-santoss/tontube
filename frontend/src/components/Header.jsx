import { Link } from "react-router";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

import logo from "../assets/logo.png";
import darkLogo from "../assets/logo-dark.png";
import avatar from "../assets/avatar.png";
import { useState } from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      <div className="flex h-5 items-center">
        <div
          className="flex md:hidden md:mr-6 mr-4 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#8888]/0.6"
          onClick={() => {}}
        >
          {true ? (
            <CgClose className="dark:text-white text-black text-xl" />
          ) : (
            <SlMenu className="dark:text-white text-black text-xl" />
          )}
        </div>
        <Link to="/" className="flex h-5 items-center mt-4">
          <img className="dark:hidden h-8" src={logo} alt="Youtube" />
          <img className="hidden dark:block h-8" src={darkLogo} alt="Youtube" />
        </Link>
      </div>

      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/0.6">
            <RiVideoAddLine className="text-black dark:text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 mx-1">
          <img src={avatar} className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}
