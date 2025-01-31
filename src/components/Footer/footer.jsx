import {
  MdOutlineLocationOn,
  MdLocalPhone,
  MdMailOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
const scrollToTop = (delay = 500) => {
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, delay);
};
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className=" flex flex-col justify-stretch space-y-2 px-2">
            <h4 className="text-lg font-semibold text-white mb-4 ">
              About Company
            </h4>
            <p className="flex justify-center items-start gap-2">
              <span className="pt-1">
                <MdOutlineLocationOn />
              </span>{" "}
              G-1/571 Industrial Area Phase I, Bhiwadi 301019 Rajasthan)
            </p>
            <p className="flex items-center gap-2">
              <span>
                <MdLocalPhone />
              </span>
              +91-8094444634
            </p>
            <p className="flex items-center gap-2 hover:text-blue-400">
              <span>
                <MdMailOutline />
              </span>
              <a href="mailto:info@tttpl.in" className="pb-1">
                info@tttpl.in
              </a>
            </p>
          </div>
          <div className="px-2">
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Carburizing</li>
              <li>Carbonitriding</li>
              <li>Gas Nitriding</li>
              <li>Gas Nitro-Carburizing</li>
              <li>Complete Heat Treatment Solutions</li>
              <li>Steam treatment Process</li>
            </ul>
          </div>
          <div className="px-2">
            <h4 className="text-lg font-semibold text-white mb-4">
              Infra & Locations
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/infrasturcture"
                  onClick={() => scrollToTop()}
                  className="cursor-pointer hover:text-blue-400"
                >
                  Our Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => scrollToTop()}
                  className="cursor-pointer hover:text-blue-400"
                >
                  Unit I Bhiwadi
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => scrollToTop()}
                  className="cursor-pointer hover:text-blue-400"
                >
                  Unit II Bhiwadi
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => scrollToTop()}
                  className="cursor-pointer hover:text-blue-400"
                >
                  Unit III Khushkhera
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-2">
            <h4 className="text-lg font-semibold text-white mb-4">Quality</h4>
            <ul className="space-y-2">
              <li>Metallurgy Lab</li>
              <li>Certificates</li>
              <li>SCADA & Quality Tools</li>
              <li>Quality Policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 flex justify-center text-sm">
          <p>© Copyright {year} www.techmatheattreaters.in</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
