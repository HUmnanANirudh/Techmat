//React
import { Suspense } from "react";
import { motion } from "motion/react";
//components
import { useState } from "react";
import Button3 from "../button/Button3";
import Plant1 from "./Plant1";
import Plant2 from "./Plant2";

//json
const Maps = [
  { id: 1, label: "Ambattur", Component: Plant1 },
  { id: 2, label: "Ayanambakkam", Component: Plant2 },
];

const Map = () => {
  const [Clicked, SetCLicked] = useState(Maps[0].id);
  const CurrentCompnent = Maps.find((Map) => Map.id === Clicked)?.Component;
  const handleClick = (id) => {
    SetClicked(id);
  };
  return (
    <div className="flex w-full justify-between mb-20">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col px-4 items-start justify-center gap-10 cursor-pointer">
          {Maps
            ? Maps.map((Map) => (
                <Button3
                  key={Map.id}
                  text={Map.label}
                  X={Map.id}
                  onClick={SetCLicked }
                  isSelected={Clicked === Map.id}
                />
              ))
            : ""}
        </div>
      </div>
      <div className="w-2/3 ml-10">
        <Suspense
          fallback={
            <div className="relative w-full m-80 p-10 animate-pulse"></div>
          }
        >
          <motion.div
            key={Clicked}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration:1 , ease: "easeInOut" }}
          >
            {CurrentCompnent && <CurrentCompnent />}
          </motion.div>
        </Suspense>
      </div>
    </div>
  );
};
export default Map;
