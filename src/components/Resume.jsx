import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Download, Eye, Check, Globe, Mail, Linkedin, Github } from 'lucide-react';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const summary = [
    { label: "Experience", value: "2+ Years" },
    { label: "Projects", value: "15+" },
    { label: "Certifications", value: "10" }
  ];

  return (
    <section id="resume" className="py-24 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: Content & CTA */}
            <div className="order-2 md:order-1 space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  My <span className="gradient-text">Resume</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  A concise overview of my professional journey, technical expertise, and academic milestones. Available for immediate download.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 border-y border-gray-200 dark:border-gray-700 py-6">
                {summary.map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlight List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">What's inside:</h4>
                <ul className="space-y-2">
                  {[
                    "Detailed Project Breakdowns & Case Studies",
                    "Comprehensive Skill Matrix (AI/ML, Web, DevOps)",
                    "Leadership Roles & Extracurriculars",
                    "Hackathon Wins & Research Contributions"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/Resume.pdf"
                  download="Amar_Khatal_Resume.pdf"
                  className="flex items-center gap-2 px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold shadow-lg shadow-primary-600/20 transition-all hover:scale-105"
                >
                  <Download size={20} />
                  Download CV
                </a>
                <button
                  onClick={() => window.open('/Resume.pdf', '_blank')}
                  className="flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  <Eye size={20} />
                  Preview
                </button>
              </div>
            </div>

            {/* Right: Visual Document Interaction */}
            <div className="order-1 md:order-2 flex justify-center perspective-1000">
              <motion.div
                initial={{ rotateY: 15, rotateX: 5, opacity: 0 }}
                animate={isInView ? { rotateY: -5, rotateX: 5, opacity: 1 } : { rotateY: 15, rotateX: 5, opacity: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className="relative group w-[340px] h-[480px]"
              >
                {/* Back Sheets (Stack Effect) */}
                <div className="absolute top-4 -right-4 w-full h-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl" />
                <div className="absolute top-2 -right-2 w-full h-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl" />

                {/* Main Resume Sheet */}
                <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col items-center pt-10 px-6 transition-transform group-hover:-translate-y-2 duration-300">

                  {/* Visual Preview of the Resume (Mock Layout) */}
                  <div className="w-full h-full opacity-80 pointer-events-none select-none flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-full mb-6"></div>
                    <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
                    <div className="w-1/2 h-4 bg-gray-100 dark:bg-gray-800/60 rounded mb-8"></div>

                    <div className="w-full space-y-4 px-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded"></div>
                        <div className="flex-1 space-y-2">
                          <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                          <div className="w-5/6 h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-secondary-100 dark:bg-secondary-900/30 rounded"></div>
                        <div className="flex-1 space-y-2">
                          <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                          <div className="w-5/6 h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                        <div className="flex-1 space-y-2">
                          <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                          <div className="w-5/6 h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-gray-900 dark:via-gray-900/50" />

                  {/* Hover Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 backdrop-blur-[1px]">
                    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-2 rounded-full font-bold shadow-xl border border-gray-100 dark:border-gray-700">
                      View Full Resume
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Digital Contacts Footer */}
          <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "LinkedIn", value: "/in/amarkhatal2005", icon: Linkedin, link: "https://linkedin.com/in/amarkhatal2005" },
              { label: "GitHub", value: "@Askamar", icon: Github, link: "https://github.com/Askamar" },
              { label: "Email", value: "amarkhatal2005...", icon: Mail, link: "mailto:amarkhatal2005@gmail.com" },
              { label: "Portfolio", value: "amark.me", icon: Globe, link: "#" }
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="p-2 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-lg group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  <contact.icon size={18} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-gray-500 font-medium">{contact.label}</div>
                  <div className="text-sm font-semibold truncate text-gray-900 dark:text-white">{contact.value}</div>
                </div>
              </a>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
