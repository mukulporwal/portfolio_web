// import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "7dcaa93e-6911-4181-89f4-02519fd18927",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
    return (
    <section id="contact" className="flex items-center justify-center px-6 py-22 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
            <div className="absolute top-1/20 left-1/10 w-[350px] h-[350px] bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-1/15 right-1/6 w-[400px] h-[400px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute top-1/20 right-1/10 w-[350px] h-[350px] bg-gradient-to-br from-blue-200 to-yellow-400 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-10 ">
            {/* Header */}
            <p className="text-gray-600 font-light text-xl  mb-12">Connect with Me</p>

            <div className=" conatiner mx-auto max-w-6xl grid lg:grid-cols-2 gap-15 items-start">
                {/* Left Side - Contact Info */}
                <div className="space-y-4 ">
                    <div>
                        <h2 className="text-4xl md:text-4xl font-medium leading-tight text-black-600">
                            Let's{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-orange-600 to-yellow-600 bg-clip-text  text-transparent">talk</span>
                        </h2>
                        <p className="text-lg text-gray-600 font-light  leading-relaxed mb-8 mt-3">
                            “Currently available for new opportunities. Message me anytime with a project you’d like to create.”
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                    <div className="flex items-center gap-2 group">
                        <div className=" rounded-lg flex items-center justify-center ">
                            <IoMailOutline className="w-6 h-6" />   
                        </div>
                        <span className=" text-lg text-gray-700 font-light ">mukulporwal05@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-2 group">
                        <div className="rounded-lg flex items-center justify-center ">
                            <IoCallOutline className="w-5 h-5" />   
                        </div>
                        <span className="text-lg text-gray-700 font-light ">+91-960-256-2950</span>
                    </div>

                    <div className="flex items-center gap-2 group">
                        <div className="rounded-lg flex items-center justify-center ">
                            <CiLocationOn className="w-7 h-6" />
                        </div>
                        <span className="text-lg text-gray-700 font-light ">Baran, Rajasthan</span>
                    </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="rounded-lg p-8 border border-gray-500 bg-gradient-to-r from-blue-50 via-orange-50 to-yellow-50">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-md text-gray-600 mb-2">
                            Your Name
                            </label>
                            <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full bg-gradient-to-r from-red-100 via-orange-50 to-yellow-50 border border-gray-300 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                            required
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-md text-gray-600 mb-2">
                            Your Email
                            </label>
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full  bg-gradient-to-r from-red-100 via-orange-50 to-yellow-50 border border-gray-300 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                            required
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-md text-gray-600 mb-2">
                            Write your message here
                            </label>
                            <textarea
                            name="message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="w-full bg-gradient-to-r from-red-100 via-orange-50 to-yellow-50 border border-gray-300 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                            required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit" disabled={isSubmitting}
                            className="px-8 py-3 bg-gradient-to-r from-blue-300 via-yellow-150 to-orange-200 font-light rounded-full 
                             hover:shadow-xl hover: transition-all duration-300 hover:scale-105"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
};

