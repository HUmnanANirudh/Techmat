import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import Dropdown from "../Dropdown/Dropdown";
import MobileDropdown from "../Dropdown/MobileDropdown";
import { AnimatePresence, motion } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Qualityinfo = [
  { id: 1, label: "Metallurgy Lab" },
  { id: 2, label: "Certificates" },
  { id: 3, label: "SCADA & Quality Tools" },
  { id: 4, label: "Quality Policy" },
];

const scrollToTop = (delay=500) => {
  setTimeout(()=>{window.scrollTo({ top: 0, left: 0, behavior: "smooth" })},delay);
};

const Navbar = () => {
  const [ShowQuality, SetShowQuality] = useState(false);
  const [Show, setShow] = useState(false);
  const [Drop, SetDrop] = useState(false);
  const handleNav = () => {
    setShow(!Show);
    SetDrop(false);
  };
  const handleDrop = () => {
    SetDrop(!Drop);
  };
  return (
    <div className="text-blue-300 flex justify-between p-2 border border-b-2 border-t-2 border-blue-300">
      <div className="flex justify-center items-center">
        <img
          src="https://techmatheattreaters.in/images/logo.png"
          alt="Logo"
          className="w-32 md:w-36 lg:w-44 xl:w-56"
        />
      </div>
      <nav className="hidden sm:flex justify-center sm:gap-1 md:gap-2  sm:text-xs md:text-base lg:text-lg xl:text-xl items-center">
        <NavLink to="/" className="nav-link" onClick={() => scrollToTop()}>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => scrollToTop()}>
          About
        </NavLink>
        <NavLink
          to="/service"
          className="nav-link"
          onClick={() => scrollToTop()}
        >
          Services
        </NavLink>
        <div
          className="relative"
          onMouseEnter={() => SetShowQuality(true)}
          onMouseLeave={() => SetShowQuality(false)}
        >
          <div className="flex items-center gap-2 text-[#1e3a8a] px-4 py-2 rounded-full transition duration-300 hover:bg-[#f0ffff] hover:text-black cursor-default">
            Quality
            <FiChevronDown
              className={`transition-transform duration-300 ${
                ShowQuality ? `rotate-180` : ``
              } `}
            />
          </div>
          <AnimatePresence>
            {ShowQuality && (
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
                <Link to={"/service"} onClick={scrollToTop}>
                  <Dropdown items={Qualityinfo} onClick={() => scrollToTop()} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <NavLink
          to="/infrasturcture"
          className="nav-link"
          onClick={() => scrollToTop()}
        >
          Infrastructure
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link"
          onClick={() => scrollToTop()}
        >
          Contact
        </NavLink>
      </nav>
      <div className="sm:hidden pt-1 mr-1">
        <GiHamburgerMenu
          className="text-2xl text-center cursor-pointer"
          onClick={handleNav}
        />
        <AnimatePresence>
          {Show && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeIn",
                },
              }}
              exit={{
                opacity: 0,
                y: "100%",
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
              className="fixed sm:hidden top-0 left-0 w-screen h-screen bg-gray-50 "
            >
              <div className="flex flex-col">
                <div className="flex justify-between p-1.5">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://techmatheattreaters.in/images/logo.png"
                      alt="Logo"
                      className="w-32"
                    />
                  </div>
                  <div className=" pt-2">
                    <IoCloseSharp
                      className="text-3xl cursor-pointer"
                      onClick={handleNav}
                    />
                  </div>
                </div>
                <nav className="flex flex-col justify-center items-center text-center text-base gap-4 mt-4 ">
                  <NavLink
                    to="/"
                    className="nav-link"
                    onClick={() => scrollToTop()}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="nav-link"
                    onClick={() => scrollToTop()}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/service"
                    className="nav-link"
                    onClick={() => scrollToTop()}
                  >
                    Services
                  </NavLink>

                  <NavLink
                    to="/infrasturcture"
                    className="nav-link"
                    onClick={() => scrollToTop()}
                  >
                    Infrastructure
                  </NavLink>
                  <div
                    className="text-[#1e3a8a] flex flex-col justify-center items-center cursor-pointer hover:"
                    onClick={handleDrop}
                  >
                    <div className="flex justify-center items-center gap-1">
                      Quality
                      <span className="pt-2">
                        <FiChevronDown
                          className={`transition-transform duration-300 ${
                            Drop ? `rotate-180` : ``
                          } `}
                        />
                      </span>
                    </div>
                    <AnimatePresence>
                      {Drop && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            transition: {
                              duration: 0.3,
                              ease: "easeInOut",
                            },
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                              duration: 0.2,
                              ease: "easeInOut",
                            },
                          }}
                          className=" text-black text-start rounded-md overflow-hidden"
                        >
                          <Link to={"/service"}>
                            <MobileDropdown
                              items={Qualityinfo}
                              onClick={() => scrollToTop()}
                            />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    onClick={() => scrollToTop()}
                  >
                    Contact
                  </NavLink>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Navbar;