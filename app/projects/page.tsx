import BreadCrumb from "@/components/breadcrumb";
import Join from "@/components/Join";
import Projects from "@/components/Projects";

const page = () => {
  return (
    <>
      <BreadCrumb title="Our Projects" />
      <div className="w-full mt-20 flex flex-col gap-28 justify-center items-center">
        <Projects />
        <Join />
      </div>
    </>
  );
};

export default page;
