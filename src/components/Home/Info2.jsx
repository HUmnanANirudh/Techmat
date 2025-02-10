import Mail from "./Mail";
import {motion} from "motion/react"
import Img11 from "../../assets/11.webp";
const Info2 = () => {
  return (
    <div className="flex justify-center items-center mb-10 sm:mb-40 md:mb-80 w-full">
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }} className="relative flex justify-center items-center w-full">
        <img
          src={Img11}
          alt="Background"
          className="w-full h-auto object-cover hidden sm:block"
        />
        <div className="sm:absolute sm:top-1/3 flex justify-center items-center">
          <Mail />
        </div>
      </motion.div>
    </div>
  );
};

export default Info2;
