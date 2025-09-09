import React from "react";
import NavItems from "./NavItems";
import { Link } from "react-router";
import SocialMedia from "./SocialMedia";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-custom-300 dark:bg-custom-950 flex justify-between md:justify-center items-center gap-16 md:gap-8 lg:gap-10 flex-col md:flex-row">
      <div className="text-black dark:text-white flex flex-col justify-center items-center gap-4">
        <span className="font-bold">لینک های مفید</span>
        <div className="flex flex-col justify-center items-center gap-2">
          {NavItems.map((navItem, index) => (
            <Link to={navItem.link} key={index}>
              <span className="text-black hover:underline hover:text-black dark:hover:text-gray-400 dark:text-white">
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-black dark:text-white flex flex-col justify-center items-center gap-4">
        <span className="font-bold">شبکه های اجتماعی</span>
        <div className="flex flex-col justify-center items-center gap-4">
          {SocialMedia.map((social, index) => (
            <Link to={social.link} key={index}>
              <span className="text-black hover:underline hover:text-black dark:hover:text-gray-400 dark:text-white flex justify-center items-center flex-col gap-1">
                {social.icon}
                {social.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-black dark:text-white">
        <p className="">
          سازنده : <b>محمد ملکی</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
