import Contact from "../components/cards/Contact";
import { Machinary } from "../components/Extra/Machinary";
import { Main } from "../components/Extra/Main";
import Footer from "../components/Footer/footer";
import Head from "../components/Hero/Head";
import Info from "../components/Home/Info";
import Navbar from "../components/Navbar/Navbar";


export const MetalLab = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head img={"https://media.istockphoto.com/id/496402539/photo/glow-light-of-petrochemical-industry-on-sunset.jpg?s=612x612&w=0&k=20&c=IRm_h6-2jaBgg5lDkjkETveMR9pm3FaqCnhQl7LLiv8="} text={"Metallurgy Lab"}/>
    <Main/>
    <Machinary/>
    <Contact/> 
    <Info/>
    <Footer/>
    </div>

  );
};
