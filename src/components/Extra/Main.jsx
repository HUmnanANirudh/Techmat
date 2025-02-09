import Img12 from "../../assets/12.webp";
import Img10 from "../../assets/10.webp";
import Img7 from "../../assets/7.webp";
import { motion } from "motion/react";

export const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 bg-gray-50 p-6 md:p-20 my-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full md:w-1/3"
        >
          <img
            src={Img12}
            className="hidden md:block md:w-full md:h-full object-cover"
            alt="Metallurgy Lab"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex w-full md:w-2/3 flex-col justify-center items-start gap-4 px-4 md:px-20 space-y-4"
        >
          <h1 className="text-2xl md:text-4xl font-bold">Metallurgy Lab</h1>
          <p className="text-base md:text-lg text-justify">
            At TechnoThermalTreaters Pvt. Ltd., quality assurance is our top
            priority. Our advanced Metallurgy Labs, located across our three
            state-of-the-art facilities in Bhiwadi and Khushkhera, ensure
            excellence in heat treatment processes. Equipped with cutting-edge
            testing technology, our labs meticulously monitor and measure
            metallurgical parameters to meet the highest industry standards and
            precise customer specifications.
          </p>
          <p className="text-base md:text-lg text-justify">
            Our specialized QC labs are staffed with highly skilled and
            experienced metallurgists, ensuring that client requirements are met
            with exceptional precision. With a 100% accuracy rate, our labs
            offer a comprehensive range of services, including microstructure
            inspection and mechanical property analysis, guaranteeing the
            highest standards of quality and reliability.
          </p>
          <img src={Img7} className="w-full md:w-auto" alt="Lab Equipment" />
        </motion.div>
      </div>
    </div>
  );
};
