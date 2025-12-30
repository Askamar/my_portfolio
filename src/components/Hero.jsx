import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, MousePointer2, Terminal, Cpu, Database } from 'lucide-react';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = [
    "AI Engineer",
    "Full Stack Developer",
    "Data Analyst",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/Askamar" },
    { icon: Linkedin, href: "https://linkedin.com/in/amarkhatal2005" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white dark:bg-gray-950 overflow-hidden pt-20 md:pt-0">
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary-500/5 rounded-full blur-[80px] animate-pulse-slow delay-1000" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container-custom section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-semibold"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Available for Internships
            </motion.div>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                Amar <span className="gradient-text">Khatal</span>
              </h1>

              {/* Dynamic Role Text */}
              <div className="h-12 md:h-16 overflow-hidden">
                <motion.div
                  key={textIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-4xl font-bold text-gray-400 dark:text-gray-500 flex items-center gap-3"
                >
                  <span className="text-primary-600 dark:text-primary-400">&gt;</span>
                  {roles[textIndex]}
                  <span className="w-1 h-8 bg-gray-400 animate-blink" />
                </motion.div>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
              I blend <span className="font-semibold text-gray-900 dark:text-white">AI innovation</span> with <span className="font-semibold text-gray-900 dark:text-white">Business Systems</span> logic to build intelligent software solutions that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-bold shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-all"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.button>

              <motion.a
                href="/Resume.pdf"
                download="Amar_Khatal_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold hover:shadow-lg transition-all cursor-pointer"
              >
                Download CV
                <Download size={20} />
              </motion.a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4 text-gray-500">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary-600 transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
              <div className="h-8 w-px bg-gray-200 dark:bg-gray-800" />
              <div className="flex text-sm font-medium">
                Based in Pune, India
              </div>
            </div>
          </motion.div>

          {/* Right Visual: "The Tech Orb" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center p-10"
          >
            {/* Spinning Rings */}
            <div className="absolute w-[500px] h-[500px] border border-gray-200 dark:border-gray-800 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-[400px] h-[400px] border border-dashed border-gray-300 dark:border-gray-700 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-20 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <Cpu size={32} className="text-blue-500" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <Database size={32} className="text-green-500" />
            </motion.div>

            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 left-0 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <Terminal size={32} className="text-purple-500" />
            </motion.div>

            {/* Central Element: Code Window Placeholder */}
            <div className="relative z-10 w-80 h-96 bg-gray-900 rounded-2xl p-4 shadow-2xl rotate-[-6deg] border border-gray-800 transform transition-transform hover:rotate-0 hover:scale-105 duration-500">
              {/* Terminal Header */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Code Content */}
              <div className="space-y-3 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-pink-500">const</span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-white">=</span>
                  <span className="text-yellow-300">{"{"}</span>
                </div>
                <div className="pl-4 text-gray-300">
                  name: <span className="text-green-400">'Amar'</span>,
                </div>
                <div className="pl-4 text-gray-300">
                  skills: [<span className="text-green-400">'AI'</span>, <span className="text-green-400">'Web'</span>],
                </div>
                <div className="pl-4 text-gray-300">
                  hardWorker: <span className="text-purple-400">true</span>
                </div>
                <div className="text-yellow-300">{"}"}</div>

                <div className="pt-4 flex gap-2">
                  <span className="text-gray-500">// Ready to deploy?</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">➜</span>
                  <span className="text-white animate-pulse">_</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
