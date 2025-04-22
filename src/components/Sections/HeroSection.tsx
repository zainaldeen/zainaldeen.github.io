import { ChevronDown, Download, Mail } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { resumeData } from '../../data/resumeData';
import Button from '../UI/Button';
import Container from '../UI/Container';

const HeroSection: React.FC = () => {
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
      id="hero" 
      ref={sectionRef}
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 animate-on-scroll opacity-0">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
              Zain Aldeen Fayod
            </h1>
            <h2 className="text-2xl sm:text-3xl text-slate-700 dark:text-slate-300 mb-6 animate-on-scroll opacity-0" style={{ animationDelay: '400ms' }}>
              Senior Software Engineer
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-lg animate-on-scroll opacity-0" style={{ animationDelay: '600ms' }}>
              {resumeData.summary.split('.')[0] + '.'}
            </p>
            
            <div className="flex flex-wrap gap-4 animate-on-scroll opacity-0" style={{ animationDelay: '800ms' }}>
              <Button 
                variant="primary" 
                size="lg"
                icon={<Mail size={18} />}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                icon={<Download size={18} />}
                onClick={() => window.open('/files/resume.pdf', '_blank')}
              >
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl relative mx-auto max-w-md animate-on-scroll opacity-0">
              <img 
                src="/images/profile.jpg" 
                alt="Zain Aldeen Fayod" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-2 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm text-slate-700 dark:text-slate-200 hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;