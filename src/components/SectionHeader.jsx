import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = true }) => {
    return (
        <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                )}
                {/* Decorative Underline */}
                {centered && (
                    <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto opacity-80" />
                )}
            </motion.div>
        </div>
    );
};

export default SectionHeader;
