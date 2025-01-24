const Mission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 w-full px-4 sm:px-10 md:px-16 lg:px-28 gap-x-8 gap-y-12 mb-16 md:mb-40">
      {/* Vision Section */}
      <div className="flex flex-col justify-center px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Vision</h2>
        <p className="text-gray-600 text-base md:text-lg">
          Be the leader in atmospheric heat treatment services by consistently
          delivering technically competent and reliable solutions that meet
          global standards.
        </p>
      </div>

      {/* Vision Image */}
      <div>
        <img
          src="https://www.unithermfurnaces.com/frontend/assets/images/mission.webp"
          className="w-full h-auto object-cover"
          alt="Mission Image"
        />
      </div>

      {/* Mission Image */}
      <div>
        <img
          src="https://www.unithermfurnaces.com/frontend/assets/images/vision1.webp"
          className="w-full h-auto object-cover"
          alt="Vision Image"
        />
      </div>

      {/* Mission Section */}
      <div className="flex flex-col justify-center px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Our Mission</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 text-base md:text-lg">
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
    </div>
  );
};

export default Mission;
