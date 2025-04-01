import About from "@/components/About";
import BreadCrumb from "@/components/breadcrumb";
import Help from "@/components/Help";
import Join from "@/components/Join";
import WhatWeDo from "@/components/WhatWeDo";

const AboutPage = () => {
  return (
    <>
      <BreadCrumb title="About us" />
      <div className="w-full mt-20 flex flex-col gap-28 justify-center items-center">
        <About />
        <Help />
        <WhatWeDo />
        <Join />
      </div>
    </>
  );
};

export default AboutPage;
