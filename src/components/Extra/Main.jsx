import Img12 from "../../assets/12.webp";
import Img10 from "../../assets/10.webp";
import Img7 from "../../assets/7.webp";
export const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 bg-gray-50 p-6 md:p-20 my-20">
  <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full">
    <div className="w-full md:w-1/3">
      <img
        src={Img12}
        className="w-full h-auto"
        alt="Metallurgy Lab"
      />
    </div>
    <div className="flex w-full md:w-2/3 flex-col justify-center items-start gap-4 px-4 md:px-20">
      <h1 className="text-2xl md:text-4xl font-bold">Metallurgy Lab</h1>
      <p className="text-base md:text-lg text-justify">
      At TechnoThermalTreaters Pvt. Ltd., quality assurance is our top priority. Our advanced Metallurgy Labs, located across our three state-of-the-art facilities in Bhiwadi and Khushkhera, ensure excellence in heat treatment processes. Equipped with cutting-edge testing technology, our labs meticulously monitor and measure metallurgical parameters to meet the highest industry standards and precise customer specifications.
      </p>
    </div>
  </div>
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
    <div className="flex flex-col justify-center items-center w-full md:w-1/3 text-justify">
      <p className="text-base md:text-lg text-justify px-4">
      Our specialized QC labs are staffed with highly skilled and experienced metallurgists, ensuring that client requirements are met with exceptional precision. With a 100% accuracy rate, our labs offer a comprehensive range of services, including microstructure inspection and mechanical property analysis, guaranteeing the highest standards of quality and reliability.
      </p>
    </div>
    <div className="w-full md:w-2/3 flex justify-start items-start">
      <img
        src={Img7}
        className="w-full md:w-auto px-4 md:px-20"
        alt="Lab Equipment"
      />
    </div>
  </div>
</div>
  );
};
