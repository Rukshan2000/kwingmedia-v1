'use client';

import { useState } from 'react';

import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: 'Digital Marketing',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add backend integration for form submission
    alert('Thank you for reaching out! We will be in touch soon.');
    setFormData({
      fullName: '',
      email: '',
      service: 'Digital Marketing',
      message: '',
    });
  };

  return (
    <div className="flex flex-col gap-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-10 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700/50">
      <div>
        <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">Send us a message</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>
      <form className="flex flex-col gap-6 mt-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Full Name</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 h-12 px-4 transition-all placeholder-slate-500"
              placeholder="John Doe"
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Email Address</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 h-12 px-4 transition-all placeholder-slate-500"
              placeholder="john@company.com"
              required
            />
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Service Interested In</span>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 h-12 px-4 transition-all"
          >
            <option>Digital Marketing</option>
            <option>IT Solutions</option>
            <option>Event Management</option>
            <option>General Inquiry</option>
            <option>Audio Production</option>

          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 p-4 transition-all resize-none placeholder-slate-500"
            placeholder="How can we help you?"
            rows={5}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 mt-4 transform hover:scale-105 duration-200"
        >
          <span>Send Message</span>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
