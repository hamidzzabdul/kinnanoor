import Image from "next/image";
import Link from "next/link";
import hands from "@/public/hands.jpg";

const Join = () => {
  return (
    <div className="w-full md:h-[400px] pb-6 md:pb-0 bg-primary flex justify-center items-center">
      <div className="w-[100%] flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-[45%] text-center flex justify-center items-center flex-col">
          <h1 className="font-bold text-white font-primary text-[3rem] md:text-[3.8rem]">
            Join Us
          </h1>
          <p className="text-white font-semibold text-[1rem] md:text-[1.3rem] w-full md:w-1/2 lg:w-[45%] font-primary">
            In Empowering The People Of Isiolo
          </p>

          <Link
            href={"/contact"}
            className="font-semibold text-white font-primary text-lg md:text-xl mt-5 md:mt-10 bg-Secondary py-2 md:py-3 px-5 md:px-7 "
          >
            Contact us
          </Link>
        </div>
        <div className="w-full md:w-[55%] overflow-hidden">
          <Image
            src={hands}
            alt=""
            className="w-full h-full md:h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
