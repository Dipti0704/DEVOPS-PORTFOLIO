import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitBranch, CheckCircle } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        My First DevOps Project
                    </motion.h2>
                    <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        As a beginner in DevOps, I have built this portfolio to demonstrate my understanding of
                        CI/CD pipelines, automated deployment, and modern web infrastructure.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <ProjectCard
                        project={{
                            title: 'My DevOps Portfolio',
                            description: 'This very website is my first major project! It showcases a complete CI/CD pipeline setup. I automated the build and deployment process, integrating version control with GitHub. It represents my journey into learning how to ship software reliably.',
                            tags: ['React', 'CI/CD', 'GitHub Actions', 'Vite'],
                            githubLink: 'https://github.com/Dipti0704/DEVOPS-PORTFOLIO',
                            liveLink: '#',
                            status: 'Live'
                        }}
                        index={0}
                    />
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50 transition-all group"
    >
        <div className="p-8">
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <GitBranch size={32} className="text-purple-400" />
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                    <CheckCircle size={14} /> {project.status}
                </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                    <span key={tag} className="text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base text-white hover:text-blue-400 transition-colors px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                    <Github size={20} /> View Source Code
                </a>
            </div>
        </div>
    </motion.div>
);

export default Projects;
