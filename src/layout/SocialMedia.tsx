import type { socialMedia } from "../types/SocialMedia";
import {
  FaTelegram,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const SocialMedia: socialMedia[] = [
  { name: "telegram", link: "https://t.me/md86mi86", icon: <FaTelegram /> },
  {
    name: "instagram",
    link: "https://instagram.com/md86mi86",
    icon: <FaInstagram />,
  },
  { name: "github", link: "https://github.com/md86mi86", icon: <FaGithub /> },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/md86mi86",
    icon: <FaLinkedin />,
  },
  {
    name: "x (twitter)",
    link: "https://x.com/in/md86mi86",
    icon: <FaTwitter />,
  },
];

export default SocialMedia;
