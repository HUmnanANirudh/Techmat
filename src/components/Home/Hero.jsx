import { AnimatePresence, motion } from "motion/react";
import Button from "../button/Button1";
import { useEffect, useState } from "react";
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
    const images = [
      {
        id: 1,
        img: "https://www.dl.dropboxusercontent.com/scl/fi/qdcxy6q6fysnkzfduep9t/WhatsApp-Image-2025-01-31-at-18.13.22_1a0afd3f.jpg?rlkey=d7i4mpu33osv0lf7s6e97h0cz&st=p9onst3o&dl=0",
      },
      {
        id: 2,
        img: "https://www.dl.dropboxusercontent.com/scl/fi/dmt8hfch1pn1fpwlgt15i/WhatsApp-Image-2025-01-31-at-18.05.34_775231c5.jpg?rlkey=1h1lazatjpzz6sncy0cwcoq2u&st=helz1eyz&dl=0",
      },
      {
        id: 3,
        img: "https://www.dl.dropboxusercontent.com/scl/fi/uzvtv5vt2inzpxuj22nxt/WhatsApp-Image-2025-01-31-at-18.21.38_19185d04.jpg?rlkey=a0u8o0qai78djpr7nkk1n6d6w&st=841nstv4&dl=0",
      },
    ];
    const [currentIndex,setcurrentIndex] = useState(0);
    useEffect(()=>{
      const Interval = setInterval(()=>{
        setcurrentIndex((prevIndex)=>(prevIndex + 1)% images.length)
      },5000)

      return ()=> clearInterval(Interval)
    },[images.length])
  return (
    <div className="relative w-full h-[90vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
       <AnimatePresence>
        {images.map((image,index)=>
        index === currentIndex ?(
          <motion.div
          key={image.id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:0.5,ease:"easeInOut"}}
          className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
          <img
          src={image.img}
          alt="Industrial Manufacturing Banner"
          className="w-full h-full object-cover object-center transform scale-105"/>
          </motion.div>
        ):null
      )}
       </AnimatePresence>
      <div className="relative z-20 h-full flex items-center justify-center px-4 md:px-8">
        <div className="space-y-6">
          <h1 className="text-[27px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight whitespace-nowrap text-center">
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
            <div className="pt-2 text-3xl md:text-4xl lg:text-5xl">
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

          <div className="text-base md:text-lg lg:text-xl  text-gray-200 max-w-2xl mx-auto text-center">
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
          <Button text={"Learn More"} onClick={Scroll} X={"about"} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
