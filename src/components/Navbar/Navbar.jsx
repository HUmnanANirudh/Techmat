import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import Dropdown from "../Dropdown/Dropdown";
import { AnimatePresence, motion } from "motion/react";

//Json
const Aboutinfo = [
  { id: 1, label: "About Company",Component:"About"},
  { id: 2, label: "Group Compaines",Component:"About" },
  { id: 3, label: "Location",Component:"About" }
];

const Serviceinfo = [
  { id: 1, label: "Heat Treatment" },
  { id: 2, label: "Carburizing" },
  { id: 3, label: "Carbonitriding" },
  { id: 4, label: "Gas Nitriding" },
  { id: 5, label: "Gas Nitrocarburizing" },
  { id: 6, label: "Steam Treatment " },
];

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const Navbar = () => {
  const [ShowAbout, SetShowAbout] = useState(false);
  const [ShowService, SetShowServices] = useState(false);
  return (
    <div className="text-blue-300 flex justify-between p-2 border border-b-2 border-t-2 border-blue-300">
      <div className="flex justify-center items-center">
        <img
          src="https://techmatheattreaters.in/images/logo.png"
          alt="Logo"
          className="w-44"
        />
      </div>
      <nav className="flex justify-center gap-5 text-xl items-center">
        <NavLink to="/" className="nav-link" onClick={()=>scrollToTop()}>
          Home
        </NavLink>
        <div
          className="relative"
          onMouseEnter={() => SetShowAbout(true)}
          onMouseLeave={() => SetShowAbout(false)}
        >
          <div
            className="flex items-center gap-2 text-[#1e3a8a] px-4 py-2 rounded-full transition duration-300 hover:bg-[#f0ffff] hover:text-black cursor-default"
          >
            About
            <FiChevronDown
              className={`transition-transform duration-300 ${
                ShowAbout ? "rotate-180" : ""
              }`}
            />
          </div>
          <AnimatePresence>
            {ShowAbout && (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 5 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md p-4"
              >
                <Link to={"/about/company"} onClick={()=>scrollToTop()}>
                <Dropdown items={Aboutinfo} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div
          className="relative"
          onMouseEnter={() => SetShowServices(true)}
          onMouseLeave={() => SetShowServices(false)}
        >
          <div
            className="flex items-center gap-2 text-[#1e3a8a] px-4 py-2 rounded-full transition duration-300 hover:bg-[#f0ffff] hover:text-black cursor-default"
          >
            Services
            <FiChevronDown
              className={`transition-transform duration-300 ${
                ShowService ? `rotate-180` : ``
              } `}
            />
          </div>
          <AnimatePresence>
            {ShowService && (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 5 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md p-4"
              >
                <Link to={"/service"}>
                <Dropdown items={Serviceinfo} onClick={()=>scrollToTop()}/>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <NavLink to="/contact" className="nav-link" onClick={()=>scrollToTop()}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
