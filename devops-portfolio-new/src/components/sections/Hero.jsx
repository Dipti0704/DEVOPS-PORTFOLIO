import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4">
                        Start of my Journey
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Hello, I am <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            Dipti Hatwar
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        And this is my portfolio of DevOps. I am exploring the world of Cloud Infrastructure,
                        Automation, and CI/CD pipelines.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20"
                    >
                        See My Work <ArrowRight size={20} />
                    </motion.a>

                    <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:ml-6">
                        <SocialLink href="https://github.com/Dipti0704" icon={<Github size={24} />} />
                        <SocialLink href="https://www.linkedin.com/in/dipti-hatwar-024027289/" icon={<Linkedin size={24} />} />
                        <SocialLink href="mailto:dipti820h@gmail.com" icon={<Mail size={24} />} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, color: '#60A5FA' }}
        className="text-gray-400 hover:text-blue-400 transition-colors bg-gray-800/50 p-3 rounded-full border border-gray-700 backdrop-blur-sm"
    >
        {icon}
    </motion.a>
);

export default Hero;
