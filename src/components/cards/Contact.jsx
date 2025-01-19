import { Link } from "react-router-dom";
import Button2 from "../button/Button2";

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const Contact = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center bg-blue-800 pr-4">
        <div className="">
          <img
            src="https://www.unithermfurnaces.com/frontend/assets/images/quality.webp"
            className="w-full h-44"
          />
        </div>
        <div className="flex justify-between p-12">
          <div className="flex flex-wrap">
            <h1 className="text-2xl font-extrabold text-white">
              Delivering top-notch heat treatment
              <br /> solutions
            </h1>
          </div>
        </div>
        <Link to={"/contact"} onClick={()=>scrollToTop()}>
        <Button2 text={"Contact us"}/>
        </Link>
      </div>
    </div>
  );
};
export default Contact;
