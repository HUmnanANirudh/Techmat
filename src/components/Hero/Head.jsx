const Head = ({img,text}) =>{
    return(
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]  inset-0 bg-gradient-to-b from-black/70 to-black/30 flex justify-center">
        <img
          src={img}
          loading="lazy"
          className="w-full h-full mix-blend-overlay object-fill"
          alt="Header Background"
        />
        <div className="absolute text-center z-20 font-bold top-1/2 -translate-y-1/2">
          <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">{text}</h1>
        </div>
      </div>
    )
}
export default Head;