import Footer from "../components/Footer/footer";
import Head from "../components/Hero/Head";
import Info from "../components/Home/Info";
import Navbar from "../components/Navbar/Navbar";
import Quality1 from "../assets/Quality.png";
import QualityPolicy from "../assets/QUALITY_POLICY.webp";
import Policy from "../assets/QUALITY_POLICY.pdf";
const Quality = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head
        img={
          "https://thumbs.dreamstime.com/b/compliance-rule-law-regulation-graphic-interface-business-quality-policy-planning-to-meet-international-standard-184946168.jpg"
        }
        text={"Quality Policy"}
      />
      <div className="flex flex-col justify-center items-start space-y-6 p-6 md:p-20 my-10 max-w-7xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-center w-full md:gap-10 space-y-10 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-start mb-6">
              Quality Policy
            </h1>
            <p className="text-base md:text-lg text-justify mt-4">
              At Techno Thermal Treaters Pvt. Ltd., we are committed to
              delivering products and services of the highest quality. Our
              Quality Policy ensures that we meet and exceed customer
              expectations, while continually improving our processes and
              quality management systems.
            </p>
            <div className="flex flex-col space-y-4 mt-4">
              <p className="text-base md:text-lg text-justify">
                Our company, Techno Thermal Treaters Pvt. Ltd., is committed to
                fulfilling customer requirements by providing the best quality
                products and services within our scope, which includes "Heat
                Treatment of Ferrous and Non-Ferrous Components for Automotive
                and other Engineering Industries."
              </p>
              <p className="text-base md:text-lg text-justify">
                We achieve this by maintaining the effectiveness of our quality
                management system through employee motivation and by
                establishing quality objectives at all levels, which drive
                continuous improvement across our operations.
              </p>
              <p className="text-base md:text-lg text-justify">
                Additionally, we work closely with our stakeholders to
                understand their needs and expectations and share our Quality
                Policy with all interested parties to ensure that we
                consistently meet these expectations.
              </p>
            </div>
            <div className="flex flex-col space-y-4 mt-6">
              <h2 className="text-2xl font-semibold">
                Key Points of Our Quality Policy:
              </h2>
              <ul className="list-disc ml-5 text-base md:text-lg">
                <li>Developing a productive work environment</li>
                <li>Ensuring continual improvement</li>
                <li>On-time delivery of products and services</li>
                <li>Employee engagement in the quality process</li>
                <li>Adhering to Quality Management Systems (QMS)</li>
                <li>Addressing risks and opportunities in our processes</li>
                <li>Considering the expectations of interested parties</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center space-y-6 mt-10 md:mt-0">
            <img
              src={QualityPolicy}
              alt="Quality Policy"
              className="w-full border-2 border-gray-200 shadow-lg max-w-lg object-contain"
            />
            <a
              href={Policy}
              download
              className="bg-white text-black border-2 border-gray-500 font-semibold py-2 px-4 rounded hover:bg-blue-500 hover:border-gray-200 hover:text-white transition duration-300"
            >
              Download Our Policy
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full p-4 md:p-8">
          <img
            src="https://logowik.com/content/uploads/images/927_iso9001_logo.jpg"
            alt="ISO 9001"
            className="w-48 sm:w-64 md:w-80 lg:w-96 object-contain"
          />
          <img
            src={Quality1}
            alt="Quality"
            className="w-48 sm:w-64 md:w-72 object-contain"
          />
        </div>
      </div>
      <Info/>
      <Footer/>
    </div>
  );
};
export default Quality;
