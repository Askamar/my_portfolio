import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Brain, Rocket, Globe } from 'lucide-react';
import SectionHeader from './SectionHeader';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Built', value: '20+' },
    { label: 'Hackathons', value: '5+' },
    { label: 'Certifications', value: '10+' }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      desc: "Building smart models for real-world problems."
    },
    {
      icon: Code,
      title: "Full Stack",
      desc: "Scalable web apps with React & Node.js."
    },
    {
      icon: Database,
      title: "Data Analytics",
      desc: "Turning raw data into actionable business insights."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="container-custom section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <SectionHeader
            title={<>About <span className="gradient-text">Me</span></>}
            subtitle="A glimpse into my journey, my values, and the technology that drives me forward."
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Image & Personal Details */}
            <div className="relative">
              {/* Main Image Frame (Abstract if no real image, or stylized) */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-4 border-white dark:border-gray-800 shadow-2xl"
              >
                {/* Placeholder for Profile */}
                <img
                  src="/Amar_profile_pic.png"
                  alt="Amar Khatal"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Based in</p>
                      <p className="font-bold text-gray-900 dark:text-white">Pune, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements behind image */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl -z-10" />
            </div>

            {/* Right Column: Narrative & Stats */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Driven by <span className="text-primary-600">Innovation</span>, <br />
                  Grounded in <span className="text-secondary-600">Engineering</span>.
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  I am a Computer Science undergraduate specializing in <strong>Business Systems</strong>.
                  My passion lies at the intersection of AI and practical software engineering.
                  I don't just write code; I build systems that solve tangible problems.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  From winning hackathons to deploying machine learning models, my journey is defined by a
                  relentless curiosity. I am currently focused on mastering <strong>Generative AI</strong> and
                  <strong>Scalable Architectures</strong> to create the next generation of digital products.
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-100 dark:border-gray-800">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Focus Areas */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Rocket size={16} className="text-primary-500" />
                  What I Do
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {services.map((item) => (
                    <div key={item.title} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                      <item.icon size={24} className="text-gray-700 dark:text-gray-200 mb-3" />
                      <h5 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{item.title}</h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
