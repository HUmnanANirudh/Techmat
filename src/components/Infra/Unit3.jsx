import Img20 from "../../assets/20.webp";
const Data = [
    // { type: "Sealed Quench Furnace", capacity: "1000kg", units: 3 },
    { type: "Sealed Quench Furnace", capacity: "1200kg", units: 2 },
    // { type: "Gas Nitriding Furnace", capacity: "600kg", units: 2 },
    // { type: "Gas Carburizing Furnace", capacity: "600kg", units: 3 },
    // { type: "Shot Blasting - Tumblast", capacity: "N/A", units: 1 },
    { type: "Shot Blasting - Table Type", capacity: "N/A", units: 1 },
    { type: "Fully Equipped Metallurgy Lab", capacity: "N/A", units: 1}
];
export const Unit3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 w-full p-6 md:p-10 bg-gray-50">
      <div className="flex flex-col justify-center items-center w-full md:w-2/3">
        <div className="w-full ">
          <img
            src={Img20}
            alt="Plant images"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" mt-8 w-full md:p-0">
          <table className="min-w-full table-auto border-collapse border text-start border-blue-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                  Type
                </th>
                <th className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                  Capacity
                </th>
                <th className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                  No. of Units
                </th>
              </tr>
            </thead>
            <tbody>
              {Data.map((item, index) => (
                <tr key={index} className="bg-white even:bg-gray-100">
                  <td className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                    {item.type}
                  </td>
                  <td className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                    {item.capacity}
                  </td>
                  <td className="border border-blue-300 px-4 py-2 sm:px-6 sm:py-3 lg:px-12 lg:py-4">
                    {item.units}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-full md:w-1/3">
        <div className="flex flex-col justify-center items-center text-start space-y-2 p-4">
          <h1 className="text-2xl font-bold self-start">Plant Information</h1>
          <div className="w-16 border-b-4 border-blue-500 mb-4 self-start"></div>
          <p className="text-base md:text-lg text-justify">
          Our Khushkhera facility is a cutting-edge commercial heat treatment plant, catering to OEMs and Tier 1 & Tier 2 companies across automotive and non-automotive industries. With a focus on precision and quality, we offer advanced heat treatment solutions that adhere to the highest industry standards. Our fully equipped Metallurgy Lab ensures stringent quality control, delivering consistent and reliable results for every component we process.
          </p>
          <p className="text-base md:text-lg text-justify">
          The facility is equipped with two 1200kg Sealed Quench Furnaces and a Table-Type Shot Blasting unit, enabling efficient and high-quality treatment processes. Designed for seamless operations, our Khushkhera unit ensures uninterrupted production and timely service delivery, reinforcing our commitment to excellence in heat treatment solutions.
          </p>
        </div>
        <div className="flex justify-center w-full h-64 md:h-80 p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21426.093612823006!2d76.8302367!3d28.2049761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3790de59396b%3A0x97154e5698fa6081!2sTechno%20Thermal%20Treaters%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1738365054664!5m2!1sen!2sin"
            title="Google Map location of TECHMAT Enterprises"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
