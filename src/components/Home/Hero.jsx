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
        img: "https://www.unithermfurnaces.com/storage/app/public/homepage_banners/OZqLWJgPTmyr5QLsNEL69ndXE4E9GE7qMQvjVjOj.webp",
      },
      {
        id: 2,
        img: "https://media.istockphoto.com/id/912174592/photo/modern-pipe-rolling-plant-with-steel-tubes.jpg?s=612x612&w=0&k=20&c=j8Q5_VF2vC8Gz24f5sE31LqYp0tLRaIopEFUHoRSqA8=",
      },
      {
        id: 3,
        img: "https://media.istockphoto.com/id/2191758317/photo/iron-rods-are-cut-off-by-the-heavy-cutting-machine-fire-sparks-are-coming-out-from-there.jpg?s=612x612&w=0&k=20&c=_6e0qsv9hxBYbe6CtVVjjh52Y0d-RYIKEMviWeyOL9U=",
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
