import React, { useEffect, useRef } from 'react';

/**
 * Awards Section - Highlight achievements and recognitions
 */
const Awards = () => {
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
      const cards = sectionRef.current.querySelectorAll('.award-card');
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  const awards = [
    {
      title: 'Winner at GOLC International Awards',
      description: 'Winner in Simulated and Digitally Visualized Experiments for building an interactive quantum simulation and visualization platform.',
      year: '2025',
      icon: '🏆'
    },
    {
      title: 'Hackathon Winner',
      description: 'First place at the TechSprint GDG-VESIT Hackathon for creating a real-time, IoT and AI powered lab monitoring platform.',
      year: '2025',
      icon: '🥇'
    }
  ];

  return (
    <section id="awards" className="py-24 px-6 bg-primary-50">
      <div className="max-w-5xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Awards & Achievements
        </h2>
        <div className="w-20 h-1 bg-primary-900 mb-12"></div>

        {/* Awards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="award-card opacity-0 group bg-white rounded-xl p-8 shadow-sm border border-primary-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary-300"
            >
              {/* Award icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {award.icon}
              </div>

              {/* Year badge */}
              <div className="inline-block px-3 py-1 bg-primary-900 text-white text-sm font-medium rounded-full mb-4">
                {award.year}
              </div>

              {/* Award title */}
              <h3 className="text-2xl font-semibold text-primary-900 mb-3">
                {award.title}
              </h3>

              {/* Award description */}
              <p className="text-primary-600 leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
