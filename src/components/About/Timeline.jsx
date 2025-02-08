import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { 
  FaBuilding, 
  FaIndustry, 
  FaChartLine, 
  FaSyncAlt,
  FaCogs,
  FaBolt,
  FaWarehouse,
  FaLeaf,
  FaMicroscope,
  FaStar,
  FaArrowCircleUp
} from 'react-icons/fa';

const Timeline = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const getIcon = (iconType) => {
    const icons = {
      building: FaBuilding,
      industry: FaIndustry,
      chart: FaChartLine,
      sync: FaSyncAlt,
      cogs: FaCogs,
      bolt: FaBolt,
      warehouse: FaWarehouse,
      leaf: FaLeaf,
      microscope: FaMicroscope,
      star: FaStar
    };
    const IconComponent = icons[iconType];
    return IconComponent ? <IconComponent className="w-4 h-4 text-indigo-600" /> : null;
  };

  const milestones = [
    {
      year: "1992",
      title: "Company Incorporation",
      description: "Techno Thermal Treaters Pvt. Ltd. was incorporated in Delhi, marking the beginning of its journey in the heat treatment industry.",
      iconType: "building",
      category: "Founding"
    },
    {
      year: "1993",
      title: "Commercial Operations Begin",
      description: "Started operations with the first Gas Carburizing Furnace, setting the foundation for future growth.",
      iconType: "industry",
      category: "Operations"
    },
    {
      year: "1998",
      title: "Expansion of Capacity",
      description: "Added a second Gas Carburizing Line to meet increasing industry demand.",
      iconType: "chart",
      category: "Growth"
    },
    {
      year: "2004",
      title: "Scaling Up",
      description: "Commissioned a third Gas Carburizing Line, reinforcing the company's growth trajectory.",
      iconType: "sync",
      category: "Growth"
    },
    {
      year: "2007",
      title: "Diversification into SQF",
      description: "Launched the Specialty Quench & Temper Furnace (SQF) Division at Bhiwadi Unit II, diversifying service offerings.",
      iconType: "cogs",
      category: "Innovation"
    },
    {
      year: "2010",
      title: "Enhanced Production",
      description: "Expanded SQF capabilities with the addition of a second SQF Line at Bhiwadi.",
      iconType: "bolt",
      category: "Growth"
    },
    {
      year: "2015",
      title: "Further Expansion",
      description: "Commissioned a third SQF Line at Bhiwadi to enhance production capacity.",
      iconType: "warehouse",
      category: "Growth"
    },
    {
      year: "2021",
      title: "TTPL Goes Green",
      description: "Implemented Solar Power Generation Modules at Bhiwadi, taking a step toward sustainable energy usage.",
      iconType: "leaf",
      category: "Sustainability"
    },
    {
      year: "2022",
      title: "Advanced Technology Adoption",
      description: "Set up and commenced commercial operations for Gas Nitriding Equipment, offering advanced heat treatment solutions.",
      iconType: "microscope",
      category: "Innovation"
    },
    {
      year: "2024",
      title: "New Greenfield Expansion",
      description: "Established Unit III at Khushkhera, further strengthening TTPL's market presence and production capacity.",
      iconType: "star",
      category: "Growth"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative min-h-screen my-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="text-center mb-16"
          style={{ opacity }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Journey Through Time
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our history of innovation, growth, and commitment to excellence in heat treatment solutions.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 w-0.5 bg-gradient-to-b from-indigo-400 to-indigo-600"
          />

          <div className="flex flex-col space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    ease: [0.21, 0.45, 0.15, 1.2]
                  }
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  className="absolute left-3 md:left-1/2 z-20 transform -translate-x-1/2"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-indigo-500 shadow-lg flex items-center justify-center">
                    {getIcon(milestone.iconType)}
                  </div>
                </motion.div>

                <motion.div
                  className={`
                    ml-16 md:ml-0 
                    md:flex md:flex-row md:items-start 
                    ${index % 2 === 0 ? "md:justify-end" : ""}
                  `}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`
                      w-full 
                      md:w-5/12
                      p-6 
                      rounded-xl
                      bg-white
                      shadow-lg
                      border border-gray-100
                      hover:shadow-xl
                      transition-all 
                      duration-300
                      ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}
                      relative
                      z-10
                    `}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-indigo-600">
                        {milestone.year}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-600">
                        {milestone.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        className="fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-200"
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
          scale: scrollYProgress.get() > 0.1 ? 1 : 0.8
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowCircleUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default Timeline;