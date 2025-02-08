import Head from "../components/Hero/Head";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Extra/Services";
import Contact from "../components/cards/Contact";
import Footer from "../components/Footer/footer";
import Info from "../components/Home/Info";

import Img9 from "../assets/9.webp";
const Service = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head
        img={Img9}
        text={"Our Services"}
      />
      <Services />
      <Contact />
      <Info/>
      <Footer/>
    </div>
  );
};
export default Service;
