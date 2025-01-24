import Card1 from "../cards/Cards";

const Diverse = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center px-4 md:px-10 gap-8  text-black">
        <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
          Diverse Range
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center md:text-left md:self-baseline md:pr-32">
          We have assembled a specialized team of metallurgists at each site to
          guarantee that our clients receive top-quality service with the
          fastest turnaround times. This commitment has contributed to our
          clients' satisfaction and success from the very beginning.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-10">
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
          text={"Gas Nitriding"}
        />
        <Card1
          img={
            "https://www.unithermfurnaces.com/frontend/assets/images/Hardening-under-protective-IMG285X380.webp"
          }
          text={"Steam Treatment Process"}
        />
        <Card1
          img={
            "https://www.unithermfurnaces.com/frontend/assets/images/Gas-NitrocarburizingIMG-FIGMA280X385.webp"
          }
          text={"Gas Nitrocarburizing"}
        />
      </div>
    </div>
  );
};

export default Diverse;
