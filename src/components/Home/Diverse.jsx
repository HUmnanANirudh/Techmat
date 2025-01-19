import Card1 from "../cards/Cards";
const Diverse = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center p-10 gap-32 items-streach text-black">
        <h1 className="text-4xl whitespace-nowrap pl-32 font-bold">
          Diverse Range
        </h1>
        <p className="text-xl self-baseline pr-32">
          We have engaged a dedicated team of metallurgists at each location to
          ensure that our clientele receives the best quality at the shortest
          processing times. And this has helped ensure the satisfaction and
          success of our clients from Day 1.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-20 px-40 py-10">
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
