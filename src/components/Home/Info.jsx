const Info = () => {
  return (
    <div className="bg-white flex justify-center items-center my-20 mx-40">
      <div className="border-2 border-blue-300 flex justify-between items-center p-10">
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-xl font-bold mb-2">Ambattur Plant</h2>
            <div className="w-10 border-b-2 border-blue-500 mb-4"></div>
            <p className="mb-2">
              <span className="font-bold">Address :</span> Techmat Enterprises
              (Ind) Private Limited 92-A,Sidco Industrial
              Estate,Ambattur,Chennai-600 098
            </p>
            <p className="text-blue-700 font-bold mb-2">
              Phone No : + 91 - 44 - 2625 0396/ 9840932457
            </p>
            <p>salesp1@techmatheattreaters.in</p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-xl font-bold mb-2">Ayanambakkam Plant</h2>
            <div className="w-10 border-b-2 border-blue-500 mb-4"></div>
            <p className="mb-2">
              <span className="font-bold">Address :</span> Techmat Enterprises
              (Ind) Private Limited, No. 46. Vanagaram Road, Ayanambakkam,
              Chennai - 600 095.
            </p>
            <p className="text-blue-700 font-bold mb-2">
              Phone No : + 91 - 44 - 26530131/ 9840932459
            </p>
            <p>salesp2@techmatheattreaters.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
