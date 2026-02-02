'use client';

import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';

export default function ContactSection({ preselectedService }) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Cloud Infrastructure',
    message: ''
  });

  // Status States
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Simple Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Request sent successfully!' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: preselectedService || 'Cloud Infrastructure',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Something went wrong');
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden" id="contact">
      <div className="absolute hidden  md:block top-0 -right-[30px] w-1/2 md:w-1/3 h-full bg-black -skew-x-12 translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none"
            style={{
              textShadow: '4px 4px 0px rgba(0,0,0,0.5)',
              letterSpacing: '-0.02em'
            }}
          >
            GET IN
            <br className="hidden md:block"/>
            <span className="text-yellow-500 pb-4 ml-3 md:ml-0">TOUCH</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              I am open to any questions, projects, or projects ideas, or if you just want to say "Hello", get to me through any of the provided contact info.
            </p>
          </div>

          <div className="bg-white shadow py-8 px-6 md:px-8 md:p-10 rounded-md border border-gray-100 min-h-[700px]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white ml-1">Full Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4  focus:border-primary-500 focus:bg-white focus:outline-none  border-b border-gray-600   transition-all text-gray-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white ml-1">Email Address</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full px-5 py-4  border-b focus:border-primary-500 focus:bg-white focus:outline-none border-gray-600 transition-all text-gray-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white ml-1">Phone Number</label>
                <input 
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel" 
                  placeholder="+237 XXX XXX XXX"
                  className="w-full px-5 py-4  border-b border-gray-600  focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-gray-900"
                />
              </div>

              {/* <div className="space-y-2">
                <label className="text-sm font-bold text-white ml-1">Select Service</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={!!preselectedService}
                  className={`w-full px-5 py-4   border-b border-gray-600  focus:outline-none transition-all text-gray-900  ${preselectedService ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <option>Cloud Infrastructure</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Hardware Procurement</option>
                  <option>IT Training & Consulting</option>
                  <option>CCTV & Security</option>
                </select>
              </div> */}

              <div className="space-y-2">
                <label className="text-sm font-bold text-white ml-1">Message</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4   border-b border-gray-600 focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-gray-900 resize-none"
                />
              </div>

              {/* Status Feedback */}
              {status.message && (
                <div className={`p-4 rounded-md text-sm font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.message}
                </div>
              )}

              <button 
                disabled={loading}
                type="submit"
                className="w-full py-4 bg-yellow-500 text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-primary-700 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>Processing... <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : (
                  <>Send Request <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}