import Card1 from "../cards/Cards";
import { motion } from "motion/react";
const Diverse = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  return (
    <div className="flex flex-col items-center justify-center my-0 md:my-10  w-full">
      <div className="flex flex-col justify-center items-center md:items-start gap-6 px-6 text-black w-full">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left px-4 md:px-4 lg:px-10"
        >
          Diverse Range
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-base sm:text-lg md:text-xl l text-justify md:text-left px-2 md:px-4 lg:px-10 md:pr-32"
        >
          We have assembled a specialized team of metallurgists at each site to
          guarantee that our clients receive top-quality service with the
          fastest turnaround times. This commitment has contributed to our
          clients' satisfaction and success from the very beginning.
        </motion.p>
      </div>
      <div className="flex justify-center items-center px-6 md:px-0 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4  px-1 md:px-8 py-12 w-full"
        >
          <motion.div variants={cardVariants}>
            <Card1
              img={
                "https://www.unithermfurnaces.com/frontend/assets/images/solution1.webp"
              }
              text={"Complete Heat Treatment Solutions"}
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card1
              img={
                "https://www.unithermfurnaces.com/frontend/assets/images/Carburizing-IMG-FIGMA280X385.webp"
              }
              text={"Carburizing"}
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card1
              img={
                "https://www.unithermfurnaces.com/frontend/assets/images/Carbonitriding-IMG285X380.webp"
              }
              text={"Carbonitriding"}
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card1
              img={
                "https://www.unithermfurnaces.com/frontend/assets/images/Gas-NitridingIMG-FIGMA280X385.webp"
              }
              text={"Gas Nitriding / Ox-Nitriding"}
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card1
              img={
                "https://www.unithermfurnaces.com/frontend/assets/images/Gas-NitrocarburizingIMG-FIGMA280X385.webp"
              }
              text={"Gas Nitrocarburizing / Ox-Nitriding"}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default Diverse;
