import React, { useEffect, useRef } from 'react';

/**
 * Projects Section - Showcase portfolio projects with card-based layout
 */
const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online marketplace with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://demo-ecommerce.com'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Advanced data visualization platform leveraging machine learning to provide actionable business insights and predictive analytics.',
      tech: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      github: 'https://github.com/yourusername/analytics',
      demo: 'https://demo-analytics.com'
    },
    {
      title: 'Real-Time Collaboration Tool',
      description: 'WebSocket-based collaborative workspace enabling teams to work together seamlessly with live updates and conflict resolution.',
      tech: ['React', 'WebSocket', 'Redis', 'Express'],
      github: 'https://github.com/yourusername/collab-tool',
      demo: 'https://demo-collab.com'
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile application for tracking workouts, nutrition, and health metrics with social features and gamification.',
      tech: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
      github: 'https://github.com/yourusername/fitness',
      demo: null
    },
    {
      title: 'Content Management System',
      description: 'Headless CMS with a beautiful admin interface, role-based access control, and RESTful API for content delivery.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      github: 'https://github.com/yourusername/cms',
      demo: 'https://demo-cms.com'
    },
    {
      title: 'Portfolio Generator',
      description: 'Automated portfolio website builder with customizable templates, drag-and-drop interface, and one-click deployment.',
      tech: ['React', 'Tailwind', 'Vite', 'Vercel'],
      github: 'https://github.com/yourusername/portfolio-gen',
      demo: 'https://demo-portfolio-gen.com'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-primary-50">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-primary-900 mb-12"></div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card opacity-0 group bg-white rounded-xl p-6 shadow-sm border border-primary-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary-300"
            >
              {/* Project title */}
              <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                {project.title}
              </h3>

              {/* Project description */}
              <p className="text-primary-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="flex gap-4 pt-4 border-t border-primary-100">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-700 hover:text-primary-900 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Code
                </a>
                
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-700 hover:text-primary-900 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
