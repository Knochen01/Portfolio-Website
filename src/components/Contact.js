import React, { useState } from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    console.log("Form submitted");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div
      name="contact"
      className="w-ful h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/9104010e-38be-49fc-a2be-d6227c74a593"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an email -{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent text-lg">
              knochen2@gmail.com
            </span>
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-[#ccd6f6]"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          className="bg-[#ccd6f6]"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          onClick={handleSubmit}
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};
export default Contact;
