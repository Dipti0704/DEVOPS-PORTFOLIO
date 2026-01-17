import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, Container, Settings, Database, Globe } from 'lucide-react';

const Journey = () => {
    const steps = [
        {
            title: 'Linux & Scripting',
            description: 'Mastered Linux internals, Bash scripting, and automation foundations.',
            icon: <TerminalIcon />,
            date: 'Phase 1'
        },
        {
            title: 'Containerization',
            description: 'Deep dive into Docker, creating optimized images and multi-container setups.',
            icon: <Container size={24} />,
            date: 'Phase 2'
        },
        {
            title: 'CI/CD Pipelines',
            description: 'Built automated pipelines with Jenkins and GitHub Actions for continuous delivery.',
            icon: <Settings size={24} />,
            date: 'Phase 3'
        },
        {
            title: 'Orchestration',
            description: 'Orchestrating microservices with Kubernetes (K8s) and Helm charts.',
            icon: <Cloud size={24} />,
            date: 'Phase 4'
        },
        {
            title: 'Cloud Infrastructure',
            description: 'Provisioning infrastructure as code (IaC) using Terraform on AWS.',
            icon: <Globe size={24} />,
            date: 'Phase 5'
        },
        {
            title: 'Monitoring & Logging',
            description: 'Implemented observability with Prometheus, Grafana, and ELK Stack.',
            icon: <Database size={24} />,
            date: 'Phase 6'
        }
    ];

    return (
        <section id="journey" className="py-20 bg-gray-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">DevOps Journey</h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800 hidden md:block" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="w-full md:w-5/12" />

                                <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full border-4 border-gray-900 shadow-xl mb-4 md:mb-0">
                                    <span className="text-white">{step.icon}</span>
                                </div>

                                <div className="w-full md:w-5/12 pl-0 md:pl-0">
                                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
                                        <span className="text-blue-400 text-sm font-semibold tracking-wider">{step.date}</span>
                                        <h3 className="text-xl font-bold text-white mt-1 mb-2">{step.title}</h3>
                                        <p className="text-gray-400">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TerminalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
);

export default Journey;
