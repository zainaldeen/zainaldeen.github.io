import { Briefcase as BriefcaseBusiness, Code2, CodeSquare, GraduationCap, Languages, Laptop } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { resumeData } from '../../data/resumeData';
import Container from '../UI/Container';

const AboutSection: React.FC = () => {
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

  const stats = [
    { 
      icon: <BriefcaseBusiness className="w-8 h-8 text-blue-500" />, 
      value: '6+', 
      label: 'Years Experience' 
    },
    { 
      icon: <Code2 className="w-8 h-8 text-blue-500" />, 
      value: '10+', 
      label: 'Tech Stack' 
    },
    { 
      icon: <Languages className="w-8 h-8 text-blue-500" />, 
      value: '4', 
      label: 'Languages' 
    },
    { 
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />, 
      value: '1', 
      label: 'Degree' 
    }, 
    { 
      icon: <Laptop className="w-8 h-8 text-blue-500" />, 
      value: '10+', 
      label: 'Personal Projects' 
    },
    { 
      icon: <CodeSquare className="w-8 h-8 text-blue-500" />, 
      value: '12', 
      label: 'Tech Courses' 
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white animate-on-scroll opacity-0">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full animate-on-scroll opacity-0"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/behind_profile.jpg" 
                  alt="Professional portrait" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 animate-on-scroll opacity-0">
              Professional Software Engineer
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 animate-on-scroll opacity-0">
              {resumeData.summary}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg transition-transform hover:scale-105 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {stat.icon}
                  <span className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{stat.value}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;