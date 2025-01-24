const HomeAbout = ()=> {
    return(
        <div className="flex flex-col md:flex-row justify-center md:gap-8 lg:px-12 items-center my-10 lg:mt-10">
          <div className="flex justify-center items-center w-full md:w-4/5">
            <img
              src="https://www.unithermfurnaces.com/frontend/assets/images/30year.webp"
              alt="30 Years of Experience"
              className="object-cover w-full p-4 h-64 sm:h-80 lg:h-96 max-w-[700px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-10 items-stretch pb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-3 sm:px-6 md:px-10">
                Provider of Commercial Atmospheric Heat Treatment Services
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-10 ">
              <img
                src="https://www.unithermfurnaces.com/frontend/assets/images/service1.webp"
                className="bg-gray-200 p-2 border-2 border-blue-200"
              />
              <p className="text-base md:text-lg lg:text-xl text-justify">
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