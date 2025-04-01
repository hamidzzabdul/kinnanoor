import Image from "next/image";
import image1 from "@/app/assets/image1.jpg";
import image2 from "@/app/assets/image2.jpg";
import image3 from "@/app/assets/image3.jpg";
import image4 from "@/app/assets/image4.jpg";
import image5 from "@/app/assets/image5.jpg";
import image6 from "@/app/assets/image6.jpg";
import image7 from "@/app/assets/image7.jpg";
import image8 from "@/app/assets/image8.jpg";
const data = [
  {
    id: "1",
    img: image1,
  },
  {
    id: "2",
    img: image2,
  },
  {
    id: "3",
    img: image3,
  },
  {
    id: "4",
    img: image4,
  },
  {
    id: "5",
    img: image5,
  },
  {
    id: "6",
    img: image6,
  },
  {
    id: "7",
    img: image7,
  },
  {
    id: "8",
    img: image8,
  },
];

const Gallery = () => {
  return (
    <div className="w-[85%] h-full flex flex-col gap-8">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2 className="text-3xl font-primary font-semibold text-black">
          Our <span className="text-Secondary">Gallery</span>
        </h2>
        <Image
          src={"/underline.webp"}
          alt="underline"
          className="w-[150px]"
          width={150}
          height={150}
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-hidden">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full h-[300px] rounded-md overflow-hidden bg-gray-300 "
          >
            <Image
              src={item.img}
              alt="gallery"
              className="object-cover w-full h-full cursor-pointer transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
