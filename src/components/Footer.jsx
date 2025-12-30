import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ArrowUpRight, Terminal } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-900 pt-20 pb-10 relative overflow-hidden">

      <div className="container-custom section-padding relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
              <div className="w-8 h-8 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center">
                <Terminal size={18} className="text-white dark:text-gray-900" />
              </div>
              Amar Khatal
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm text-lg leading-relaxed">
              Engineering robust AI solutions and scalable web systems. Let's build the future together.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/Askamar" },
                { icon: Linkedin, href: "https://linkedin.com/in/amarkhatal2005" },
                { icon: Mail, href: "mailto:amarkhatal2005@gmail.com" },
                { icon: Twitter, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              {['About', 'Experience', 'Projects', 'Resume', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status Column */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Open to Work</span>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                <p className="text-xs text-gray-500 mb-1">Current Focus</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Generative AI & Enterprise Systems</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Amar Khatal. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
