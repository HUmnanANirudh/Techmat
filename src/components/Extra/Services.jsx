import Process from "../../assets/Process.webp"
const Services = () => {
    return (
      <div className="flex flex-col justify-center items-center p-6">
        <div className="flex flex-col lg:flex-row justify-center items-center mb-10">
          <div className="flex justify-center items-center mb-6 lg:mb-0 lg:mr-10 p-2">
            <img
              src={Process}
              alt="Complete Heat Treatment Solutions"
              className="w-full max-w-[500px] h-auto object-cover border-2 rounded-lg scale-95 border-blue-300 "
            />
          </div>
          <div className="max-w-xl text-start lg:text-left lg:mb-10">
            <h1 className="text-2xl font-bold mb-4">
              Complete Heat Treatment Solutions
            </h1>
            <p className="mb-4">
              With decades of experience in the field of industrial heat treatment
              services, we're renowned for our expertise and dedication to
              quality.
            </p>
            <p className="mb-4">
              From stress-relieving and annealing to hardening and tempering, our
              comprehensive heat treatment processes are available at multiple
              locations, tailored to your needs.
            </p>
            <p>
              Our state-of-the-art facilities and skilled technicians ensure
              precise and efficient project execution. Our services are proven to
              enhance critical component performance in a wide range of sectors
              such as oil, gas, manufacturing, and construction.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:p-12 lg:p-4 max-w-[1200px]">
          <div>
            <h2 className="text-xl font-semibold mb-4">Heat Treatment Technologies</h2>
            <ul className="list-disc pl-5">
              <li>Atmospheric Heat Treatment</li>
              <li>Vacuum Heat Treatment</li>
              <li>Steam Treatment</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Customer Contact Points</h2>
            <ul className="list-disc pl-5">
              <li>Sales & Marketing</li>
              <li>Engineering</li>
              <li>Quality</li>
              <li>Supply chain / Customer Service Support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Specialties</h2>
            <ul className="list-disc pl-5">
              <li>Plants at multiple locations</li>
              <li>Strong team of qualified metallurgists</li>
              <li>Customer specific solutions</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Value Added Services</h2>
            <ul className="list-disc pl-5">
              <li>Shot blasting</li>
              <li>Basic final inspection</li>
              <li>Customer specific packaging</li>
              <li>Logistics Management</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quality Management</h2>
            <ul className="list-disc pl-5">
              <li>ISO 9001</li>
              <li>CQI-9 Certification (by tier-1 & OEMs)</li>
              <li>Customer audits</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Technical Support</h2>
            <ul className="list-disc pl-5">
              <li>Technical recommendations</li>
              <li>Development and qualification of new products/processes</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  