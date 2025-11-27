'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className=" bg-white flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 md:gap-20">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's work<br />together
          </h2>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible.
          </p>
          
          {/* <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-500 text-sm mb-1">Email</p>
                <a href="mailto:hello@example.com" className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                  hello@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-500 text-sm mb-1">Location</p>
                <p className="text-gray-900 font-medium">Douala, Cameroon</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right Form */}
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-900 focus:border-gray-900 focus:bg-white transition-all outline-none"
                // placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-900 focus:border-gray-900 focus:bg-white transition-all outline-none"
                // placeholder="your.email@example.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-900 focus:border-gray-900 focus:bg-white transition-all outline-none resize-none"
                // placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex md:flex-row md:items-center md:justify-between gap-4">
                <button
              type="submit"
              className="w-full bg-primary rounded-full text-white py-4 px-6 font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
            >
              Send Message
              
            </button>
            <img src="/images/sh-b.png" alt="" className='w-14 h-auto'/>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;