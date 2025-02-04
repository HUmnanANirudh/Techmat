const HomeAbout = ()=> {
    return(
        <div className="flex flex-col md:flex-row justify-center md:gap-8 lg:px-12 items-center my-10 lg:mt-10 w-full">
          <div className="flex justify-center items-center w-full md:w-1/3">
            <img
              src="https://www.unithermfurnaces.com/frontend/assets/images/30year.webp"
              alt="30 Years of Experience"
              className="object-cover w-full p-4 h-64 sm:h-80 lg:h- max-w-[500px]"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-10 md:items-stretch pb-8 w-full md:w-2/3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-4 sm:px-6 md:px-10">
                Provider of Commercial Atmospheric Heat Treatment Services
            </h1>
            <div className="flex flex-col md:flex-row md:justify-center justify-start items-start md:items-center gap-4 px-10 ">
              <img
                src="https://www.unithermfurnaces.com/frontend/assets/images/service1.webp"
                className="bg-gray-200 p-2 border-2 border-blue-200"
              />
              <p className="text-base md:text-lg lg:text-xl  text-justify">
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