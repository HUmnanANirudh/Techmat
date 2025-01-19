const Head = ({img,text}) =>{
    return(
        <div className="relative w-full inset-0 bg-gradient-to-b from-black/70 to-black/30 flex justify-center">
        <img
          src={img}
          loading="lazy"
          className=" mix-blend-overlay pt-8 object-fill"
        />
        <div className="absolute text-center z-20 text-5xl text-white font-bold top-1/2">
          <h1>{text}</h1>
        </div>
      </div>
    )
}
export default Head;