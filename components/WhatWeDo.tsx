import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="w-[85%] h-full flex flex-col gap-8 mb-20">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2 className="text-3xl font-primary font-semibold text-black">
          What we<span className="text-Secondary"> DO</span>
        </h2>
        <Image
          src={"/underline.webp"}
          alt="underline"
          className="w-[150px]"
          width={150}
          height={150}
        />
        <p className="text-sm font-primary text-gray-500 text-center sm:w-3/4 md:w-1/2">
          Driving Positive Change Through Education, Community Empowerment, and
          Sustainable Development
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 ">
        <div className="w-full h-[250px] rounded-lg bg-gray-200 cursor-pointer"></div>
        <div className="w-full h-[250px] rounded-lg bg-gray-200 cursor-pointer"></div>
        <div className="w-full h-[250px] rounded-lg bg-gray-200 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default WhatWeDo;
