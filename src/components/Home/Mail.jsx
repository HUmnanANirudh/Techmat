import { useState } from "react";
import { motion } from "motion/react";
const Mail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Request submitted!");
    setFormData({
      name: "",
      email: "",
      mobile: "",
      subject: "",
      comments: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="container mx-auto p-12 sm:p-6 bg-gray-100 rounded-lg w-full md:w-[700px] shadow-xl mt-10"
    >
      <h3 className="text-3xl font-bold mb-6 text-center">Request A Quote</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-center items-center sm:gap-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            value={formData.name}
            onChange={handleChange}
            className="w-full md:w-[48%] p-3 border border-gray-300 rounded mb-4"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            value={formData.email}
            onChange={handleChange}
            className="w-full md:w-[48%] p-3 border border-gray-300 rounded mb-4"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center sm:gap-4">
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Your mobile number.."
            value={formData.mobile}
            onChange={handleChange}
            className="w-full md:w-[48%] p-3 border border-gray-300 rounded mb-4"
            required
          />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject.."
            value={formData.subject}
            onChange={handleChange}
            className="w-full md:w-[48%] p-3 border border-gray-300 rounded mb-4"
          />
        </div>
        <div className="flex justify-center w-full items-center">
          <textarea
            id="comments"
            name="comments"
            placeholder="Type your comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full h-[150px] p-3 border border-gray-300 rounded mb-6 resize-none"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit request"
          className="w-full bg-blue-600 text-white p-3 font-bold rounded cursor-pointer hover:bg-blue-700"
        />
      </form>
    </motion.div>
  );
};

export default Mail;
