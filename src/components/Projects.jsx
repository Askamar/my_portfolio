import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, Github, Filter, X, ArrowUpRight, Search, Code2, Layers, Cpu } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Greenhouse Gas Emission Prediction",
      description: "A sophisticated machine learning model designed to analyze historical environmental data and predict future greenhouse gas emission trends. This tool aids researchers and policymakers in understanding climate impact patterns.",
      fullDescription: "Built using Python's advanced data science stack (Pandas, Scikit-learn), this project involves cleaning massive environmental datasets, feature engineering, and training regression models to forecast emissions with high accuracy. The visualization layer provides intuitive charts for data interpretation.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23111827'/%3E%3Ccircle cx='400' cy='300' r='100' fill='%2310b981' opacity='0.2'/%3E%3Cpath d='M200 400 Q400 100 600 400' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3C/svg%3E",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Matplotlib"],
      category: "AI",
      github: "https://github.com/Askamar/GHG_Emission_Prediction",
      live: "#",
      featured: true,
      stats: { accuracy: "94%", dataPoints: "50k+" }
    },
    {
      id: 2,
      title: "Hospital Management System",
      description: "An integrated web-based system for managing hospital operations, including patient records, doctor web-based appointments, and administrative workflows.",
      fullDescription: "This robust application streamlines hospital administration. It features a secure login system for different user roles (Admin, Doctor, Patient), real-time appointment booking slots, and a digital prescription management module to reduce paperwork.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23111827'/%3E%3Crect x='300' y='200' width='200' height='200' fill='%233b82f6' opacity='0.2'/%3E%3Cpath d='M350 300 H450 M400 250 V350' stroke='%233b82f6' stroke-width='8'/%3E%3C/svg%3E",
      technologies: ["C++", "File Handling", "OOP", "Data Structures", "CLI"],
      category: "Web",
      github: "https://github.com/Askamar/hospital_management_system",
      live: "#",
      featured: true,
      stats: { patients: "1000+", uptime: "99.9%" }
    },
    {
      id: 3,
      title: "Email Spam Detection",
      description: "Intelligent spam filtering system utilizing Natural Language Processing (NLP) to classify emails with high precision, ensuring inbox cleanliness.",
      fullDescription: "Leveraging NLP techniques like Tokenization and TF-IDF, this model classifies emails as 'Spam' or 'Ham'. It continuously learns from new examples to improve its detection algorithms, effectively blocking phishing attempts and unwanted marketing.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23111827'/%3E%3Cpath d='M200 200 L400 350 L600 200 V400 H200 Z' stroke='%23f43f5e' stroke-width='4' fill='none' opacity='0.5'/%3E%3C/svg%3E",
      technologies: ["Python", "NLP", "NLTK", "Logistic Regression", "Flask"],
      category: "AI",
      github: "https://github.com/Askamar/Email_Spam_Detection",
      live: "#",
      featured: false,
      stats: { precision: "98%", speed: "<50ms" }
    }
  ];

  const filters = ['All', 'AI', 'Web', 'Data'];

  const filteredProjects = projects.filter(project => {
    const searchMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const categoryMatch = activeFilter === 'All' || project.category === activeFilter;
    return searchMatch && categoryMatch;
  });

  const getIconForCategory = (cat) => {
    switch (cat) {
      case 'AI': return <Cpu className="w-4 h-4" />;
      case 'Web': return <Layers className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <SectionHeader
            title={<>Featured <span className="gradient-text">Projects</span></>}
            subtitle="A collection of digital solutions where innovation meets functionality."
          />

          {/* Controls: Search & Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white dark:bg-gray-800/50 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFilter === filter
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  {getIconForCategory(filter)}
                  {filter}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:shadow-primary-500/5 flex flex-col h-full"
                >
                  {/* Image Area */}
                  <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Floating Categories */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md text-xs font-semibold rounded-full border border-white/20 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick Action Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
                      <button
                        className="p-3 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform shadow-lg"
                        title="View Code"
                        onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                      >
                        <Github size={20} />
                      </button>
                      <button
                        className="p-3 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform shadow-lg"
                        title="View Details"
                        onClick={() => setSelectedProject(project)}
                      >
                        <ArrowUpRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1" title={project.title}>
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto">
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-[10px] uppercase tracking-wider font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[10px] text-gray-500 px-2 py-1">+ {project.technologies.length - 3}</span>
                        )}
                      </div>

                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                        >
                          Read More <ArrowUpRight size={14} />
                        </button>
                        {project.featured && (
                          <span className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                            ★ Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* SMART Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Image Header */}
              <div className="relative h-64 shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-6 left-8 right-8">
                  <span className="inline-block px-3 py-1 bg-primary-600/90 text-white text-xs font-bold rounded-full mb-3 shadow-lg">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap gap-6 mb-8 text-sm">
                  {selectedProject.stats && Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-gray-500 dark:text-gray-400 capitalize">{key}</span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Code2 size={18} className="text-primary-500" /> About the Project
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription || selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Layers size={18} className="text-secondary-500" /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700 flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Github size={20} /> View on GitHub
                  </a>
                  {selectedProject.live !== '#' && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </a>
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

export default Projects;
