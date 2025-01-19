import { FaArrowRight } from "react-icons/fa";

const Card1 = ({img,text}) => {
  return (
    <div className="relative group overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 z-10"></div>
      <img
        src={img}
        loading="lazy"
        alt="Heat Treatment Solutions"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h1 className="text-white text-xl font-bold mb-3">
          {text}
        </h1>
        <div className="flex items-center font-bold gap-2 text-[#E59137] group-hover:translate-x-2 transition-transform duration-300">
          <span>Read More</span>
          <span>|</span>
          <FaArrowRight className="group-hover:translate-x-1 mt-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Card1;