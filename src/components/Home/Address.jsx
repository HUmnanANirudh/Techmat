const Address = ({ plantName, address, phone, email }) => {
    return (
      <div className="flex flex-col justify-center items-start mt-2">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 ">{plantName}</h2>
        <div className="w-10 border-b-2 border-blue-500 mb-4"></div>
        <p className="mb-2 text-sm sm:text-base">
          <span className="font-bold">Address :</span> {address}
        </p>
        <p className="text-blue-700 font-bold mb-2 text-sm sm:text-base">
          Phone No : {phone}
        </p>
        <p className="text-sm sm:text-base">{email}</p>
      </div>
    );
  };
  
  export default Address;
  