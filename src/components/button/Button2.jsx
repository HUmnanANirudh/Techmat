import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
const Button2 = () => {
  return (
    <div className="flex items-center justify-center font-bold gap-2 text-white border-2 border-white px-4 py-2 cursor-pointer hover:bg-white hover:text-blue-800 transition-all duration-700 ease-in-out">
      <span className="font-bold whitespace-nowrap">Contact Us</span>
      <span>|</span>
      <motion.span
        animate={{ x: [0, 6, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {" "}
        <FaArrowRight className="mt-1" />
      </motion.span>
    </div>
  );
};
export default Button2;