import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const PrimaryNav = () => {
  return (
    <div className="w-full h-10 bg-primary hidden sm:flex justify-center items-center">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="hidden md:flex gap-4 center">
          <FaFacebookF className="text-white text-base" />
          <FaInstagram className="text-white text-base" />
          <FaTiktok className="text-white text-base" />
        </div>

        <div className="flex items-center gap-6">
          <p className="text-white font-semibold text-sm  font-primary">
            Contact us on
            <span className="text-Secondary "> +254-723-456-789</span>
          </p>

          <p className="flex items-center gap-3 text-white text-sm font-primary font-semibold">
            info@kinnanoor.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNav;
