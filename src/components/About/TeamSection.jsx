import {motion} from "motion/react"
import DV from "../../assets/D.V.Kalra.webp"
import GK from "../../assets/GAURAV.webp"
import SA from "../../assets/SANJEEV.webp"
import TK from "../../assets/TUSHAR.webp"
const TeamCard = ({ name,img, currentRole, previousRoles, education, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }}
    viewport={{ once: true, margin: "-100px" }}
    className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 w-full transform hover:shadow-2xl transition-all duration-300 border border-gray-100"
  >
    <motion.div 
      className="w-full md:w-1/3"
      whileHover={{ scale: 1.02 }}
      viewport={{once:true}}
      transition={{ duration: 0.3 }}
    >
      <div className="relative group">
        <img 
          src={img}
          alt={name} 
          className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </motion.div>
    
    <div className="w-full md:w-2/3 space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once:true}}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
        className="space-y-2"
      >
        <h3 className="text-3xl font-bold text-gray-800">
          {name}
        </h3>
        <p className="text-xl text-gray-600 font-medium">{currentRole}</p>
      </motion.div>
      
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once:true}}
        transition={{ delay: delay + 0.4, duration: 0.5 }}
      >
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-700 text-lg">Previous Experience</h4>
          <p className="text-gray-600 leading-relaxed">{previousRoles}</p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-700 text-lg">Education</h4>
          <p className="text-gray-600 leading-relaxed">{education}</p>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const TeamSection = () => {
  const teamData = [
    {
      name: "D.V. Kalra",
      img : DV,
      currentRole: "Managing Director & Founder Techno",
      previousRoles: "IRDMech analysis (I)Ltd, National Productivity Council (Sr.Consultant), Bhabha Atomic Research Centre Bombay (Scientific Assistant)",
      education: "BSc(With PCM), BE (Metallurgy) from Associate Members of Engineers (AMIE), Post Graduate Certificate Course Plant Engineering",
    },
    {
      name: "Gaurav Kalra",
      img : GK,
      currentRole: "Director Business Development",
      previousRoles: "Motherson Sumi, Havells India Ltd, Havells India Ltd.",
      education: "4 Years course in Tool and Design from Indo Swiss Chandigarh, B.E.(Metallurgy) from AMIE Calcutta",
    },
    {
      name: "Sanjeev Ailawadi",
      img : SA,
      currentRole: "Director-Technical",
      previousRoles: "Honda Cars India Ltd,MusashiAuto Parts & Munjal Auto Components (HEROGROUP)",
      education: "MBA(Marketing) B.E .(Metallurgy",
    },
    {
      name: "Tushar Kalra",
      img : TK,
      currentRole: "Director-Commercial",
      previousRoles: "IBM Global Process Services",
      education: "BCA",
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8 md:my-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Leadership Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{once:true}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600"
          >
            Meet the experts behind our success
          </motion.p>
        </div>
        
        <div className="space-y-12">
          {teamData.map((member, index) => (
            <TeamCard 
              key={member.name}
              {...member}
              delay={index * 0.3}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TeamSection;