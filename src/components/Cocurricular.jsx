import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Trophy, Users, HeartHandshake, Lightbulb, Music } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Cocurricular = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const activities = [
        {
            id: 1,
            role: "Hackathon Participant",
            organization: "Smart India Hackathon 2024",
            icon: Trophy,
            color: "from-yellow-400 to-orange-500",
            description: "Collaborated with a team of 4 to build an AI-driven disaster management system in 36 hours. Reached the finals.",
            tags: ["Teamwork", "Rapid Prototyping", "Innovation"]
        },
        {
            id: 2,
            role: "Club Lead",
            organization: "Google Developer Student Clubs (GDSC)",
            icon: Users,
            color: "from-blue-500 to-indigo-500",
            description: "Organized technical workshops on Cloud Computing and AI for 200+ students. Mentored juniors in web development projects.",
            tags: ["Leadership", "Mentoring", "Event Management"]
        },
        {
            id: 3,
            role: "NSS Volunteer",
            organization: "National Service Scheme",
            icon: HeartHandshake,
            color: "from-green-500 to-emerald-600",
            description: "Participated in rural development camps and blood donation drives. Led a tree plantation campaign planting 500+ saplings.",
            tags: ["Social Service", "Community", "Volunteering"]
        },
        {
            id: 4,
            role: "Event Coordinator",
            organization: "TechFest 2024",
            icon: Lightbulb,
            color: "from-purple-500 to-pink-500",
            description: "Managed logistics and sponsorship for the college's annual technical festival, ensuring smooth execution of 15+ events.",
            tags: ["Management", "Logistics", "Coordination"]
        }
    ];

    return (
        <section id="cocurricular" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
            {/* Decorative Circles */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />

            <div className="container-custom section-padding relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <SectionHeader
                        title={<>Co-curricular <span className="gradient-text">Activities</span></>}
                        subtitle="Beyond the classroom: Leadership, Service, and Innovation."
                    />

                    <div className="grid md:grid-cols-2 gap-8">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
                            >
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                <div className="flex items-start gap-4 relative z-10">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${activity.color} text-white shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                                        <activity.icon size={24} />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                            {activity.role}
                                        </h3>
                                        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                                            {activity.organization}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                            {activity.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {activity.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-600">
                                                    {tag}
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

export default Cocurricular;
