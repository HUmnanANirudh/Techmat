import Contact from "../components/cards/Contact";
import { Machinary } from "../components/Extra/Machinary";
import { Main } from "../components/Extra/Main";
import Footer from "../components/Footer/footer";
import Head from "../components/Hero/Head";
import Info from "../components/Home/Info";
import Navbar from "../components/Navbar/Navbar";
import Img13 from "../assets/13.webp";

export const MetalLab = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head img={Img13} text={"Metallurgy Lab"}/>
    <Main/>
    <Machinary/>
    <Contact/> 
    <Info/>
    <Footer/>
    </div>

  );
};
