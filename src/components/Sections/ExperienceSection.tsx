import React, { useEffect, useRef } from 'react';
import Container from '../UI/Container';
import Card, { CardBody } from '../UI/Card';
import { resumeData } from '../../data/resumeData';

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white animate-on-scroll opacity-0">
            Work Experience
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full animate-on-scroll opacity-0"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-900 transform md:translate-x-px"></div>
          
          <div className="space-y-12">
            {resumeData.workExperience.map((job, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:w-1/2 animate-on-scroll opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="h-full">
                      <CardBody>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 block mb-1">
                          {job.period}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {job.position}
                        </h3>
                        <h4 className="text-md font-medium text-slate-700 dark:text-slate-300 mb-4">
                          {job.company}
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 mr-2"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-800 z-10"></div>
                
                <div className="flex-1 md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;