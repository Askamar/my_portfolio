import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certificates = [
    {
      id: 1,
      title: "AI Aware Badge",
      issuer: "Intel",
      date: "AUG 2025",
      description: "Comprehensive understanding of AI fundamentals and applications in real-world scenarios.",
      category: "AI/ML",
      color: "from-blue-500 to-blue-600",
      logo: "Intel",
      featured: true
    },
    {
      id: 2,
      title: "Cisco IoT Fundamentals",
      issuer: "Cisco",
      date: "JUL 2025",
      description: "Fundamentals of Internet of Things, networking protocols, and IoT security principles.",
      category: "IoT",
      color: "from-green-500 to-green-600",
      logo: "Cisco",
      featured: true
    },
    {
      id: 3,
      title: "MongoDB Introduction",
      issuer: "MongoDB University",
      date: "Jun 2025",
      description: "Introduction to NoSQL databases, MongoDB operations, and data modeling techniques.",
      category: "Database",
      color: "from-green-600 to-green-700",
      logo: "MongoDB",
      featured: false
    },
    {
      id: 4,
      title: "NVIDIA AI for All",
      issuer: "NVIDIA",
      date: "May 2025",
      description: "Comprehensive AI education covering machine learning, deep learning, and AI applications.",
      category: "AI/ML",
      color: "from-green-500 to-green-600",
      logo: "NVIDIA",
      featured: true
    },
    {
      id: 5,
      title: "Janatics Challenge",
      issuer: "Janatics Automation",
      date: "May 2025",
      description: "Competition in automation and robotics, showcasing practical problem-solving skills.",
      category: "Robotics",
      color: "from-purple-500 to-purple-600",
      logo: "Janatics",
      featured: false
    },
    {
      id: 6,
      title: "SQL Certification",
      issuer: "HackerRank",
      date: "May 2025",
      description: "Advanced SQL skills including complex queries, database optimization, and data analysis.",
      category: "Database",
      color: "from-orange-500 to-orange-600",
      logo: "HackerRank",
      featured: false
    },
    {
      id: 7,
      title: "NPTEL Soft Skills",
      issuer: "NPTEL",
      date: "May 2024",
      description: "Professional development focusing on communication, leadership, and teamwork skills.",
      category: "Soft Skills",
      color: "from-indigo-500 to-indigo-600",
      logo: "NPTEL",
      featured: false
    },
    {
      id: 8,
      title: "Excel for Data Analysis",
      issuer: "LinkedIn Learning",
      date: "May 2024",
      description: "Advanced Excel techniques for data analysis, visualization, and business intelligence.",
      category: "Data Analysis",
      color: "from-green-500 to-green-600",
      logo: "LinkedIn",
      featured: false
    },
    {
      id: 9,
      title: "Adobe India hackathon",
      issuer: "Adobe",
      date: "Aug 2025",
      description: "Participation in the Adobe India hackathon, showcasing creativity and problem-solving skills.",
      category: "Hackathon",
      color: "from-purple-500 to-purple-600",
      logo: "Adobe",
      featured: false
    },
    {
      id: 10,
      title: "Red Hat Application Development I:Programming in Java EE(AD 183-RHA)-ver.7.0",
      issuer: "Red Hat",
      date: "OCT 2025",
      description: "Advanced Java EE programming skills, focusing on enterprise application development and system architecture.",
      category: "Java",
      color: "from-green-500 to-green-600",
      logo: "Red Hat",
      featured: false
    }
  ];

  const categories = ['All', 'AI/ML', 'Database', 'IoT', 'Robotics', 'Data Analysis', 'Soft Skills'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertificates = activeCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Certificates & <span className="gradient-text">Achievements</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Professional certifications and achievements that validate my expertise
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"
            />
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredCertificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
              >
                {/* Featured Badge */}
                {certificate.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Certificate Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${certificate.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="w-8 h-8 text-white" />
                </div>

                {/* Certificate Info */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {certificate.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <Building size={14} />
                    <span>{certificate.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={14} />
                    <span>{certificate.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {certificate.description}
                </p>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 bg-gradient-to-r ${certificate.color} text-white text-xs font-semibold rounded-full`}>
                    {certificate.category}
                  </span>
                  
                  {/* View Certificate Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Total Certificates", value: certificates.length },
              { label: "Featured", value: certificates.filter(c => c.featured).length },
              { label: "Categories", value: categories.length - 1 },
              { label: "Years Active", value: "2+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl border border-primary-200 dark:border-primary-800"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
