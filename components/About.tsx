import Image from "next/image";
import underline from "@/public/underline.webp";

const About = () => {
  return (
    <div className="w-[85%] h-full flex flex-col gap-6 lg:flex-row lg:gap-0 items-center ">
      <div className="w-full lg:w-1/2 h-full">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-primary font-semibold text-black">
            About Us
          </h2>
          <Image src={underline} alt="underline" className="w-[150px]" />
        </div>
        <div className="flex flex-col gap-4 pt-2">
          <p className="font-primary text-base text-gray-800 w-full lg:w-[95%] leading-[1.5rem] ">
            Kinna Noor Transformative Initiative (KNTI) is a community-based
            organization committed to fostering sustainable development in
            Isiolo. Led by passionate Borana professionals, we work to bridge
            the gap in education, healthcare, and economic empowerment for the
            people of Kinna
          </p>
          <div className="font-primary text-base  w-full lg:w-[90%] leading-[1.4rem] ">
            <span className="font-bold">Mission Statement : </span>
            <span className="text-gray-800">
              To empower communities through education, leadership, and
              sustainable development initiatives.
            </span>
          </div>
          <div className="font-primary text-base w-full lg:w-[90%] leading-[1.4rem] ">
            <span className="font-bold">Vision : </span>
            <span className="text-gray-800">
              A self-sufficient and thriving Kinna, where every child has access
              to quality education and every community member has opportunities
              for growth
            </span>
          </div>
          <button className="w-[150px] bg-primary text-white p-2 rounded-md cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-[350px] overflow-hidden rounded-lg shadow-sm">
        <Image
          src={"/test.jpg"}
          alt="about us image"
          width={500}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
