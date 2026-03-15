'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

// Credentials from environment variables
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: 'Digital Marketing',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS on component mount
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.fullName || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Check if EmailJS is configured
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      toast.error('Email service is not configured yet. Please set up EmailJS credentials in .env.local');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: 'kwingsmedia@gmail.com',
          from_name: formData.fullName,
          from_email: formData.email,
          service_type: formData.service,
          message: formData.message,
        }
      );

      toast.success('Thank you for reaching out! We will be in touch soon.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        service: 'Digital Marketing',
        message: '',
      });
    } catch (error) {
      console.error('Email send failed:', error);
      toast.error('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
          className="bg-primary hover:bg-primary/90 disabled:bg-primary/60 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 mt-4 transform hover:scale-105 duration-200"
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
