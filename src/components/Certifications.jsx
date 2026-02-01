import React, { useEffect, useRef } from 'react';

/**
 * Certifications Section - Display professional certifications and credentials
 */
const Certifications = () => {
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
      const items = sectionRef.current.querySelectorAll('.cert-item');
      items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
      });
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2025',
      link: 'https://aws.amazon.com/certification/'
    },
    {
      name: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      year: '2024',
      link: 'https://cloud.google.com/certification'
    },
    {
      name: 'Meta Front-End Developer Professional',
      issuer: 'Meta',
      year: '2024',
      link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2023',
      link: 'https://www.cncf.io/certification/cka/'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2023',
      link: 'https://university.mongodb.com/certification'
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-primary-900 mb-12"></div>

        {/* Certifications timeline */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-item opacity-0 group relative pl-8 pb-6 border-l-2 border-primary-200 hover:border-primary-400 transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-900 rounded-full border-4 border-white group-hover:scale-125 transition-transform"></div>

              {/* Certification content */}
              <div className="bg-primary-50 rounded-lg p-6 transition-all duration-300 group-hover:shadow-lg group-hover:bg-white group-hover:border group-hover:border-primary-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-primary-900">
                    {cert.name}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 bg-primary-900 text-white text-sm font-medium rounded-full w-fit">
                    {cert.year}
                  </span>
                </div>
                
                <p className="text-primary-600 mb-3">
                  {cert.issuer}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 transition-colors font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verify Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
