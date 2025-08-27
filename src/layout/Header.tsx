import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import NavItems from "./NavItems";

const Header: React.FC = () => {
  const loc = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <header className="w-full p-4 flex justify-between items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer bg-indigo-600 text-white p-1 rounded-full flex justify-center items-center hover:text-indigo-600 hover:bg-white transition-all md:hidden"
        >
          <MdMenu className="size-8" />
        </button>
        <div className="hidden md:flex justify-center items-center gap-4 lg:gap-8">
          {NavItems.map((NavItem, index) => (
            <Link to={NavItem.link} key={index}>
              <span className={`${loc.pathname === NavItem.link && "bg-indigo-500 text-white rounded-md p-1 transition-all"} text-indigo-700 flex justify-center items-center gap-1 text-md lg:text-xl`}>
                {NavItem.name} {NavItem.icon}
              </span>
            </Link>
          ))}
        </div>
        <Link to="/">
          <span className="text-indigo-600 font-bold text-xl md:text-2xl lg:text-3xl">
            پرشاپ
          </span>
        </Link>
      </header>
      <motion.div
        initial={{ x: "100%" }}
        transition={{ duration: 1 }}
        animate={isMenuOpen ? { x: "0%" } : { x: "100%" }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="w-full h-screen bg-black/15 backdrop-blur-xs top-0 right-0 fixed flex justify-center items-center md:hidden"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-2/3 h-screen bg-gray-100 top-0 right-0 fixed z-10"
        >
          <div className="flex flex-col justify-center items-center gap-1 p-2">
            {NavItems.map((navItem, index) => (
              <Link className="w-full" key={index} to={navItem.link}>
                <div
                  onClick={() => setIsMenuOpen(false)}
                  className={`${loc.pathname === navItem.link && "bg-indigo-600 text-white border-indigo-200"} bg-gray-50 w-full p-2 rounded-md flex justify-between items-center gap-2 text-indigo-700 transition-all hover:bg-indigo-50 border-2`}
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
