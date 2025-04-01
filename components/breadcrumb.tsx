// import banner from "@/app/assets/breadcrumb.png";
import lines from "@/app/assets/lines.png";
import Image from "next/image";
import Link from "next/link";

interface BreadCrumbsProps {
  title: string;
}

const BreadCrumbs = ({ title }: BreadCrumbsProps) => {
  return (
    <div
      className="w-full h-[270px] bg-cover bg-no-repeat relative bg-gray-800"
      // style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <Image
        src={lines}
        alt=""
        className="w-full h-[250px] object-contain absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      />
      <div className="w-[80%] mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1 flex flex-col justify-center items-center gap-2">
        <h1 className="text-white text-3xl font-semibold font-primary">
          {title}
        </h1>
        <div className="flex items-center gap-2 text-gray-300 text-sm font-semibold font-primary">
          <span className="px-2 text-gray-300">
            <Link
              href="/"
              className="hover:text-white  hover:border-b-2 hover:border-white transition duration-300"
            >
              Home
            </Link>
          </span>
          <span className="text-gray-300 text-base">-</span>
          <span className="text-white ">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
