const Card1 = ({ img, text }) => {
  return (
    <div className="relative group overflow-hidden cursor-pointer w-2/3 sm:w-80 md:w-96 mx-auto border-2 border-blue-200 rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 z-10"></div>
      <img
        src={img}
        loading="lazy"
        alt="Heat Treatment Solutions"
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 z-20">
        <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-start font-bold mb-2 sm:mb-3">
          {text}
        </h1>
      </div>
    </div>
  );
};
export default Card1;