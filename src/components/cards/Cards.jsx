

const Card1 = ({ img, text }) => {
  return (
    <div className="relative group overflow-hidden cursor-pointer w-full sm:w-80 md:w-80 mx-auto border-2 border-blue-200">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 z-10"></div>
      <img
        src={img}
        loading="lazy"
        alt="Heat Treatment Solutions"
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 z-20">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl text-start font-bold mb-3">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Card1;
