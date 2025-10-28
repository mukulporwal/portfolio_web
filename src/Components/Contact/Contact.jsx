// import React from 'react'
import mailIcon from "../../assets/mail.png";
import callIcon from "../../assets/call.png";
import locationIcon from "../../assets/location.png";
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
    <section id="contact" className="py-22 px-6  text-white">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 ">
                <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">Connect With Me</span>
            </h2>
            </div>

            <div className=" conatiner mx-auto max-w-6xl grid lg:grid-cols-2 gap-15 items-start">
                {/* Left Side - Contact Info */}
                <div className="space-y-4 ">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Let's talk</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            “Currently available for new opportunities. Message me anytime with a project you’d like to create.”
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12  rounded-lg flex items-center justify-center ">
                        <img 
                            src={mailIcon} 
                            alt="" 
                            className="w-9 h-9"
                        />
                        
                        </div>
                        <span className="text-gray-300">mukulporwal05@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12  rounded-lg flex items-center justify-center ">
                        <img 
                            src={callIcon} 
                            alt="" 
                            className="w-8 h-8"
                        />
                        </div>
                        <span className="text-gray-300">+91-960-256-2950</span>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12  rounded-lg flex items-center justify-center ">
                        <img 
                            src={locationIcon} 
                            alt="" 
                            className="w-7 h-8"
                        />
                        </div>
                        <span className="text-gray-300">Baran, Rajasthan</span>
                    </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className=" rounded-2xl p-8 border border-gray-800">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-md text-gray-400 mb-2">
                            Your Name
                            </label>
                            <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                            required
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-md text-gray-400 mb-2">
                            Your Email
                            </label>
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                            required
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-md text-gray-400 mb-2">
                            Write your message here
                            </label>
                            <textarea
                            name="message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                            required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit" disabled={isSubmitting}
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-orange-500 font-light rounded-full 
                             hover:shadow-lg hover: transition-all duration-300 hover:scale-105"
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

