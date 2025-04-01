import BreadCrumb from "@/components/breadcrumb";
import ContactForm from "@/components/ContactForm";
import Join from "@/components/Join";
import Image from "next/image";

const ContactUsPage = () => {
  return (
    <>
      <BreadCrumb title="Contact Us" />
      <div className="w-full mt-20 flex flex-col gap-28 justify-center items-center">
        <div className="w-[90%]">
          <div className="flex flex-col gap-3 items-center justify-center">
            <h2 className="text-3xl font-primary font-semibold text-black">
              Drop us a <span className="text-Secondary">Line</span>
            </h2>
            <Image
              src={"/underline.webp"}
              alt="underline"
              className="w-[200px]"
              width={200}
              height={200}
            />
            <p className="text-sm font-primary font-semibold text-gray-700 text-center">
              Want to reach out? We’d love to hear from you!
            </p>
          </div>
          <ContactForm />
        </div>
        <Join />
      </div>
    </>
  );
};

export default ContactUsPage;
