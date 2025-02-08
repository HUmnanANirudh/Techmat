import Experience from "../../assets/Experience.webp";
import {motion} from "motion/react"
const HomeAbout = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:gap-8 lg:px-12 items-center my-10 lg:mt-10 w-full">
      <motion.div
      initial={{opacity:0,x:-20}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
      transition={{duration:1,ease:"easeInOut"}}
        className="relative flex justify-center items-center w-full md:w-1/3 px-4 sm:px-6 md:px-0">
        <img
          src={Experience}
          className="object-cover object-center w-full h-64 max-w-[500px] p-2"
          alt="Main Image"
        />
        <div className="absolute bottom-6 left-30 hover:scale-110 transition-all translate-y-2 duration-200 ease-in-out bg-gray-900 text-white py-2 px-4 cursor-none border-2 border-purple-400 rounded-tr-2xl">
          Years of experience
        </div>
      </motion.div>
      <motion.div
      initial={{opacity:0,x:20}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
      transition={{duration:1,ease:"easeInOut"}} 
        className="flex flex-col justify-center items-start gap-8 md:items-start mt-2 pb-8 w-full md:w-2/3 px-4 sm:px-6 md:px-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
          Provider of Commercial Atmospheric Heat Treatment Services
        </h1>
        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center md:items-start ">
          <p className="text-base md:text-lg lg:text-xl text-justify md:text-left px-4 md:px-0">
            We are India's leading provider of commercial atmospheric heat
            treatment solutions, catering to diverse industries across the
            nation. With a strong pan-India presence, our state-of-the-art
            plants are strategically located near major automotive and
            non-automotive component manufacturing hubs. This ensures seamless
            service, enhanced efficiency, and reliable support for our valued
            customers.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default HomeAbout;
