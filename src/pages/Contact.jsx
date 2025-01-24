import Footer from "../components/Footer/footer";
import Head from "../components/Hero/Head";
import Info from "../components/Home/Info";
import Map from "../components/Maps/Map";
import Navbar from "../components/Navbar/Navbar";
import { memo } from "react";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head img={"https://www.unithermfurnaces.com/frontend/assets/images/contactBanner.webp"} text={"Contacts"}/>
      <Map/>
      <Info/>
      <Footer/>
    </div>
  );
};
export default memo(Contact);
