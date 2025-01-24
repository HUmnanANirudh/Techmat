import Address from './Address';  // Import the Address component

const Info = () => {
  return (
    <div className="bg-white flex justify-center items-center my-20 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="border-2 border-blue-300 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-16">
          <Address 
            plantName="Ambattur Plant"
            address="Techmat Enterprises (Ind) Private Limited 92-A,Sidco Industrial Estate,Ambattur,Chennai-600 098"
            phone="+ 91 - 44 - 2625 0396/ 9840932457"
            email="salesp1@techmatheattreaters.in"
          />
          <Address 
            plantName="Ayanambakkam Plant"
            address="Techmat Enterprises (Ind) Private Limited, No. 46. Vanagaram Road, Ayanambakkam, Chennai - 600 095."
            phone="+ 91 - 44 - 26530131/ 9840932459"
            email="salesp2@techmatheattreaters.in"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
