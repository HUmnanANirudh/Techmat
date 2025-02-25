import {motion} from "motion/react"
import Img5 from "../../assets/5.webp";
import Img6 from "../../assets/6.webp";
import Img8 from "../../assets/8.webp";
const Mission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white w-full px-4 sm:px-10 md:px-16 lg:px-28 gap-x-8 gap-y-12 mb-16 md:my-20 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{once:true}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center px-4 md:px-0"
      >
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6"
          whileHover={{ scale: 1.05 }}
        >
          Vision
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-base md:text-lg lg:text-xl mb-8 text-justify"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{once:true}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          To be a successful customer-oriented company globally by meeting or exceeding 
          our customer needs and expectations by delivering cost-effective, right-quality, 
          and customer-oriented technology solutions on time.
        </motion.p>

        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6"
          whileHover={{ scale: 1.05 }}
        >
          Our Mission
        </motion.h2>
        <motion.ul 
          className="list-disc list-inside text-gray-600 space-y-2 text-base md:text-lg lg:text-xl text-justify"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{once:true}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <li>Become World Class and Reliable Heat Treatment solutions provider.</li>
          <li>Preferred supplier with all heat treatment solutions.</li>
          <li>Preferred Company for employees to work & providing benefits to stakeholders.</li>
          <li>We will continuously improve key business processes to meet & exceed expectations of all our stakeholders.</li>
        </motion.ul>
      </motion.div>
      <div className="relative flex flex-col sm:flex-col md:flex-row justify-center items-start gap-8">
        <motion.img
          src={Img6}
          className="w-full p-8 sm:p-0 md:h-72 lg:h-80 object-cover rounded-lg md:shadow-2xl sm:border-2 sm:border-blue-200"
          alt="Mission Image"
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{once:true}}
          transition={{ delay: 0.5, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.div 
          className="md:absolute lg:bottom-0 md:bottom-0 lg:right-0 lg:transform lg:translate-y-1/2"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{once:true}}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <motion.img
            src={Img5}
            className="hidden md:block w-full h-64 object-cover rounded-lg shadow-2xl border-2 border-blue-200"
            alt="Vision Image"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

      </div>
    </div>
  );
};


export default Mission;
