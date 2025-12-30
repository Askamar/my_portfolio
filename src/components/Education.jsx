import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Building2, Quote } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Business Systems (CSBS)",
    institution: "JSPM's Rajarshi Shahu College of Engineering",
    location: "Pune, Maharashtra",
    period: "2023 - 2027",
    gpa: "8.91 CGPA",
    status: "Third Year"
  };

  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <SectionHeader
            title={<>Academic <span className="gradient-text">Journey</span></>}
            subtitle="Building a strong foundation in Computer Science and Business Systems."
          />

          <div className="space-y-8">
            {/* Main Degree Card Centered */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden mx-auto"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 text-center md:text-left">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-lg shrink-0">
                  <GraduationCap size={40} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <div className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-6">
                    {education.field}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Building2 size={18} className="text-secondary-500" />
                      {education.institution}
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <MapPin size={18} className="text-secondary-500" />
                      {education.location}
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Calendar size={18} className="text-secondary-500" />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Award size={18} className="text-secondary-500" />
                      <span className="font-bold text-gray-900 dark:text-white text-base">{education.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Key Subjects Centered */}
            <div className="text-center">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 dark:border-gray-800 pb-2 inline-block">
                Core Focus Areas
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {['Data Structures', 'Algorithms', 'Web Development', 'Machine Learning', 'Software Engineering', 'Business Systems'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="px-5 py-3 rounded-full bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 flex items-center gap-2 shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
                    <span className="font-medium text-gray-700 dark:text-gray-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote/Philosophy (Optional aesthetic filler since coursework is gone) */}
            <div className="max-w-2xl mx-auto pt-8">
              <figure className="relative text-center p-6">
                <Quote className="w-10 h-10 text-primary-100 dark:text-primary-900/40 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rotate-180" />
                <blockquote className="text-lg italic text-gray-600 dark:text-gray-400 relative z-10">
                  "Education is not just about learning facts, but the training of the mind to think."
                </blockquote>
                <Quote className="w-10 h-10 text-primary-100 dark:text-primary-900/40 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
              </figure>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
