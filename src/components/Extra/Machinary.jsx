import Table from "../Infra/Table";

// const data = [
//   {
//     srNo: 1,
//     equipment: "Micro Hardness Tester",
//     make: "Mitutoyo",
//     usedFor: "Case depth checking & Microstructure checking",
//   },
//   {
//     srNo: 2,
//     equipment: "Micro Hardness Tester with Image Analyser",
//     make: "Metatech",
//     usedFor: "Case depth checking & Microstructure checking",
//   },
//   {
//     srNo: 3,
//     equipment: "Digital Vernier Gauge",
//     make: "Precise",
//     usedFor: "Checking small measurement",
//   },
//   {
//     srNo: 4,
//     equipment: "Gas Analyser",
//     make: "AMB Electronic",
//     usedFor: "Furnace Atmosphere",
//   },
//   {
//     srNo: 5,
//     equipment: "Digital hardness tester",
//     make: "RTA",
//     usedFor: "Hardness Inspection",
//   },
//   {
//     srNo: 6,
//     equipment: "Belt Grinder",
//     make: "Metatech",
//     usedFor: "Job surface cleaning",
//   },
//   {
//     srNo: 7,
//     equipment: "Belt Polisher",
//     make: "SSPE",
//     usedFor: "Job surface cleaning",
//   },
//   {
//     srNo: 8,
//     equipment: "Microscope",
//     make: "Carl Zeiss",
//     usedFor: "Microstructure Analysis",
//   },
//   {
//     srNo: 9,
//     equipment: "Microscope",
//     make: "Lieca",
//     usedFor: "Microstructure Analysis",
//   },
//   {
//     srNo: 10,
//     equipment: "Auto Cut Off Machine, SERVOCUT A-300",
//     make: "Metcon",
//     usedFor: "Sample Cutting",
//   },
//   {
//     srNo: 11,
//     equipment: "Cut Off Machine, Chennai Metco - Auto",
//     make: "Chennai Metco",
//     usedFor: "Sample Cutting",
//   },
//   {
//     srNo: 12,
//     equipment: "Cut Off Machine, METACUT 80",
//     make: "Lieca",
//     usedFor: "Sample Cutting",
//   },
//   {
//     srNo: 13,
//     equipment: "Microscope",
//     make: "Lieca",
//     usedFor: "Microstructure Analysis",
//   },
//   {
//     srNo: 14,
//     equipment: "Bend Saw Machine",
//     make: "Laxmi Engineers",
//     usedFor: "Soft Sample Cutting",
//   },
//   {
//     srNo: 15,
//     equipment: "Auto Pneumatic Mtg. Press",
//     make: "Scientific Tech",
//     usedFor: "Sample Preparation",
//   },
//   {
//     srNo: 16,
//     equipment: "Auto Pneumatic Mtg. Press",
//     make: "Chenai Metco",
//     usedFor: "Sample Preparation",
//   },
//   {
//     srNo: 17,
//     equipment: "Auto Pneumatic Mtg. Press",
//     make: "Metcon",
//     usedFor: "Sample Preparation",
//   },
//   {
//     srNo: 18,
//     equipment: "Auto Polishing and Lapping Machine",
//     make: "Metcon",
//     usedFor: "Sample Preparation",
//   },
//   {
//     srNo: 19,
//     equipment: "Mounting Press",
//     make: "Metatech",
//     usedFor: "Sample Preparation",
//   },
//   {
//     srNo: 20,
//     equipment: "Polishing and Lapping Machine",
//     make: "Metatech",
//     usedFor: "Sample Preparation",
//   },
//   {
//     srNo: 21,
//     equipment: "Polishing and Lapping Machine",
//     make: "Chenai Metco",
//     usedFor: "Sample Preparation",
//   },
//   {
//     srNo: 22,
//     equipment: "Polishing and Lapping Machine",
//     make: "SSPE",
//     usedFor: "Sample Preparation",
//   },
//   {
//     srNo: 23,
//     equipment: "Brinell Hardness Tester",
//     make: "Saroj engineering udyog P.Ltd.",
//     usedFor: "Surface Hardness Checking",
//   },
//   {
//     srNo: 24,
//     equipment: "Digital Rockwell Hardness Tester",
//     make: "Fuel Instrument",
//     usedFor: "Surface Hardness Checking",
//   },
//   {
//     srNo: 25,
//     equipment: "Portable hardness tester",
//     make: "Wilson",
//     usedFor: "Surface Hardness Checking",
//   },
//   {
//     srNo: 26,
//     equipment: "Rockwell Hardness Tester",
//     make: "Fine Testing Machines",
//     usedFor: "Surface Hardness Checking",
//   },
//   {
//     srNo: 27,
//     equipment: "Rockwell cum Brinell Hardness Tester",
//     make: "Fine Testing Machines",
//     usedFor: "Surface Hardness Checking",
//   },
//   {
//     srNo: 28,
//     equipment: "Rockwell cum super-ficial Hardness Tester",
//     make: "Opto-Fine Instruments",
//     usedFor: "Surface Hardness Checking",
//   },
//   {
//     srNo: 29,
//     equipment: "Rockwell cum super-ficial Hardness Tester",
//     make: "Fine Testing Machines",
//     usedFor: "Surface Hardness Checking",
//   },
//   {
//     srNo: 30,
//     equipment: "Vickers cum Brinell Hardness Tester",
//     make: "Balancing Instruments and Equipment's",
//     usedFor: "Surface Hardness Checking",
//   },
// ];
export const Machinary = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 md:px-16 md:my-10 ">
  <div className="flex flex-col justify-center items-center mx-auto p-6 md:px-8 space-y-4 max-w-4xl mb-4">
    <h1 className="text-2xl md:text-3xl font-bold self-center md:self-start text-center md:text-left">
      Hardness & Microstructure Analysis Equipment
    </h1>
    <p className="text-base md:text-lg text-justify ">
      Precision is of the utmost importance to us. Our QC labs are equipped with advanced tools to ensure the highest heat treatment quality standards.
    </p>
    <p className="text-base md:text-lg text-justify">
      We leave no room for compromise when it comes to assessing the hardness and microstructure of components undergoing heat treatment. Our QC labs are fully equipped with advanced and sophisticated equipment dedicated to these critical measurements, ensuring that our heat treatment processes meet the highest standards of precision and quality.
    </p>
  </div>
  {/* <div className="flex justify-center items-center w-full ">
    <div className="w-[80%] flex justify-center">
      <table className="min-w-full table-auto border-collapse border text-start border-blue-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border whitespace-nowrap border-blue-300 px-2 py-2 sm:px-4 sm:py-2 lg:px-8 lg:py-4">
              Sr No
            </th>
            <th className="border border-blue-300 px-2 py-2 sm:px-4 sm:py-2 lg:px-8 lg:py-4">
              Equipment
            </th>
            <th className="border border-blue-300 px-2 py-2 sm:px-4 sm:py-2 lg:px-8 lg:py-4">
              Make
            </th>
            <th className="border border-blue-300 px-2 py-2 sm:px-4 sm:py-2 lg:px-8 lg:py-4">
              Used For
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white even:bg-gray-100 ">
              <td className="border border-blue-300 self-center text-sm sm:text-base md:text-lg px-2 py-2 sm:px-4 sm:py-2 lg:px-8 lg:py-4">
                {item.srNo}
              </td>
              <td className="border border-blue-300 text-sm sm:text-base md:text-lg px-2 py-2 sm:px-4 sm:py-2 lg:px-8 lg:py-4">
                {item.equipment}
              </td>
              <td className="border border-blue-300 text-sm sm:text-base md:text-lg px-2 py-2 sm:px-4 sm:py-2 lg:px-8 lg:py-4">
                {item.make}
              </td>
              <td className="border border-blue-300 text-sm sm:text-base md:text-lg px-2 py-2 sm:px-4 sm:py-2 lg:px-8 lg:py-4">
                {item.usedFor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div> */}
</div>

  );
};
