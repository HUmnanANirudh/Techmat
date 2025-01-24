import Mail from "./Mail";

const Info2 = () => {
  return (
    <div className="flex justify-center items-center mb-10 sm:mb-40 md:mb-80">
      <div className="relative flex justify-center items-center w-full">
        <img
          src="https://www.unithermfurnaces.com/frontend/assets/images/solBg.webp"
          alt="Background"
          className="w-full h-auto object-cover hidden sm:block"
        />
        <div className="sm:absolute sm:top-1/3 flex justify-center items-center">
          <Mail />
        </div>
      </div>
    </div>
  );
};

export default Info2;
