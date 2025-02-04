import Address from "./Address"; 

const Info = () => {
  return (
    <div className="bg-white flex justify-center items-center my-20 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="border-2 border-blue-300 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          <Address
            plantName="Unit I Bhiwadi"
            address="G 1/571 Industrial Area Phase I, Bhiwadi 301019, Rajasthan"  
            phone="+91 8094444634"
            email="info@tttpl.in"
            className="lg:col-span-1"
          />
          <Address
            plantName="Unit II Bhiwadi"
            address="G 1/516 Industrial Area Phase I, Bhiwadi 301019, Rajasthan"
            phone="+91 9810421215"
            email="gauravkalra@tttpl.in"
            className="lg:col-span-1"
          />
          <Address
            plantName="Unit III Khushkhera"
            address="G 1/938 Industrial Area Khushkhera 301707, Rajasthan"
            phone="+91 9772200675"
            email="sailawadi@tttpl.in"
            className="lg:col-span-1 sm:col-span-2 order-last sm:order-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
