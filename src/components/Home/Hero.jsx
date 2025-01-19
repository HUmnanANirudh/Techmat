import { motion } from "motion/react";
import Button from "../button/Button1";

const Hero = () => {
  const Scroll = (SectionId) => {
    const Section = document.getElementById(SectionId);
    if (SectionId) {
      Section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const headingLine1 = "Innovating Metal Solutions for".split(" ");
  const headingLine2 = "Tomorrow".split(" ");
  const subheading =
    "Advancing industrial excellence through cutting-edge metal processing technology".split(
      " "
    );
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <img
          src="https://www.unithermfurnaces.com/storage/app/public/homepage_banners/OZqLWJgPTmyr5QLsNEL69ndXE4E9GE7qMQvjVjOj.webp"
          alt="Industrial Manufacturing Banner"
          className="w-full h-full object-cover object-center transform scale-105 animate-slow-zoom"
        />
      </div>
      <div className="relative z-20 h-full flex items-center justify-center px-4 md:px-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight whitespace-nowrap text-center">
            <div>
              {headingLine1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i / 10,
                    ease: "easeOut",
                  }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </div>
            <div className="pt-2 ">
              {headingLine2.map((word, i) => (
                <motion.span
                  key={i}
                  className="text-blue-400 relative inline-block text-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: (headingLine1.length + i) / 10,
                    ease: "easeOut",
                  }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </div>
          </h1>

          <div className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto text-center">
            {subheading.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (headingLine1.length + headingLine2.length + i) / 10,
                  ease: "easeOut",
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </div>
          <Button 
          text={"Learn More"} onClick={Scroll} X={"about"}/>
        </div>
        </div>
      </div>
  );
};
export default Hero;
