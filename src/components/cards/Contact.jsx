import { Link } from "react-router-dom";
import Button2 from "../button/Button2";
import { memo } from "react";
const scrollToTop = (delay = 500) => {
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, delay);
};
import img1 from "../../assets/4.webp";
const Contact = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="relative w-full max-w-screen-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
        <img
          src={img1}
          loading="lazy"
          className="w-full h-60 object-cover sm:h-80 md:h-60 lg:h-72"
          alt="Heat Treatment Solutions"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 z-20 sm:px-8 md:px-12 lg:px-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Delivering top-notch heat treatment <br /> solutions
          </h1>

          <Link to="/contact" onClick={() => scrollToTop()}>
            <Button2 text={"Contact us"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
