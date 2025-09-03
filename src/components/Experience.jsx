import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      title: "Member",
      company: "Janatics Automation & Robotics Club",
      location: "Pune, India",
      period: "2025 – Present",
      type: "Current",
      description: "Active member of the robotics club, contributing to automation projects and learning advanced robotics technologies. Participating in club activities, workshops, and collaborative projects.",
      achievements: [
        "Contributing to automation and robotics projects",
        "Learning advanced robotics technologies",
        "Participating in club workshops and activities"
      ],
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Intern",
      company: "Edunet Foundation",
      location: "Remote",
      period: "2025",
      type: "Internship",
      description: "Completed internship focusing on educational technology and digital learning solutions. Gained hands-on experience in developing educational platforms and tools.",
      achievements: [
        "Developed educational technology solutions",
        "Worked on digital learning platforms",
        "Gained experience in educational software development"
      ],
      icon: Award,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Digital Team Member",
      company: "ACBS RSCOE",
      location: "Pune, India",
      period: "2024 – 2025",
      type: "Leadership",
      description: "Part of the digital team responsible for managing the college's digital presence and online activities. Led various digital initiatives and managed social media platforms.",
      achievements: [
        "Managed college's digital presence",
        "Led digital marketing initiatives",
        "Coordinated online events and activities"
      ],
      icon: Users,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              My <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              A timeline of my professional journey and key achievements
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-4"
            />
          </div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-primary-500 shadow-lg z-10">
                  <experience.icon className="w-8 h-8 text-primary-600" />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-1 ml-0 md:ml-8 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${experience.color} text-white`}>
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready for New Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                I'm actively seeking internships and opportunities in AI, Data Science, and Software Development. 
                Let's discuss how I can contribute to your team!
              </p>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
