import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Journey from './components/sections/Journey';
import Projects from './components/sections/Projects';
import Notes from './components/sections/Notes';
import Footer from './components/layout/Footer';

function App() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Navbar />
            <Hero />
            <Journey />
            <Projects />
            <Notes />
            <Footer />
        </div>
    )
}

export default App
