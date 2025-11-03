import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Calendar, User, Award } from 'lucide-react';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });





  const resumeStats = [
    {
      icon: FileText,
      label: "Pages",
      value: "2",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      label: "Last Updated",
      value: "Jan 2025",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      label: "Certifications",
      value: "8+",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: User,
      label: "Experience",
      value: "2+ Years",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const resumeHighlights = [
    "AI/ML and Data Science expertise",
    "Full-stack development skills",
    "8+ professional certifications",
    "Active in robotics and automation",
    "Strong academic performance (8.91 CGPA)",
    "Leadership and team collaboration experience"
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/20 dark:via-gray-900 dark:to-secondary-900/20">
      <div className="container-custom section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              My <span className="gradient-text">Resume</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            >
              View my comprehensive resume showcasing my skills, experience, and achievements
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Resume Preview & Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Resume Preview Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Amar Khatal
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">
                    AI Engineer | Software Developer | Data Analyst
                  </p>
                </div>

                {/* Resume Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {resumeStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Resume Highlights */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {resumeHighlights.map((highlight, index) => (
                      <motion.li
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Resume Content Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Resume Sections Preview */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Resume Sections
                </h4>
                <div className="space-y-3">
                  {[
                    { section: "Professional Summary", status: "Complete" },
                    { section: "Technical Skills", status: "Complete" },
                    { section: "Work Experience", status: "Complete" },
                    { section: "Education", status: "Complete" },
                    { section: "Certifications", status: "Complete" },
                    { section: "Projects", status: "Complete" },
                    { section: "Achievements", status: "Complete" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.section}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {item.section}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 text-xs font-semibold rounded-full">
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 border border-primary-200 dark:border-primary-800">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h4>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Email:</span>
                    <span>amarkhatal2005@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Phone:</span>
                    <span>+91 8788354024</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Location:</span>
                    <span>Pune, Maharashtra, India</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">LinkedIn:</span>
                    <span>linkedin.com/in/amarkhatal2005</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">GitHub:</span>
                    <span>github.com/Askamar</span>
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-center p-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl text-white"
              >
                <h4 className="text-lg font-bold mb-2">
                  Ready to Connect?
                </h4>
                <p className="text-sm mb-4 opacity-90">
                  View my resume and let's discuss how I can contribute to your team!
                </p>
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
