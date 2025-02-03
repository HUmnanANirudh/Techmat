import { Suspense } from "react";
import { AnimatePresence, motion } from "motion/react";
//components
import { useState } from "react";
import Button3 from "../button/Button3";
import Plant1 from "./Plant1";
import Plant2 from "./Plant2";
import Plant3 from "./Plant3";

//json
const Maps = [
  { id: 1, label: "Unit I Bhiwadi", Component: Plant1 },
  { id: 2, label: "Unit II Bhiwadi", Component: Plant2 },
  { id: 3, label: "Unit III Khushkhera", Component: Plant3 },
];

const Map = () => {
  const [Clicked, SetClicked] = useState(Maps[0].id);
  const CurrentComponent = Maps.find((Map) => Map.id === Clicked)?.Component;

  const handleClick = (id) => {
    SetClicked(id);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-2 ">
      <div className=" w-full p-4 mt-4 md::w-1/3">
        <div className="flex flex-col px-4  justify-center items-center gap-10 cursor-pointer">
          {Maps.map((Map) => (
            <Button3
              key={Map.id}
              text={Map.label}
              X={Map.id}
              onClick={() => handleClick(Map.id)}
              isSelected={Clicked === Map.id}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/3 ">
        <AnimatePresence>
          <Suspense
            fallback={
              <div className="relative w-full m-96 p-10 animate-pulse">
              </div>
            }
          >
            <motion.div
              key={Clicked}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {CurrentComponent && <CurrentComponent />}
            </motion.div>
          </Suspense>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Map;