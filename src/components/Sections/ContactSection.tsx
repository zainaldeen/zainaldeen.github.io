import { GithubIcon, Gitlab as GitlabLogo, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { resumeData } from '../../data/resumeData';
import Button from '../UI/Button';
import Card, { CardBody } from '../UI/Card';
import Container from '../UI/Container';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white animate-on-scroll opacity-0">
            Get In Touch
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full animate-on-scroll opacity-0"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-on-scroll opacity-0">
            <Card className="h-full">
              <CardBody>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</h4>
                      <a href={`tel:${resumeData.contact.phone}`} className="text-slate-900 dark:text-white text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {resumeData.contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</h4>
                      <a href={`mailto:${resumeData.contact.email}`} className="text-slate-900 dark:text-white text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {resumeData.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</h4>
                      <p className="text-slate-900 dark:text-white text-lg">
                        {resumeData.contact.address}
                      </p>
                    </div>
                  </div>
                  
                  {resumeData.contact.gitlab && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <GitlabLogo className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">GitLab</h4>
                        <a 
                          href={resumeData.contact.gitlab}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-900 dark:text-white text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          View Gitlab Profile
                        </a>
                      </div>
                    </div>
                  )}

                  {resumeData.contact.github && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <GithubIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Github</h4>
                        <a 
                          href={resumeData.contact.github}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-900 dark:text-white text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          View Github Profile
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          </div>
          
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
            <Card>
              <CardBody>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white transition-colors"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white transition-colors"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      icon={<Send size={16} />}
                      disabled={isSubmitting}
                      onClick={() => {
                        const mailtoLink = `mailto:zainaldeenfayod@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
                        window.location.href = mailtoLink;
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    
                    {submitStatus === 'success' && (
                      <p className="mt-3 text-sm text-green-600 dark:text-green-400">
                        Your message has been sent successfully!
                      </p>
                    )}
                    
                    {submitStatus === 'error' && (
                      <p className="mt-3 text-sm text-red-600 dark:text-red-400">
                        There was an error sending your message. Please try again.
                      </p>
                    )}
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;