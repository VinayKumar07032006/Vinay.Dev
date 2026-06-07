import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-brand-dark transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight font-display mb-4 transition-colors duration-300">Get In Touch</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-left"
          >
            <div className="bg-white/50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900 p-6 sm:p-8 rounded-2xl shadow-lg dark:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 font-display transition-colors duration-300">Contact Information</h3>
              
              <div className="space-y-6">
                
                {/* Email Item */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-xl text-brand-primary transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider transition-colors">Email Address</h4>
                    <p className="text-zinc-850 dark:text-white text-sm font-semibold mt-0.5 transition-colors">vipvinaytanwar@gmail.com</p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-xl text-purple-650 dark:text-purple-400 transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider transition-colors">Phone Number</h4>
                    <p className="text-zinc-850 dark:text-white text-sm font-semibold mt-0.5 transition-colors">+91 98965 84024</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-xl text-brand-primary transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider transition-colors">Location</h4>
                    <p className="text-zinc-850 dark:text-white text-sm font-semibold mt-0.5 transition-colors">Bahadurgarh, Haryana, India</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900 p-6 sm:p-8 rounded-2xl space-y-6 text-left shadow-lg dark:shadow-xl transition-all duration-300">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-xl focus:outline-none focus:border-brand-primary text-zinc-800 dark:text-zinc-200 text-sm transition-all placeholder-zinc-400 dark:placeholder-zinc-600"
                  placeholder="John Doe"
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-xl focus:outline-none focus:border-brand-primary text-zinc-800 dark:text-zinc-200 text-sm transition-all placeholder-zinc-400 dark:placeholder-zinc-600"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 transition-colors">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-xl focus:outline-none focus:border-brand-primary text-zinc-800 dark:text-zinc-200 text-sm transition-all resize-none placeholder-zinc-400 dark:placeholder-zinc-600"
                  placeholder="Share details of your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-brand-primary/10"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
