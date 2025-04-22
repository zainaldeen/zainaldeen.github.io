import React, { useEffect, useRef } from 'react';
import { resumeData } from '../../data/resumeData';
import Badge from '../UI/Badge';
import Card, { CardBody } from '../UI/Card';
import Container from '../UI/Container';

const SkillsSection: React.FC = () => {
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

  const badgeVariants = ['primary', 'secondary', 'success', 'warning', 'error'] as const;

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white animate-on-scroll opacity-0">
            My Skills
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full animate-on-scroll opacity-0"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((skillGroup, index) => (
            <Card 
              key={index}
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardBody>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant={badgeVariants[index % badgeVariants.length]}
                      className="text-xs py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 animate-on-scroll opacity-0">
          <Card>
            <CardBody>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Education
                  </h3>
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                        {edu.period}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Languages
                  </h3>
                  <div className="space-y-4">
                    {resumeData.skills.find(s => s.category === "Languages")?.items.map((language, index) => {
                      const [lang, level] = language.split(':');
                      
                      // Calculate progress width based on language level
                      let progress = 100;
                      if (level) {
                        if (level.trim() === 'Native') progress = 100;
                        else if (level.trim() === 'Fluent') progress = 90;
                        else if (level.trim() === 'A1') progress = 20;
                      }
                      
                      return (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-slate-700 dark:text-slate-300">{lang}</span>
                            <span className="text-slate-600 dark:text-slate-400">{level}</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-1000" 
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;