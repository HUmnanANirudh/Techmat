import Card1 from "../cards/Cards";

const Diverse = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 md:my-20">
      <div className="flex flex-col justify-center px-4 sm:px-8 md:px-12 gap-8 text-black">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center px-6 md:text-left">
          Diverse Range
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-justify md:text-left md:self-baseline px-6 md:pr-32">
          We have assembled a specialized team of metallurgists at each site to
          guarantee that our clients receive top-quality service with the
          fastest turnaround times. This commitment has contributed to our
          clients' satisfaction and success from the very beginning.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-10 w-full md:w-full text-center ">
        <Card1
          img={
            "https://www.unithermfurnaces.com/frontend/assets/images/solution1.webp"
          }
          text={"Complete Heat Treatment Solutions"}
        />
        <Card1
          img={
            "https://www.unithermfurnaces.com/frontend/assets/images/Carburizing-IMG-FIGMA280X385.webp"
          }
          text={"Carburizing"}
        />
        <Card1
          img={
            "https://www.unithermfurnaces.com/frontend/assets/images/Carbonitriding-IMG285X380.webp"
          }
          text={"Carbonitriding"}
        />
        <Card1
          img={
            "https://www.unithermfurnaces.com/frontend/assets/images/Gas-NitridingIMG-FIGMA280X385.webp"
          }
          text={"Gas Nitriding/Ox-Nitriding"}
        />
        {/* <Card1
          img={
            "https://www.unithermfurnaces.com/frontend/assets/images/Hardening-under-protective-IMG285X380.webp"
          }
          text={"Steam Treatment Process"}
        /> */}
        <Card1
          img={
            "https://www.unithermfurnaces.com/frontend/assets/images/Gas-NitrocarburizingIMG-FIGMA280X385.webp"
          }
          text={"Gas Nitrocarburizing/Ox-Nitriding"}
        />
      </div>
    </div>
  );
};

export default Diverse;
