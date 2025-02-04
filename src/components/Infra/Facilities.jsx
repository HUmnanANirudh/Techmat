import { useState, Suspense } from "react";
import { Unit1 } from "./Unit1";
import { Unit2 } from "./Unit2";
import { Unit3 } from "./Unit3";
import { motion, AnimatePresence } from "motion/react";

const Factories = [
  { id: 1, label: "Unit I Bhiwadi", Component: Unit1 },
  { id: 2, label: "Unit II Bhiwadi", Component: Unit2 },
  { id: 3, label: "Unit III Khushkhera", Component: Unit3 },
];

const Facilities = () => {
  const [Clicked, SetClicked] = useState(Factories[0].id);
  const CurrentComponent = Factories.find(
    (Factory) => Factory.id === Clicked
  )?.Component;

  const HandleClick = (id) => {
    SetClicked(id);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 md:p-8">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 mb-8">
        {Factories.map((Factory) => (
          <button
            key={Factory.id}
            onClick={() => HandleClick(Factory.id)}
            className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base lg:text-lg font-bold border-2 cursor-pointer transition-all duration-300 ease-in-out 
              ${
                Clicked === Factory.id
                  ? "bg-blue-300 border-blue-300"
                  : "bg-gray-100 hover:bg-gray-200 hover:border-blue-300"
              }`}
          >
            {Factory.label}
          </button>
        ))}
      </div>
      <div className="w-full">
        <AnimatePresence>
          <Suspense
            fallback={
              <div className="relative w-full h-96 p-10 animate-pulse bg-gray-100"></div>
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

export default Facilities;
