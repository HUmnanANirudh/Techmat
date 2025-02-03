export const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 bg-gray-50 p-20">
      <div className="flex justify-center items-stretch gap-6 w-full">
        <div className="w-1/3">
          <img src="https://www.unithermfurnaces.com/frontend/assets/images/metaLabNew1.webp" 
          className="w-full h-full"/>
        </div>
        <div className="flex w-2/3 flex-col justify-center items-start gap-4 px-20">
          <h1 className="text-4xl font-bold">Metallurgy Lab</h1>
          <p className="text-lg text-justify">
            At Unitherm Engineers Limited, we take quality assurance seriously.
            Our Metallurgy Labs in Pune, Bengaluru and Chennai ensure the
            highest standards in heat treatment processes. Armed with
            state-of-the-art testing equipment, our labs play a crucial role in
            monitoring and measuring metallurgical parameters precisely as per
            customer specifications.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 w-full">
        <div className="flex flex-col justify-center items-center w-1/3 text-justify">
          <p className="text-lg"> 
            Our dedicated QC labs have a qualified and well-trained team of
            metallurgists, whose expertise ensures that client requirements are
            met with utmost precision. Our labs have a 100% accuracy rate in a
            wide range of services ranging from inspecting the microstructure of
            components to analyzing mechanical properties.
          </p>
        </div>
        <div className="w-2/3 flex justify-start items-start">
          <img src="https://www.unithermfurnaces.com/frontend/assets/images/metalabNew2.webp" 
          className="px-20 "/>
        </div>
      </div>
    </div>
  );
};
