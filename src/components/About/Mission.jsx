const Mission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white w-full px-4 sm:px-10 md:px-16 lg:px-28 gap-x-8 gap-y-12 mb-16 md:my-40 p-4">
      <div className="flex flex-col justify-center px-4 md:px-0">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Vision</h2>
        <p className="text-gray-600 text-base mb-8">
          Be the leader in atmospheric heat treatment services by consistently
          delivering technically competent and reliable solutions that meet
          global standards.
        </p>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Our Mission</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 text-base">
          <li>
            We will continue to improve customer satisfaction through consistent
            quality, on-time delivery, and value addition.
          </li>
          <li>
            We will provide a safe working environment and nurture talent by
            providing opportunities for learning and growth.
          </li>
          <li>
            We will grow profitably through investments in our people, emerging
            technologies, infrastructure development, and new partnerships.
          </li>
          <li>
            We will continuously improve key business processes to meet & exceed
            expectations of all our stakeholders.
          </li>
        </ul>
      </div>
      <div className="relative flex flex-col sm:flex-col md:flex-row justify-center items-start gap-8">
        <img
          src="https://www.unithermfurnaces.com/frontend/assets/images/mission.webp"
          className="w-full p-8 sm:p-0 md:h-72 lg:h-80 object-cover rounded-md shadow-2xl sm:border-2 sm:border-blue-200"
          alt="Mission Image"
        />
        <div className="md:absolute lg:bottom-1/3 md:bottom-0 lg:right-0 lg:transform lg:translate-y-1/2">
          <img
            src="https://www.unithermfurnaces.com/frontend/assets/images/vision1.webp"
            className="hidden md:block w-full h-64 object-cover rounded-md shadow-2xl border-2 border-blue-200"
            alt="Vision Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
