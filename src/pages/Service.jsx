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
          "https://www.dl.dropboxusercontent.com/scl/fi/bqmb6kec505pakp42pkj8/WhatsApp-Image-2025-02-04-at-20.36.35_d2ecb436.webp?rlkey=tpshcyaebf3rzvptufn6gfi54&st=jvgkav80&dl=0"
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
