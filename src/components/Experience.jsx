import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Building2, Briefcase, Award, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      role: "Club Member",
      company: "Janatics Automation & Robotics Club",
      location: "Pune, India",
      period: "2025 – Present",
      type: "Extracurricular",
      description: "Contributing to advanced automation projects and exploring cutting-edge robotics. Actively participating in technical workshops to master industrial automation systems.",
      skills: ["Robotics", "Automation", "Embedded C"],
      logo: "J",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      role: "EdTech Intern",
      company: "Edunet Foundation",
      location: "Remote",
      period: "2025",
      type: "Internship",
      description: "Collaborated on digital learning solutions to enhance educational accessibility. Gained hands-on experience in cloud-based tools and content management systems for scale.",
      skills: ["EdTech", "Cloud Tools", "Content Mgmt"],
      logo: "E",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      role: "Digital Team Member",
      company: "ACBS RSCOE",
      location: "Pune, India",
      period: "2024 – 2025",
      type: "Volunteering",
      description: "Spearheaded digital campaigns to boost the college's online footprint. Managed social media analytics and coordinated virtual events with high student engagement.",
      skills: ["Digital Marketing", "Social Media", "Event Mgmt"],
      logo: "A",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <SectionHeader
            title={<>Professional <span className="gradient-text">Experience</span></>}
            subtitle="My journey through internships, leadership roles, and technical contributions."
          />

          {/* Timeline */}
          <div className="relative">
            {/* Center Line for Desktop */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-start gap-8 md:gap-0 mb-12 md:mb-24 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot (Center) */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 z-10 box-content shadow-[0_0_0_4px_rgba(255,255,255,1)] dark:shadow-[0_0_0_4px_rgba(17,24,39,1)]" />

                {/* Content Block */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className={`p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow relative overflow-hidden group`}>
                    {/* Gradient Top Line */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color}`} />

                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br ${exp.color} text-white flex items-center justify-center font-bold text-lg shadow-md`}>
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                          {exp.role}
                        </h3>
                        <div className={`text-primary-600 dark:text-primary-400 font-medium text-sm flex items-center gap-1 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <Building2 size={14} /> {exp.company}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Meta Stats */}
                    <div className={`flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} /> {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} /> {exp.type}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-xs rounded border border-gray-100 dark:border-gray-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
