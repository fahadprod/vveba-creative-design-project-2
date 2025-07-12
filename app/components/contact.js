"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle submission logic here (e.g., send to API)
    console.log("Form submitted:", formData);

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="section-4" id="contact">
      <h1 className="section-heading">Contact</h1>
      <div className="form-container">
        <img src="images/form-img.png" className="form-img" alt="Contact Illustration" />
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
      <p className="copyright">
        Copyright &copy; Creative All Rights Reserved
      </p>
    </section>
  );
}
