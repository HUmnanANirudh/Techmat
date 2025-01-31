import { motion } from "motion/react";
const Timeline = () => {
  const milestones = [
    {
      year: '1992',
      title: 'Company Incorporation',
      description: 'Techno Thermal Treaters Pvt. Ltd. was incorporated in Delhi, marking the beginning of its journey in the heat treatment industry.',
    },
    {
      year: '1993', 
      title: 'Commercial Operations Begin',
      description: 'Started operations with the first Gas Carburizing Furnace, setting the foundation for future growth.',
    },
    {
      year: '1998',
      title: 'Expansion of Capacity',
      description: 'Added a second Gas Carburizing Line to meet increasing industry demand.',
    },
    {
      year: '2004',
      title: 'Scaling Up',
      description: 'Commissioned a third Gas Carburizing Line, reinforcing the company’s growth trajectory.',
    },
    {
      year: '2007',
      title: 'Diversification into SQF',
      description: 'Launched the **Specialty Quench & Temper Furnace (SQF) Division** at Bhiwadi Unit II, diversifying service offerings.',
    },
    {
      year: '2010',
      title: 'Enhanced Production',
      description: 'Expanded SQF capabilities with the addition of a second **SQF Line** at Bhiwadi.',
    },
    {
      year: '2015',
      title: 'Further Expansion',
      description: 'Commissioned a third **SQF Line** at Bhiwadi to enhance production capacity.',
    },
    {
      year: '2021',
      title: 'TTPL Goes Green',
      description: 'Implemented **Solar Power Generation Modules** at Bhiwadi, taking a step toward sustainable energy usage.',
    },
    {
      year: '2022',
      title: 'Advanced Technology Adoption',
      description: 'Set up and commenced **commercial operations for Gas Nitriding Equipment**, offering advanced heat treatment solutions.',
    },
    {
      year: '2024',
      title: 'New Greenfield Expansion',
      description: 'Established **Unit III at Khushkhera**, further strengthening TTPL’s market presence and production capacity.',
    }
  ]  
  return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Journey</h1>
        <div className="relative my-20 flex flex-col space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="hidden md:flex items-center justify-center w-1/3 p-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="w-full md:w-2/3 p-6 rounded-lg shadow-md bg-gray-900 border border-gray-700 text-start md:text-left">
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
          ))}
        </div>
      </div>
    );
  };

export default Timeline;
