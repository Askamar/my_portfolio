import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: 'General Inquiry' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  // --------------------------------------------------------------------------------
  // EMAILJS CONFIGURATION (Loaded from .env)
  // --------------------------------------------------------------------------------
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setStatus('success');
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '', subject: 'General Inquiry' });
        setTimeout(() => setStatus('idle'), 3000);
      }, (error) => {
        setStatus('error');
        toast.error('Failed to send message. Please try again.');
        console.error(error.text);
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "amarkhatal2005@gmail.com", href: "mailto:amarkhatal2005@gmail.com", color: "text-blue-500" },
    { icon: Phone, label: "Phone", value: "+91 8788354024", href: "tel:+918788354024", color: "text-green-500" },
    { icon: MapPin, label: "Location", value: "Pune, Maharashtra", href: "#", color: "text-red-500" }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Info & Text */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  Let's Work <span className="gradient-text">Together</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group"
                  >
                    <div className={`w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">{item.label}</h4>
                      <p className="text-lg font-medium text-gray-900 dark:text-white">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Socials */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                <h4 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/Askamar" },
                    { icon: Linkedin, href: "https://linkedin.com/in/amarkhatal2005" },
                    { icon: MessageCircle, href: "#" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-all hover:scale-110"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-gray-800 relative">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 outline-none transition-all placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 outline-none transition-all placeholder:text-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 outline-none transition-all cursor-pointer text-gray-600 dark:text-gray-300"
                  >
                    <option>General Inquiry</option>
                    <option>Project Collaboration</option>
                    <option>Hiring Opportunity</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 outline-none transition-all resize-none placeholder:text-gray-400"
                    placeholder="Hi, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] ${status === 'success' ? 'bg-green-500 text-white' : status === 'error' ? 'bg-red-500 text-white' : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                >
                  {status === 'sending' ? (
                    "Sending..."
                  ) : status === 'success' ? (
                    "Message Sent!"
                  ) : status === 'error' ? (
                    "Try Again"
                  ) : (
                    <>Send Message <ArrowRight size={20} /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
