import Head from "../components/Hero/Head";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Extra/Services";
import Contact from "../components/cards/Contact";
import Footer from "../components/Footer/footer";
import Info from "../components/Home/Info";
const Service = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head
        img={
          "https://accuratebearing.in/wp-content/uploads/2023/01/heattreatment.jpg"
        }
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
