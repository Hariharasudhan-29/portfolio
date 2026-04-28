"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-primary-500">Touch</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Feel free to reach out for collaborations or just a friendly hello!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl flex items-center gap-6 group hover:-translate-y-2 transition-transform">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full group-hover:bg-primary-500 group-hover:text-white transition-colors">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-400">Madurai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl flex items-center gap-6 group hover:-translate-y-2 transition-transform">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full group-hover:bg-primary-500 group-hover:text-white transition-colors">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email</h3>
                <a href="mailto:hariharasudhanvelmurugan@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors text-sm break-all">hariharasudhanvelmurugan@gmail.com</a>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl flex items-center gap-6 group hover:-translate-y-2 transition-transform">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full group-hover:bg-primary-500 group-hover:text-white transition-colors">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Phone</h3>
                <a href="tel:+919150742320" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">+91 91507 42320</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  placeholder="Hello Hari, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-bold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
