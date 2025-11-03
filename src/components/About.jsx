import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Brain, Cpu } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const interests = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Exploring the frontiers of artificial intelligence and developing intelligent solutions"
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Transforming raw data into actionable insights and meaningful patterns"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Building robust and scalable applications with modern technologies"
    },
    {
      icon: Cpu,
      title: "Automation & Robotics",
      description: "Creating automated systems that enhance efficiency and productivity"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
                             <div className="relative w-80 h-80 mx-auto lg:mx-0">
                 {/* Profile Image */}
                 <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                   <img 
                     src="/profile-pic.jpg" 
                     alt="Amar - AI Engineer, Software Developer, Data Analyst"
                     className="w-full h-full object-cover object-center"
                     loading="lazy"
                   />
                 </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Brain className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Passionate about Technology & Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a dedicated Computer Science student with a passion for artificial intelligence, 
                  data analysis, and software development. Currently pursuing my B.Tech in CSBS at 
                  JSPM's Rajarshi Shahu College of Engineering, I'm constantly exploring new 
                  technologies and methodologies to solve real-world problems.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  My journey in technology spans across multiple domains - from building intelligent 
                  systems and analyzing complex datasets to developing robust software solutions. 
                  I believe in the power of automation and AI to transform businesses and create 
                  meaningful impact in society.
                </p>
              </div>

              {/* Key Interests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500">
                        <interest.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {interest.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="pt-6"
              >
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Let's Connect
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
