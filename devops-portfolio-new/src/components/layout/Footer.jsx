import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} DevOps Portfolio. Built with React & Tailwind.
                </div>
                <div className="flex gap-6">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
