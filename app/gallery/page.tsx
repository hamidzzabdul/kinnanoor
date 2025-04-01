import BreadCrumbs from "@/components/breadcrumb";
import Gallery from "@/components/Gallery";
import Join from "@/components/Join";

const page = () => {
  return (
    <>
      <BreadCrumbs title="Gallery" />
      <div className="w--full flex justify-center items-center flex-col mt-20 gap-15 ">
        <Gallery />
        <Join />
      </div>
    </>
  );
};

export default page;
