import Image from "next/image";
import Link from "next/link";
import borana from "@/public/borana.jpg";
const Help = () => {
  return (
    <div className="w-full h-full mt-40">
      <div className="w-full h-[200px] bg-primary font-primary relative">
        <div
          className="w-[90%] md:w-[65%] xl:w-[60%] h-[200px] absolute -top-[68%] left-[50%] translate-x-[-50%] "
          style={{
            backgroundImage: `url(${borana.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          <div className="w-full h-full py-10 px-10 flex flex-col gap-2 ">
            <p className="text-white font-semibold font-primary text-lg md:text-2xl lg:text-3xl w-full md:w-3/4 lg:w-1/2 z-20">
              &quot;Service to others is the rent you pay for your room here on
              earth.&quot;
            </p>
            <p className="text-sm text-white  z-20">Muhamad Ali</p>
          </div>
        </div>

        <div className="w-[90%] md:w-[80%] lg:w-[60%] h-1/2 flex flex-col md:flex-row justify-between items-center mx-auto absolute bottom-5 left-[50%] translate-x-[-50%]">
          <div className="flex gap-2 items-center">
            <Image
              src="/volunteer.png"
              alt="volunteer"
              width={70}
              height={70}
              className="md:w-[70px] w-[50px]"
            />
            <div className="flex flex-col">
              <h3 className="text-sm md:text-lg font-semibold text-white">
                Make a Difference today!
              </h3>
              <p className="text-lg md:text-2xl font-bold text-Secondary ">
                Become a Volunteer
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-white font-semibold bg-Secondary py-2 px-4 lg:py-3 lg:px-6 text-sm lg:text-base cursor-pointer"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
