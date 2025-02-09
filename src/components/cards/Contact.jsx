import { Link } from "react-router-dom";
import Button2 from "../button/Button2";
import { memo } from "react";
import { motion } from "motion/react";
const scrollToTop = (delay = 500) => {
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, delay);
};
import img1 from "../../assets/4.webp";
import Img16 from "../../assets/16.webp";
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex justify-center my-20"
    >
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
    </motion.div>
  );
};

export default memo(Contact);
