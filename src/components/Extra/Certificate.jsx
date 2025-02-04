import certificate from "../../assets/ISO_CERTIFICATE.pdf"
import ImageCertificate from "../../assets/ISO_CERTIFICATE.webp"
export const Certificate = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 p-6 md:p-20 my-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Our Certifications
      </h1>
      <div className="flex justify-center items-center text-center">
      <p className="text-lg md:text-xl max-w-3xl text-justify">
        At Techno Thermal Treaters Pvt. Ltd., we are committed to maintaining
        the highest standards of quality. We are ISO certified, ensuring our
        processes, services, and products meet rigorous international quality
        standards. Our certification demonstrates our dedication to excellence,
        customer satisfaction, and continual improvement.
      </p>
      </div>
      <div className="w-full flex justify-center">
        <img
          src={ImageCertificate}
          alt="ISO Certification"
          className="md:w-1/3 border-2 border-gray-500 shadow-lg"
        />
      </div>
      <div>
      <a
        href={certificate}
        download
        className="bg-white text-black border-2 border-gray-200 font-semibold py-2 px-4 rounded hover:bg-blue-500 hover:border-gray-200 hover:text-white transition duration-300"
      >
        Download ISO Certificate
      </a>
      </div>
    </div>
  );
};
