import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
const Button3 = ({ text, onClick, X, isSelected }) => {
  return (
    <motion.button
      onClick={() => onClick(X)}
      className={`flex items-center justify-between gap-3 w-[250px] md:w-[300px] lg:w-[350px] px-4 sm:px-6 py-2 sm:py-3 font-bold border-2 cursor-pointer transition-all duration-300 ease-in-out 
        ${isSelected ? "bg-blue-300 border-blue-300" : "bg-gray-100 hover:bg-gray-200 hover:border-blue-300"} `}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{text}</span>
      <div className="flex justify-center items-center gap-4">
        <span>|</span>
        <motion.span
          animate={{ x: [0, -4, 0] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FaArrowRight className="text-black text-xl mt-1" />
        </motion.span>
      </div>
    </motion.button>
  );
};

export default Button3;