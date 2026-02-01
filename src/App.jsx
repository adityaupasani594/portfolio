import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Contact from './components/Contact';

/**
 * Main App Component - Portfolio Website
 * 
 * A modern, responsive personal portfolio showcasing professional work,
 * skills, certifications, awards, and contact information.
 * 
 * Built with React and Tailwind CSS
 */
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section - Full viewport introduction */}
        <Hero />

        {/* About Section - Professional summary and skills */}
        <About />

        {/* Projects Section - Portfolio showcase */}
        <Projects />

        {/* Certifications Section - Professional credentials */}
        <Certifications />

        {/* Awards Section - Achievements and recognition */}
        <Awards />

        {/* Contact Section - Social links and footer */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
