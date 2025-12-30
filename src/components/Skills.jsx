import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import SectionHeader from './SectionHeader';
import {
  Database,
  Code,
  Brain,
  Settings,
  X,
  ExternalLink,
  ChevronRight,
  Award,
  Briefcase,
  FolderGit2
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: [
        {
          name: "Python",
          color: "from-yellow-400 to-orange-500",
          proofs: [
            { type: "Project", name: "Greenhouse Gas Emission Prediction", link: "https://github.com/Askamar/GHG_Emission_Prediction" },
            { type: "Project", name: "Email Spam Detection", link: "https://github.com/Askamar/Email_Spam_Detection" }
          ]
        },
        {
          name: "C++",
          color: "from-blue-500 to-blue-600",
          proofs: [
            { type: "Project", name: "Hospital Management System", link: "https://github.com/Askamar/hospital_management_system" }
          ]
        },
        { name: "C", color: "from-gray-600 to-gray-700", proofs: [{ type: "Coursework", name: "Data Structures & Algorithms", link: "#" }] },
        { name: "Java", color: "from-yellow-500 to-yellow-600", proofs: [{ type: "Coursework", name: "Object Oriented Programming", link: "#" }] },
        { name: "JavaScript", color: "from-yellow-400 to-yellow-500", proofs: [{ type: "Project", name: "Portfolio Website", link: "#" }] },
        { name: "HTML/CSS", color: "from-orange-500 to-red-500", proofs: [{ type: "Project", name: "Portfolio Website", link: "#" }] },
        { name: "React", color: "from-cyan-400 to-blue-500", proofs: [{ type: "Project", name: "Portfolio Website", link: "#" }] },
        {
          name: "Node.js",
          color: "from-green-500 to-emerald-600",
          proofs: [
            { type: "Project", name: "Backend API development", link: "#" }
          ]
        },
        { name: "SQL", color: "from-blue-400 to-indigo-500", proofs: [{ type: "Project", name: "Database Management", link: "#" }] }
      ]
    },
    {
      category: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", color: "from-green-500 to-green-600", proofs: [{ type: "Project", name: "NoSQL Data Storage", link: "#" }] },
        { name: "MySQL", color: "from-blue-600 to-blue-700", proofs: [{ type: "Project", name: "Hospital Management System", link: "#" }] },
        { name: "PostgreSQL", color: "from-blue-400 to-blue-500", proofs: [{ type: "Project", name: "Enterprise Apps", link: "#" }] },
        { name: "Oracle", color: "from-red-500 to-red-600", proofs: [{ type: "Certification", name: "Oracle Database SQL", link: "#" }] }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "Machine Learning", color: "from-pink-500 to-rose-500", proofs: [{ type: "Project", name: "Greenhouse Gas Emission Prediction", link: "#" }] },
        { name: "Deep Learning", color: "from-indigo-500 to-purple-500", proofs: [{ type: "Project", name: "Email Spam Detection", link: "#" }] },
        { name: "Data Analysis", color: "from-orange-500 to-red-500", proofs: [{ type: "Project", name: "Exploratory Data Analysis", link: "#" }] }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: Settings,
      skills: [
        { name: "Git/GitHub", color: "from-gray-700 to-gray-800", proofs: [{ type: "Tool", name: "Version Control for all projects", link: "https://github.com/Askamar" }] },
        { name: "Docker", color: "from-blue-500 to-blue-600", proofs: [{ type: "Tool", name: "Containerization", link: "#" }] },
        { name: "Linux", color: "from-yellow-600 to-yellow-700", proofs: [{ type: "Environment", name: "Development Environment", link: "#" }] }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getProofIcon = (type) => {
    switch (type) {
      case 'Project': return <FolderGit2 size={16} />;
      case 'Certification': return <Award size={16} />;
      case 'Internship': return <Briefcase size={16} />;
      default: return <ExternalLink size={16} />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <SectionHeader
            title={<>My <span className="gradient-text">Skills</span></>}
            subtitle="Click on any skill to explore my practical experience and projects."
          />

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skills.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 text-primary-600 dark:text-primary-400">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <motion.button
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} absolute top-3 right-3 opacity-50 group-hover:opacity-100`} />
                      <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {skill.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              I am constantly learning and adapting. This list is just a snapshot of my current toolkit.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Skill Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`skill-${selectedSkill.name}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${selectedSkill.color} p-6 text-white`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{selectedSkill.name}</h3>
                    <p className="text-white/80 text-sm">Experience & Implementation</p>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Where I've Applied It
                </h4>

                <div className="space-y-3">
                  {selectedSkill.proofs.map((proof, idx) => (
                    <motion.a
                      key={idx}
                      href={proof.link}
                      target={proof.link !== '#' ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all group ${proof.link === '#' ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {getProofIcon(proof.type)}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                          {proof.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {proof.type}
                        </p>
                      </div>
                      {proof.link !== '#' && (
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transform group-hover:translate-x-1 transition-all" />
                      )}
                    </motion.a>
                  ))}

                  {selectedSkill.proofs.length === 0 && (
                    <p className="text-center text-gray-500 py-4 italic">
                      More details coming soon...
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
