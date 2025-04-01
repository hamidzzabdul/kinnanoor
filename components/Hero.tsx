"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "@/public/assets/image8.jpg";
import hero2 from "@/public/assets/image6.jpg";
import hero3 from "@/public/assets/image2.jpg";
import Link from "next/link";

const slides = [
  {
    image: hero1,
    span: "Education for All",
    title: "Reviving a Forgotten Madrasa",
    description:
      "We are restoring and transforming a long-neglected madrasa into an integrated school, ensuring quality education for the children of Kinna.",
  },
  {
    image: hero2,
    span: "Community Development",
    title: "Empowering the People of Isiolo",
    description:
      "Through education, leadership, and economic empowerment, we are fostering a self-sufficient and thriving community.",
  },
  {
    image: hero3,
    span: "Join the Movement",
    title: "Together, We Can Make a Difference",
    description:
      "We are seeking partnerships and funding to expand our initiatives and create lasting change in Kinna. Be part of the transformation.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        className="w-full h-[500px]"
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: currentIndex % 2 === 0 ? 1.1 : 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image.src})` }}
            ></motion.div>
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="w-[70%] lg:w-[60%] absolute left-[12%] top-[30%] flex flex-col gap-3 ">
              <span className="text-base sm:text-xl font-primary text-white font-semibold">
                {slide.span}
              </span>
              <h1 className="text-3xl sm:text-4xl font-primary font-semibold text-white">
                {slide.title}
              </h1>
              <p className="w-full hidden sm:flex lg:w-[70%] text-white text-lg font-primary leading-[1.6rem] font-semibold">
                {slide.description}
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="py-2 px-3 md:py-3 md:px-4 font-primary rounded-md bg-primary text-sm md:text-base text-white cursor-pointer"
                >
                  Contact us
                </Link>
                <Link
                  href="/projects"
                  className="hidden sm:flex py-2 px-3 md:py-3 md:px-4 font-primary rounded-md bg-Secondary text-sm md:text-base text-white cursor-pointer"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <button className="custom-prev absolute left-4 top-[65%] -translate-y-1/2 z-10 bg-black text-white py-3 px-4 cursor-pointer rounded-lg transition">
        ❮
      </button>
      <button className="custom-next absolute right-4 top-[65%] -translate-y-1/2 z-10 bg-black  text-gray-100 hover:text-white py-3 px-4 cursor-pointer rounded-lg transition">
        ❯
      </button> */}
    </>
  );
};

export default Hero;
