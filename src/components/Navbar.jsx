import React, { useState } from "react";
import clsx from "clsx";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <img src="/logo.png" className="w-10 h-10" alt="logo" />
        <span className="text-blue-800 font-bold">FP-Blog</span>
      </div>
      <div className="block md:hidden">
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          {open ? (
            <FaXmark className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
          {open && (
            <div
              className={clsx(
                "absolute bg-[#CBCBE3] flex flex-col gap-8 justify-center left-0 right-0 items-center w-full h-[calc(100vh-64px)] top-16 opacity-0 animate-fadein",
              )}
            >
              <a href="/">Home</a>
              <a href="/">Trending</a>
              <a href="/">Most Popular</a>
              <a href="/">About</a>
              <a href="/">
                <button className="py-2 px-4 text-white bg-blue-800 rounded-3xl">
                  Login
                </button></a>
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="py-2 px-4 text-white bg-blue-800 rounded-3xl">
            Login
          </button></a>
      </div>
    </div>
  );
};

export default Navbar;
