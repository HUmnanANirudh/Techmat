const HomeAbout = ()=> {
    return(
        <div className="flex justify-center items-center">
          <div className="flex flex-col md:flex-row md:justify-center relative items-center w-full gap-10 p-20">
            <img
              src="https://www.unithermfurnaces.com/frontend/assets/images/30year.webp"
              alt="30 Years of Experience"
              className="object-cover w-full h-96"
            />
            <div className="absolute bottom-44 right-1/3 flex items-center group">
              <div
                className="bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-sm 
                  shadow-lg transform transition-all duration-300 
                  hover:translate-y-[-2px] hover:shadow-xl"
              >
                <p className="text-lg font-medium tracking-wide">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10 items-stretch pb-8">
            <h1 className="text-4xl font-bold px-10">
              India's leading provider of Commercial Atmospheric Heat Treatment
              Services
            </h1>
            <div className="flex justify-center items-center gap-4 px-10">
              <img
                src="https://www.unithermfurnaces.com/frontend/assets/images/service1.webp"
                className="bg-gray-200 p-2"
              />
              <p className="text-lg">
                We fulfill India's commercial atmospheric heat treatment needs
                with a pan-India presence. Our plants are strategically
                positioned near key automotive and non-automotive component
                manufacturing centers.
              </p>
            </div>
          </div>
        </div>
    )
}
export default HomeAbout;