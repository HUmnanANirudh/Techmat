import React from "react";
const Mission = () => {
  return (
    <div className="grid grid-cols-2 bg-gray-50 w-full px-28 mb-40">
      <div className="flex flex-col justify-center px-4">
        <h2 className="text-5xl font-bold mb-6">Vision</h2>
        <p className="text-gray-600 text-base">
          Be the leader in atmospheric heat treatment services by consistently
          delivering technically competent and reliable solutions that meet
          global standards.
        </p>
      </div>
      <div className="f">
        <img
          src="https://www.unithermfurnaces.com/frontend/assets/images/mission.webp"
          className="w-full object-cover"
        />
      </div>
      <div className="">
        <img
          src="https://www.unithermfurnaces.com/frontend/assets/images/vision1.webp"
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-10">
        <h2 className="text-5xl font-bold mb-6">Our Mission</h2>
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
    </div>
  );
};

export default Mission;
