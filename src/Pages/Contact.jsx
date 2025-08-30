import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!"); 
    // Later we’ll connect this to email (EmailJS or backend)
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h2>
      <p className="mb-6 text-gray-700">
        Reach out to us for collaborations, training programs, or inquiries.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded-lg p-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* ✅ Button Fixed */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 text-gray-700">
        <p><span className="font-semibold">Email:</span> contact@futuristichubspot.com</p>
        <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
        <p><span className="font-semibold">Address:</span> Hyderabad, Telangana, India</p>
      </div>
    </div>
  );
}
