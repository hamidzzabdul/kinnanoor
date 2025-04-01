import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Menu } from "lucide-react";
const Navbar = () => {
  return (
    <div className="w-full h-[5rem] overflow-hidden border-b border-gray-300 sticky top-0 z-50 bg-white">
      <div className="w-[90%] mx-auto h-full flex justify-between items-center ">
        <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center over">
          <Image
            src={logo}
            alt="logo.png"
            className="w-full h-full object-contain"
          />
        </div>
        <ul className="hidden lg:flex gap-8 items-center -ml-14">
          <li className="text-gray-600 text-base">
            <Link
              href="/"
              className="hover:text-Secondary transition duration-300"
            >
              Home
            </Link>
          </li>
          <li className="text-gray-600 text-base">
            <Link
              href="/about"
              className="hover:text-Secondary transition duration-300"
            >
              About
            </Link>
          </li>
          <li className="text-gray-600 text-base">
            <Link
              href="/projects"
              className="hover:text-Secondary transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li className="text-gray-600 text-base">
            <Link
              href="/gallery"
              className="hover:text-Secondary transition duration-300"
            >
              Gallery
            </Link>
          </li>
        </ul>
        <button className="p-3 rounded-md hidden md:flex bg-Secondary cursor-pointer border-none text-sm text-white">
          Contact us
        </button>
        <Menu className="w-6 h-6 text-gray-600 md:hidden flex" />
      </div>
    </div>
  );
};

export default Navbar;
