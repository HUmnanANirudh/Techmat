import { Certificate } from "../components/Extra/Certificate";
import Footer from "../components/Footer/footer";
import Head from "../components/Hero/Head";
import Info from "../components/Home/Info";
import Navbar from "../components/Navbar/Navbar";
import Quality1 from "../assets/Quality.png";
export const Certificates = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head
        img={
          "https://png.pngtree.com/png-clipart/20230527/original/pngtree-abstract-certificate-border-or-frame-png-image_9171867.png"
        }
        text={"Certifications"}
      />
      <Certificate />
      <div className="flex flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full p-4 md:p-8">
        <img
          src="https://logowik.com/content/uploads/images/927_iso9001_logo.jpg"
          alt="ISO 9001"
          className="w-48 sm:w-64 md:w-80 lg:w-96 object-contain"
        />
        <img
          src={Quality1}
          alt="Quality"
          className="w-48 sm:w-64 md:w-72  object-contain"
        />
      </div>
      <Info />
      <Footer />
    </div>
  );
};
