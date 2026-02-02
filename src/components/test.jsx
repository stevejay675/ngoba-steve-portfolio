'use client';

import React, { useState } from 'react';

export default function ContactSection9({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Cloud Infrastructure',
    message: ''
  });

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

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({ type: 'error', message: 'Missing required fields' });
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
        setStatus({ type: 'success', message: 'Sent successfully' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: preselectedService || 'Cloud Infrastructure',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Failed');
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-white" id="contact">
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* Left side - Oversized text */}
        <div className="relative bg-primary/90 p-8 md:p-16 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute text-9xl font-black text-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  fontFamily: '"Arial Black", sans-serif'
                }}
              >
                ?
              </div>
            ))}
          </div>
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-[clamp(4rem,15vw,12rem)] font-black leading-[0.85] mb-8 text-white uppercase tracking-tighter"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            >
              Got
              <br />
              <span className="text-black">An</span>
              <br />
              Idea
              <span className="text-black">?</span>
            </h2>

            <div className="space-y-4 text-white">
              <div className="flex items-start gap-4 bg-black/20 p-4">
                <span className="text-3xl">→</span>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1">Drop a line</p>
                  <a href="mailto:hello@portfolio.com" className="text-lg font-bold hover:underline break-all">
                    hello@portfolio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-black/20 p-4">
                <span className="text-3xl">→</span>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1">Call me</p>
                  <a href="tel:+237XXXXXXXXX" className="text-lg font-bold hover:underline">
                    +237 XXX XXX XXX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-black/20 p-4">
                <span className="text-3xl">→</span>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1">Based in</p>
                  <p className="text-lg font-bold">Douala, Cameroon</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-black text-white">
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                "I work with ambitious people who want to build 
                something exceptional. Let's make it happen."
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-white p-8 md:p-16 flex items-center">
          <div className="w-full max-w-xl mx-auto">
            
            <div className="mb-12">
              <div className="w-16 h-2 bg-primary/90 mb-6"></div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Arial Black", sans-serif' }}>
                Fill this out
              </h3>
              <p className="text-gray-600">
                I'll get back to you within 24 hours. Promise.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div>
                <label className="block text-sm font-bold mb-3 uppercase tracking-wider">
                  What's your name? *
                </label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-black focus:outline-none text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 uppercase tracking-wider">
                  Your email *
                </label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-black focus:outline-none text-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold mb-3 uppercase tracking-wider">
                    Phone *
                  </label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-black focus:outline-none text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-3 uppercase tracking-wider">
                    Service
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={!!preselectedService}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-black focus:outline-none text-lg"
                  >
                    <option>Cloud Infrastructure</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Hardware Procurement</option>
                    <option>IT Training & Consulting</option>
                    <option>CCTV & Security</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 uppercase tracking-wider">
                  Tell me everything *
                </label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-black focus:outline-none text-lg resize-none"
                />
              </div>

              {status.message && (
                <div className={`p-4 ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} font-bold text-sm`}>
                  {status.message}
                </div>
              )}

              <button 
                disabled={loading}
                type="submit"
                className="group w-full py-5 bg-black text-white font-black text-lg uppercase tracking-wider hover:bg-[#FF4444] transition-colors disabled:opacity-50 relative overflow-hidden"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                <span className="relative z-10">
                  {loading ? 'Sending...' : 'Send it →'}
                </span>
                <div className="absolute inset-0 bg-primary/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </form>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Or just email me directly
              </p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}