const Card1 = ({ img, text }) => {
  return (
    <div className="relative group overflow-hidden cursor-pointer mx-auto border-2 border-purple-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 z-10"></div>
      <img
        src={img}
        loading="lazy"
        alt="Heat Treatment Solutions"
        className="w-52 h-full sm:w-56 md:w-64 lg:w-72 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 p-4 z-20">
        <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl text-start font-bold uppercase">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Card1;
