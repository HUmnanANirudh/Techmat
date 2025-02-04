import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Timeline = () => {
  const ref = useRef(null);
  const [scrollReady, setScrollReady] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setScrollReady(true);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "105%"]);

  const milestones = [
    {
      year: "1992",
      title: "Company Incorporation",
      description:
        "Techno Thermal Treaters Pvt. Ltd. was incorporated in Delhi, marking the beginning of its journey in the heat treatment industry.",
    },
    {
      year: "1993",
      title: "Commercial Operations Begin",
      description:
        "Started operations with the first Gas Carburizing Furnace, setting the foundation for future growth.",
    },
    {
      year: "1998",
      title: "Expansion of Capacity",
      description:
        "Added a second Gas Carburizing Line to meet increasing industry demand.",
    },
    {
      year: "2004",
      title: "Scaling Up",
      description:
        "Commissioned a third Gas Carburizing Line, reinforcing the company's growth trajectory.",
    },
    {
      year: "2007",
      title: "Diversification into SQF",
      description:
        "Launched the **Specialty Quench & Temper Furnace (SQF) Division** at Bhiwadi Unit II, diversifying service offerings.",
    },
    {
      year: "2010",
      title: "Enhanced Production",
      description:
        "Expanded SQF capabilities with the addition of a second **SQF Line** at Bhiwadi.",
    },
    {
      year: "2015",
      title: "Further Expansion",
      description:
        "Commissioned a third **SQF Line** at Bhiwadi to enhance production capacity.",
    },
    {
      year: "2021",
      title: "TTPL Goes Green",
      description:
        "Implemented **Solar Power Generation Modules** at Bhiwadi, taking a step toward sustainable energy usage.",
    },
    {
      year: "2022",
      title: "Advanced Technology Adoption",
      description:
        "Set up and commenced **commercial operations for Gas Nitriding Equipment**, offering advanced heat treatment solutions.",
    },
    {
      year: "2024",
      title: "New Greenfield Expansion",
      description:
        "Established **Unit III at Khushkhera**, further strengthening TTPL's market presence and production capacity.",
    },
  ];

  return (
    <div ref={ref} className="container relative mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Journey</h1>
      <div className="relative my-20">
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 md:left-1/2 w-1 py-10 bg-blue-300"
        />

        <div className="flex flex-col space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <motion.div
                className="absolute left-3 md:left-1/2 z-20 transform -translate-x-1/2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white" />
              </motion.div>
              <motion.div
                className="absolute top-2 left-4 md:left-1/2 h-0.5 bg-blue-300 w-8"
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                transition={{ duration: 0.3, delay: 0.3 }}
                style={{
                  transform: "translateX(1rem)",
                }}
              />
              <motion.div
                className="ml-16 md:ml-0 md:flex md:flex-row md:items-start"
                initial={{
                  opacity: 0,
                  x: -50,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <div
                  className={`
                  w-full 
                  md:w-2/5 
                  p-6 
                  rounded-lg 
                  shadow-md 
                  bg-gray-900 
                  border 
                  border-gray-700 
                  text-start
                  ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                  hover:bg-gray-800 
                  transition-colors 
                  duration-300
                `}
                >
                  <time className="mb-2 text-base font-bold text-gray-500">
                    {milestone.year}
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-base font-normal text-gray-400 text-balance">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
