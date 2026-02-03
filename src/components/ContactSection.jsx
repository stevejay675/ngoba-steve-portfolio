'use client';

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      setLoading(false);
      return;
    }

    try {
      // THE EMAILJS MAGIC
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus({ type: 'success', message: 'Message sent to Steve! I will get back to you soon.' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({ type: 'error', message: 'Failed to send. Please try again or email me directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden" id="contact">
      {/* Your existing decorative background */}
      <div className="absolute hidden md:block top-0 -right-[30px] w-1/2 md:w-1/3 h-full bg-black -skew-x-12 translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-center md:hidden">
          <span className="text-lg font-medium text-gray-700">
            have a Project in mind?
          </span>
          <h2 className="text-5xl md:text-5xl font-black uppercase tracking-tighter mt-3 leading-none"
            style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
              letterSpacing: '-0.02em'
            }}
          >
            GET In
            {/* <br className="hidden md:block"/> */}
            <span className="text-yellow-500 pb-4 ml-3">TOUCH</span>
          </h2>
        </div>

          <div className='hidden md:block'>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none"
                style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.1)', letterSpacing: '-0.02em' }}>
              GET IN <br className="hidden md:block"/>
              <span className="text-yellow-500 pb-4">TOUCH</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Have a project in mind? I’m currently available for freelance work and full-stack roles. 
              Let’s talk about your idea.
            </p>
          </div>

          <div className="bg-white h-[700px]  border border-gray-300 py-8 px-6 md:px-8 md:p-10 rounded-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase  ml-1">Full Name</label>
                  <input 
                    required name="name" value={formData.name} onChange={handleChange}
                    type="text" placeholder="Steve jay"
                    className="w-full px-5 py-4 border-b-[1.5px] border-gray-600 focus:border-yellow-500 focus:outline-none transition-all text-gray-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase  ml-1">Email Address</label>
                  <input 
                    required name="email" value={formData.email} onChange={handleChange}
                    type="email" placeholder="john@company.com"
                    className="w-full px-5 py-4 border-b-[1.5px] border-gray-600 focus:border-yellow-500 focus:outline-none transition-all text-gray-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase  ml-1">Phone Number</label>
                <input 
                  required name="phone" value={formData.phone} onChange={handleChange}
                  type="tel" placeholder="+237 XXX XXX XXX"
                  className="w-full px-5 py-4 border-b-[1.5px] border-gray-600 focus:border-yellow-500 focus:outline-none transition-all text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase  ml-1">Message</label>
                <textarea 
                  required name="message" value={formData.message} onChange={handleChange}
                  rows={4} placeholder="Enter your message..."
                  className="w-full px-5 py-4 border-b-[1.5px] border-gray-600 focus:border-yellow-500 focus:outline-none transition-all text-gray-900 resize-none"
                />
              </div>

              {/* Status Feedback */}
              {status.message && (
                <div className={`p-4 rounded-sm text-sm font-bold flex gap-2 ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-600'}`}>
                  {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  {status.message}
                </div>
              )}

              <button 
                disabled={loading}
                type="submit"
                className="w-full py-5 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-yellow-500 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? (
                  <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}