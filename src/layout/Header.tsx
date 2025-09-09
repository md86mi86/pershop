import React, { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router";
import NavItems from "./NavItems";
import { motion } from "framer-motion";
import { BiMoon, BiSun } from "react-icons/bi";

const Header: React.FC = () => {
  const loc = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] =
    useState<boolean>(() => {
      const theme = localStorage.getItem("theme");
      return theme === "dark" ? true : false;
    }) || false;
  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  useEffect(() => {
    const html: HTMLHtmlElement | null = document.querySelector("html");
    isDarkMode
      ? html?.setAttribute("data-theme", "dark")
      : html?.setAttribute("data-theme", "light");

    isDarkMode
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  }),
    [isDarkMode];
  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        className="w-full p-4 flex justify-between items-center z-10 dark:bg-black/90"
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer bg-custom-600 text-white p-1 rounded-full flex justify-center items-center hover:text-custom-100 hover:bg-custom-500 transition-all md:hidden dark:bg-custom-600 dark:text-black dark:hover:bg-custom-700 dark:hover:text-black"
        >
          <MdMenu className="size-8" />
        </button>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed bottom-4 right-4 text-3xl bg-custom-200/70 backdrop-blur-lg text-custom-700 dark:bg-custom-950 dark:text-custom-200 p-2 rounded-full cursor-pointer z-10 md:text-4xl lg:text-5xl"
        >
          {isDarkMode ? <BiMoon /> : <BiSun />}
        </button>
        <div className="hidden md:flex justify-center items-center gap-4 lg:gap-8">
          {NavItems.map((NavItem, index) => (
            <Link to={NavItem.link} key={index}>
              <span
                className={`${
                  loc.pathname === NavItem.link &&
                  "bg-custom-500 text-white rounded-md p-1 transition-all"
                } text-custom-700 flex justify-center items-center gap-1 text-md lg:text-xl`}
              >
                {NavItem.name} {NavItem.icon}
              </span>
            </Link>
          ))}
        </div>
        <Link to="/">
          <span className="text-custom-600 font-bold text-xl md:text-2xl lg:text-3xl">
            پرشاپ
          </span>
        </Link>
      </motion.header>
      <motion.div
        initial={{ x: "100%" }}
        transition={{ duration: 0.2 }}
        animate={isMenuOpen ? { x: "0%" } : { x: "100%" }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="w-full h-screen bg-black/15 backdrop-blur-xs top-0 right-0 fixed flex justify-center items-center md:hidden z-[9999]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-2/3 h-screen bg-gray-100 dark:bg-gray-950 top-0 right-0 fixed"
        >
          <div className="flex flex-col justify-center items-center gap-1 p-2">
            {NavItems.map((navItem, index) => (
              <Link className="w-full" key={index} to={navItem.link}>
                <div
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    loc.pathname === navItem.link &&
                    "bg-custom-600 border-custom-200 hover:bg-custom-700 hover:text-black dark:hover:text-white"
                  } bg-gray-50 dark:bg-gray-900 w-full p-2 rounded-md flex justify-between items-center gap-2 text-custom-700 dark:text-custom-300 transition-all hover:bg-custom-50 dark:hover:bg-custom-950 border-2`}
                >
                  {navItem.name} <span className="text-xl">{navItem.icon}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
