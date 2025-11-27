'use client'

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative bg-gray-50 p-4 md:p-8 rounded-3xl">
      {/* Spacer for elevated form */}
      <div className="h-32 md:h-40"></div>
      
      {/* Footer Section */}
      <footer className="relative bg-black overflow-hidden rounded-3xl">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          // style={{
          //   backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center'
          // }}
        ></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
            
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Your Company</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Building digital experiences that inspire and empower businesses worldwide.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/60">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>support@domain.gt</span>
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>(+502) 502 40 37 18</span>
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>4ta Calle 7-53 Zona 2<br/>CP 01002, Guatemala</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>

       

      </footer>
    </div>
  );
};

export default Footer;