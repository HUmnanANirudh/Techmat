import { motion } from "motion/react";
import Img8 from "../../assets/8.webp";
const CompanyInfo = () => {
  return (
  <div className="bg-white flex flex-col md:flex-row justify-between items-center w-full gap-12 py-12 px-6 md:py-20 md:px-12 my-20">
  <motion.div 
  initial={{opacity:0,x:-20}}
  whileInView={{opacity:1,x:0}}
  viewport={{once:true}}
  transition={{duration:1,ease:"easeInOut"}}
    className="flex flex-col items-start justify-center gap-6 w-full md:w-1/2 max-w-screen-md">
    <h1 className="text-black text-3xl md:text-4xl font-bold">About Us</h1>
    <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed text-justify">
      At <strong>Techno Thermal Treaters Pvt. Ltd. (TTTPL)</strong>, we are committed to 
      delivering excellence in heat treatment services for the global automotive sector 
      and allied engineering industries. As an <strong>ISO 9001-certified</strong> company, 
      we uphold the highest standards of quality and operational efficiency.
    </p>
    <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed text-justify">
      Founded in <strong>January 1992</strong> by <strong>Mr. D.V. Kalra</strong>, TTTPL embarked 
      on a journey with a clear vision—to provide top-tier commercial heat treatment 
      services in the NCR region, later expanding nationwide. Our adherence to 
      international quality standards, including <strong>ISO 9001</strong> and the 
      <strong> CQI-9 Heat Treatment Global Standard</strong>, reflects our unwavering 
      commitment to precision and reliability.
    </p>
  </motion.div>
  <motion.div
  initial={{opacity:0,x:20}}
  whileInView={{opacity:1,x:0}}
  viewport={{once:true}}
  transition={{duration:1,ease:"easeInOut"}} className="w-full md:w-1/2 flex justify-center">
    <div className="w-80 md:w-96 lg:w-full h-auto">
      <img
        src={Img8}
        alt="Heat treatment equipment"
        className="rounded-lg shadow-xl w-full h-auto object-cover"
      />
    </div>
  </motion.div>
</div>

  );
}

export default CompanyInfo;
