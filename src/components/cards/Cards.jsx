const Card1 = ({ img, text }) => {
  return (
    <div className="relative group overflow-hidden cursor-pointer mx-auto border-2 w-full border-blue-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
  <img
    src={img}
    loading="lazy"
    alt="Heat Treatment Solutions"
    className="w-full h-52 sm:h-56 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10"></div>
  <div className="absolute bottom-0 p-4 z-20">
    <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase">
      {text}
    </h1>
  </div>
</div>

  );
};

export default Card1;
