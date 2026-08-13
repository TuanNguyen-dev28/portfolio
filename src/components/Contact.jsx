import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { contactContent } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const githubUrl = contactContent.github !== "[YOUR GITHUB USERNAME]"
    ? `https://github.com/${contactContent.github}`
    : "#";

  const linkedinUrl = contactContent.linkedin !== "[YOUR LINKEDIN USERNAME]"
    ? `https://linkedin.com/in/${contactContent.linkedin}`
    : "#";

  return (
    <section id="contact" className="py-20 bg-[#0f172a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] via-[#8b5cf6]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{contactContent.title}</h2>
          <p className="section-subtitle mx-auto">{contactContent.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 flex items-start gap-4 hover:border-[#6366f1]/30 transition-colors">
              <div className="p-3 bg-[#6366f1]/10 rounded-lg">
                <Mail className="w-6 h-6 text-[#6366f1]" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Email</h3>
                <a 
                  href={`mailto:${contactContent.email}`}
                  className="text-gray-400 hover:text-[#6366f1] transition-colors"
                >
                  {contactContent.email}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 hover:border-[#6366f1]/30 transition-colors">
              <div className="p-3 bg-[#8b5cf6]/10 rounded-lg">
                <GithubIcon size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">GitHub</h3>
                <a 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#8b5cf6] transition-colors"
                >
                  @{contactContent.github}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 hover:border-[#6366f1]/30 transition-colors">
              <div className="p-3 bg-[#06b6d4]/10 rounded-lg">
                <LinkedinIcon size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">LinkedIn</h3>
                <a 
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#06b6d4] transition-colors"
                >
                  {contactContent.linkedin}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 hover:border-[#6366f1]/30 transition-colors">
              <div className="p-3 bg-yellow-500/10 rounded-lg">
                <MapPin className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Location</h3>
                <p className="text-gray-400">[YOUR LOCATION]</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#334155]/50 border border-[#475569] rounded-lg text-white placeholder-gray-500 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#334155]/50 border border-[#475569] rounded-lg text-white placeholder-gray-500 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#334155]/50 border border-[#475569] rounded-lg text-white placeholder-gray-500 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
