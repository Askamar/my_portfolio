import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Business Systems (CSBS)",
    institution: "JSPM's Rajarshi Shahu College of Engineering",
    location: "Pune, Maharashtra, India",
    period: "2023 - 2027",
    status: "Pursuing",
    gpa: "8.91",
    description: "Comprehensive program combining computer science fundamentals with business systems knowledge, preparing for roles in technology and business integration.",
    highlights: [
      "Strong foundation in programming languages (C, C++, Python,java)",
      "Database management and data structures",
      "Software engineering principles and methodologies",
      "Computer Network and it's applications",
      "Operating System and it's applications",
      "Data Structures and Algorithms",
      "Industry-relevant curriculum with practical applications"
    ],
    achievements: [
      "Consistently maintaining high academic performance",
      "Active participation in technical clubs and societies meetups and events",
      "Completed multiple hands-on projects",
      "Engaged in continuous learning and skill development"
    ]
  };

  const courses = [
    { name: "Data Structures & Algorithms", status: "Completed" },
    { name: "Database Management Systems", status: "Completed" },
    { name: "Object-Oriented Programming", status: "Completed" },
    { name: "Software Engineering", status: "Completed" },
    { name: "Machine Learning", status: "In Progress" },
    { name: "Business Communication and Value Science", status: "Completed" },
    { name: "System design and architecture", status: "Upcoming" },
    { name: "Deep Learning", status: "Upcoming" }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              My <span className="gradient-text">Education</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Academic journey and continuous learning in technology
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mt-4"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1">
                      {education.field}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {education.institution}
                    </p>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{education.period}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{education.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{education.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CGPA</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{education.gpa}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {education.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {education.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Academic Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {education.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Course Progress */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Course Progress Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Course Progress
                </h4>
                <div className="space-y-3">
                  {courses.map((course, index) => (
                    <motion.div
                      key={course.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {course.name}
                      </span>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        course.status === 'Completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : course.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
                      }`}>
                        {course.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Academic Stats */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6 border border-primary-200 dark:border-primary-800">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Academic Stats
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Current CGPA</span>
                    <span className="text-2xl font-bold gradient-text">{education.gpa}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Years Completed</span>
                    <span className="text-2xl font-bold gradient-text">2+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Courses Completed</span>
                    <span className="text-2xl font-bold gradient-text">
                      {courses.filter(c => c.status === 'Completed').length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">In Progress</span>
                    <span className="text-2xl font-bold gradient-text">
                      {courses.filter(c => c.status === 'In Progress').length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
