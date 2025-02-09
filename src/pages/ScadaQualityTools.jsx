import Footer from "../components/Footer/footer";
import Head from "../components/Hero/Head";
import Info from "../components/Home/Info";
import Navbar from "../components/Navbar/Navbar";
import Img26 from "../assets/26.webp";
export const ScadaQualityTools = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head
        img={Img26}
        text={"SCADA System"}
      />
      <div className="flex flex-col justify-center items-start space-y-4 p-6 md:p-20">
  <div className="flex flex-col items-start justify-center space-y-4">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
      SCADA System
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-justify">
      All our heat treatment furnaces are installed with the state-of-the-art
      industrial control system, SCADA (Supervisory Control And Data
      Acquisition).
    </p>
    <p className="text-sm sm:text-base md:text-lg text-justify">
      SCADA is the most advanced industrial control system in the world which
      allows real-time heat treatment cycle monitoring. The process engineers
      use this software to keep furnace processing parameters within the desired
      limits.
    </p>
    {/* <p className="text-sm sm:text-base md:text-lg text-justify">
      Apart from legacy controllers Yokogawa, Eurotherm, and Siemens, most of
      our facilities have started using automatic visual controllers from Stange
      Elektronik, GmbH, Germany.
    </p> */}
  </div>
  <div className="my-10 md:my-20 w-full">
    <img
      src="http://www.ic-systems.ps/get_img?NrArticle=195&NrImage=1"
      alt="SCADA System"
      className="w-full object-cover shadow-lg my-4 max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
    />
  </div>
</div>

      <Info/>
      <Footer/>
    </div>
  );
};
