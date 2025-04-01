import Image from "next/image";
import Link from "next/link";

import project1 from "@/app/assets/project1.jpg";
import project2 from "@/app/assets/project2.jpg";
import project3 from "@/app/assets/project3.jpg";

const data = [
  {
    image: project1,
    title: "Children to get Education",
    description:
      "Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
  },
  {
    image: project2,
    title: "Electricity and Lighting",
    description:
      "Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
  },
  {
    image: project3,
    title: "Water and Sanitation",
    description:
      "Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.",
  },
];

const Projects = () => {
  return (
    <div className="w-[85%] lg:h-[400px] flex flex-col gap-8">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2 className="text-3xl font-primary font-semibold text-black">
          Our <span className="text-Secondary">Projects</span>
        </h2>
        <Image
          src={"/underline.webp"}
          alt="underline"
          className="w-[150px]"
          width={150}
          height={150}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project, index) => (
          <div
            className="w-full h-[350px] rounded-md flex flex-col gap-3"
            key={index}
          >
            <div className="w-full h-[60%] bg-gray-300">
              <Image
                src={project.image}
                alt="project1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex h-[30%] flex-col gap-1 px-3 ">
              <h3 className="text-base font-semibold">{project.title}</h3>
              <p className=" w-[95%] text-sm">{project.description}</p>
              <Link
                href="/projects/1"
                className="text-xs text-Secondary font-semibold hover:text-primary transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
