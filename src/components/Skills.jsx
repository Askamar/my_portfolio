import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Database, 
  Code, 
  Brain, 
  Cpu, 
  Globe, 
  BarChart3,
  Bot,
  Settings
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "from-yellow-400 to-orange-500" },
        { name: "C++", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "C", level: 80, color: "from-gray-600 to-gray-700" },
        { name: "Java", level: 85, color: "from-yellow-500 to-yellow-600" },
      ]
    },
    {
      category: "Databases",
      icon: Database,
      skills: [
        { name: "SQL", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "MongoDB", level: 80, color: "from-green-500 to-green-600" }
          
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: 85, color: "from-pink-500 to-rose-500" },
        { name: "AI/ML", level: 80, color: "from-indigo-500 to-purple-500" },
        { name: "Deep Learning", level: 60, color: "from-cyan-500 to-blue-500" },
        { name: "Data Analysis", level: 88, color: "from-orange-500 to-red-500" },
      ]
    },
    {
      category: "Development & Tools",
      icon: Settings,
      skills: [
        { name: "Web Development", level: 75, color: "from-emerald-500 to-teal-500" },
        { name: "Eclipse IDE", level: 70, color: "from-slate-500 to-gray-600" },
        { name: "Git/GitHub", level: 85, color: "from-gray-700 to-gray-800" },
        { name: "Linux", level: 78, color: "from-orange-600 to-yellow-600" },
      ]
    }
  ];

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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              My <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              A comprehensive overview of my technical expertise and proficiency levels
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-4"
            />
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              repeatDelay: 3,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                I'm committed to staying updated with the latest technologies and continuously 
                expanding my skill set. Currently exploring advanced AI/ML frameworks, cloud 
                technologies, and emerging automation tools to enhance my capabilities.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
