import type { navType } from "../types/NavItem";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { RiSearchFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

const NavItems: navType[] = [
  { name: "صفحه اصلی", icon: <IoMdHome />, link: "/" },
  { name: "محصولات", icon: <FaShoppingCart />, link: "/products" },
  { name: "درباره ما", icon: <RiSearchFill />, link: "/about_us" },
  { name: "تماس با ما", icon: <IoCall />, link: "/contact_us" },
];
export default NavItems;
