import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, PenTool } from 'lucide-react';

const Notes = () => {
    return (
        <section id="notes" className="py-20 bg-gradient-to-t from-gray-900 to-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Knowledge Base</h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Documentation is key to DevOps. I maintain two sets of comprehensive notes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Class Notes Card */}
                    <NoteCard
                        title="DevOps Class Notes"
                        description="Comprehensive notes covering the entire DevOps curriculum, including Linux, AWS, Docker, and Kubernetes from my training."
                        icon={<BookOpen size={40} className="text-blue-400" />}
                        link="https://github.com/Dipti0704/DEVOPS_NOTES"
                        color="blue"
                        delay={0}
                    />

                    {/* Personal Learning Notes Card */}
                    <NoteCard
                        title="Personal Learning & R&D"
                        description="My self-driven research, extra topics, troubleshooting logs, and advanced experiments beyond the standard curriculum."
                        icon={<PenTool size={40} className="text-purple-400" />}
                        link="#"
                        color="purple"
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};

const NoteCard = ({ title, description, icon, link, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay }}
        whileHover={{ y: -5 }}
        className={`bg-gray-900 border border-gray-700 rounded-2xl p-8 text-left hover:border-${color}-500/50 hover:shadow-lg hover:shadow-${color}-500/10 transition-all group relative overflow-hidden`}
    >
        <div className={`absolute top-0 right-0 p-24 bg-${color}-500/5 rounded-full blur-3xl -mr-12 -mt-12`} />

        <div className="relative z-10">
            <div className={`mb-6 p-4 bg-gray-800 rounded-xl inline-block group-hover:bg-${color}-500/20 transition-colors`}>
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
                {description}
            </p>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-${color}-400 font-semibold group-hover:gap-3 transition-all`}
            >
                View Repository <ArrowRight size={20} />
            </a>
        </div>
    </motion.div>
);

export default Notes;
