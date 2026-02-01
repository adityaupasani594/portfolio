import React, { useEffect, useRef } from 'react';

/**
 * About Section - Professional summary showcasing skills and interests
 */
const About = () => {
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
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    'React & Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'UI/UX Design',
    'Cloud Architecture',
    'Database Design',
    'API Development'
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div ref={sectionRef} className="opacity-0">
          {/* Section header */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-900 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Professional summary */}
            <div className="space-y-6">
              <p className="text-lg text-primary-700 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a commitment to creating 
                meaningful digital experiences. With expertise spanning modern web technologies and a deep 
                understanding of user-centered design principles, I build solutions that are both beautiful 
                and functional.
              </p>
              
              <p className="text-lg text-primary-700 leading-relaxed">
                My approach combines technical excellence with creative problem-solving. I believe in writing 
                clean, maintainable code and designing interfaces that users love. Whether it's architecting 
                scalable backend systems or crafting pixel-perfect frontends, I'm dedicated to delivering 
                exceptional quality.
              </p>

              <p className="text-lg text-primary-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, and staying at the forefront of industry trends.
              </p>
            </div>

            {/* Skills grid */}
            <div>
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-primary-50 rounded-lg border border-primary-100 transition-all duration-300 hover:border-primary-300 hover:shadow-md hover:scale-105"
                  >
                    <p className="text-primary-800 font-medium text-center">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
