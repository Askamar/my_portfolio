import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building, CheckCircle2, ChevronRight, Trophy, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const certificates = [
    {
      id: 1,
      title: "AI Aware Badge",
      url: "https://ai-for-all.in/#/badge?id=U2FsdGVkX18c7jnVYfWC8AgxksmMYEg1xC3q571L5QUe1Q2u3A4l",
      issuer: "Intel",
      date: "Aug 2025",
      type: "Certification",
      description: "Validated proficiency in AI concepts including Computer Vision and NLP fundamentals.",
      category: "AI/ML",
      featured: true,
      skills: ["AI Fundamentals", "Computer Vision"]
    },
    {
      id: 2,
      title: "Cisco IoT Fundamentals",
      url: "https://www.linkedin.com/in/amarkhatal2005/details/certifications/1752146049542/single-media-viewer/?profileId=ACoAAEZ2R7gB22C2v5re4iJnIJh5PKb_cfkcl_A",
      issuer: "Cisco Networking Academy",
      date: "Jul 2025",
      type: "Certification",
      description: "Mastered core IoT concepts, connecting sensors and cloud architecture.",
      category: "IoT",
      featured: true,
      skills: ["IoT Architecture", "Networking", "Sensors"]
    },
    {
      id: 3,
      title: "MongoDB Introduction",
      url: "https://learn.mongodb.com/c/fcRIviPvRtGwwcWo9Rg28g",
      issuer: "MongoDB University",
      date: "Jun 2025",
      type: "Certification",
      description: "Gained expertise in NoSQL database modeling and aggregation frameworks.",
      category: "Database",
      featured: false,
      skills: ["NoSQL", "Aggregation", "Data Modeling"]
    },
    {
      id: 4,
      title: "NVIDIA AI for All",
      url: "https://www.linkedin.com/in/amarkhatal2005/details/certifications/1752314678914/single-media-viewer/?profileId=ACoAAEZ2R7gB22C2v5re4iJnIJh5PKb_cfkcl_A",
      issuer: "NVIDIA",
      date: "May 2025",
      type: "Certification",
      description: "Deep dive into GPU-accelerated computing and deep learning frameworks.",
      category: "AI/ML",
      featured: true,
      skills: ["Deep Learning", "GPU Computing"]
    },
    {
      id: 5,
      title: "Janatics Challenge",
      url: "https://www.linkedin.com/in/amarkhatal2005/details/certifications/1748444024277/single-media-viewer/?profileId=ACoAAEZ2R7gB22C2v5re4iJnIJh5PKb_cfkcl_A",
      issuer: "Janatics",
      date: "May 2025",
      type: "Achievement",
      description: "Secured top position demonstrating rapid prototyping and automation logic.",
      category: "Robotics",
      featured: false,
      skills: ["Automation", "Robotics", "Problem Solving"]
    },
    {
      id: 6,
      title: "SQL Certification",
      url: "https://www.hackerrank.com/certificates/4bacbc545b2b",
      issuer: "HackerRank",
      date: "May 2025",
      type: "Certification",
      description: "Verified advanced SQL querying capability involving complex joins and indexing.",
      category: "Database",
      featured: false,
      skills: ["SQL", "Data Optimization"]
    },
    {
      id: 7,
      title: "Data Analysis using Excel",
      url: "https://www.linkedin.com/learning/certificates/addeed9ed95e9702709c8e211ad5410da196ae6223cdddb2f16fb669721250c3",
      issuer: "LinkedIn Learning",
      date: "May 2024",
      type: "Certification",
      description: "Professional techniques for data cleaning, pivot tables, and visualization.",
      category: "Data Analysis",
      featured: false,
      skills: ["Excel", "Data Visualization"]
    },
    {
      id: 8,
      title: "NPTEL Soft Skills",
      url: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/109/noc24-hs26/Course/NPTEL24HS26S46520365530394112.pdf",
      issuer: "NPTEL",
      date: "May 2024",
      type: "Certification",
      description: "Coursework on effective business communication and leadership strategies.",
      category: "Soft Skills",
      featured: false,
      skills: ["Communication", "Leadership"]
    },
    {
      id: 9,
      title: "Adobe India Hackathon",
      url: "https://unstop.com/certificate-preview/6982a560-5edb-446e-a21e-c63d204713f4",
      issuer: "Adobe",
      date: "Aug 2025",
      type: "Achievement",
      description: "Competed nationally to solve creative digital challenges under time pressure.",
      category: "Hackathon",
      featured: true,
      skills: ["Innovation", "Rapid Prototyping"]
    },
    {
      id: 10,
      title: "Red Hat App Development",
      url: "https://www.linkedin.com/in/amarkhatal2005/overlay/1762174183791/single-media-viewer/?profileId=ACoAAEZ2R7gB22C2v5re4iJnIJh5PKb_cfkcl_A",
      issuer: "Red Hat",
      date: "Oct 2025",
      type: "Certification",
      description: "Java EE enterprise application development and deployment standards.",
      category: "Java",
      featured: false,
      skills: ["Java EE", "Enterprise Apps"]
    }
  ];

  const categories = ['All', 'AI/ML', 'Database', 'IoT', 'Robotics', 'Data Analysis', 'Hackathon'];
  const filteredCertificates = activeCategory === 'All'
    ? certificates
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section id="certificates" className="py-24 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <SectionHeader
            title={<><span className="gradient-text">Credentials</span> & Achievements</>}
            subtitle="Verified milestones in my continuous learning journey."
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col h-full"
                >
                  {/* Decorative Gradient Line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.featured ? 'from-amber-400 to-orange-500' : 'from-primary-500 to-secondary-500'} opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${cert.featured ? 'bg-amber-100 dark:bg-amber-900/20 text-amber-600' : 'bg-primary-50 dark:bg-primary-900/20 text-primary-600'}`}>
                        {cert.type === 'Achievement' ? <Trophy size={20} /> : <Award size={20} />}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white leading-tight">
                          {cert.title}
                        </h3>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    {cert.featured && (
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400 flex-shrink-0" />
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
                    {cert.description}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-gray-50 dark:border-gray-700">
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 text-xs rounded-md border border-gray-100 dark:border-gray-700">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                        <Calendar size={14} />
                        {cert.date}
                      </div>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group/link"
                      >
                        Verify
                        <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
