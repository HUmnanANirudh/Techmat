const Info = () => {
  return (
    <div className="bg-white flex justify-center items-center my-20 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="border-2 border-blue-300 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col justify-center items-start mt-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Ambattur Plant</h2>
            <div className="w-10 border-b-2 border-blue-500 mb-4"></div>
            <p className="mb-2 text-sm sm:text-base">
              <span className="font-bold">Address :</span> Techmat Enterprises
              (Ind) Private Limited 92-A,Sidco Industrial
              Estate,Ambattur,Chennai-600 098
            </p>
            <p className="text-blue-700 font-bold mb-2 text-sm sm:text-base">
              Phone No : + 91 - 44 - 2625 0396/ 9840932457
            </p>
            <p className="text-sm sm:text-base">salesp1@techmatheattreaters.in</p>
          </div>
          <div className="flex flex-col justify-center items-start mt-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Ayanambakkam Plant</h2>
            <div className="w-10 border-b-2 border-blue-500 mb-4"></div>
            <p className="mb-2 text-sm sm:text-base">
              <span className="font-bold">Address :</span> Techmat Enterprises
              (Ind) Private Limited, No. 46. Vanagaram Road, Ayanambakkam,
              Chennai - 600 095.
            </p>
            <p className="text-blue-700 font-bold mb-2 text-sm sm:text-base">
              Phone No : + 91 - 44 - 26530131/ 9840932459
            </p>
            <p className="text-sm sm:text-base">salesp2@techmatheattreaters.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
