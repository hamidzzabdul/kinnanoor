import Image from "next/image";

import logo from "@/public/logob.png";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full lg:h-[350px] flex flex-col">
      <div className="w-full h-[88%] bg-footer flex items-center justify-center pb-5">
        <div className="flex flex-col  justify-center items-center gap-3">
          <div className="w-[300px] h-[100px]">
            <Image
              src={logo}
              alt="logo"
              className="w-2/3 mx-auto md:w-full h-full object-cover"
            />
          </div>
          <p className="text-center w-3/4 md:w-2/3 text-gray-300 font-primary text-sm md:text-base leading-[1.6rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam,
            id, nesciunt unde natus minus accusamus expedita eaque enim.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={"/"}
              className="border-gray-200 border-2 hover:border-Secondary transition duration-300 cursor-pointer rounded-full p-2 flex justify-center items-center"
            >
              <FaFacebookF className="text-lg text-gray-200" />
            </Link>
            <Link
              href={"/"}
              className="border-gray-200 border-2 hover:border-Secondary transition duration-300 cursor-pointer rounded-full p-2 flex justify-center items-center"
            >
              <FaInstagram className="text-lg text-gray-200" />
            </Link>
            <Link
              href={"/"}
              className="border-gray-200 border-2 hover:border-Secondary transition duration-300 cursor-pointer rounded-full p-2 flex justify-center items-center"
            >
              <FaTiktok className="text-lg text-gray-200" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md::grid-cols-3 lg:grid-cols-4 items-center justify-center pt-4 gap-2">
            <Link
              href={"/"}
              className="border-2 border-gray-200 rounded-xl text-white px-3 py-2 text-sm cursor-pointer hover:border-Secondary transition duration-300 text-center"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="border-2 border-gray-200 rounded-xl text-white px-3 py-2 text-sm cursor-pointer hover:border-Secondary transition duration-300 text-center"
            >
              About
            </Link>
            <Link
              href={"/projects"}
              className="border-2 border-gray-200 rounded-xl text-white px-3 py-2 text-sm cursor-pointer hover:border-Secondary transition duration-300 text-center"
            >
              Projects
            </Link>
            <Link
              href={"/contact"}
              className="border-2 border-gray-200 rounded-xl text-white px-3 py-2 text-sm cursor-pointer hover:border-Secondary transition duration-300 text-center"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[15%] bg-footer-secondary flex justify-center items-center ">
        <div className="w-[80%] mx-auto flex justify-between items-center">
          <p className="text-white font-primary text-xs md:text-sm">
            © 2025 Made by Abdihamid Abdirahim
          </p>

          <p className="text-white font-primary text-xs">
            Terms and Conditions apply
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
