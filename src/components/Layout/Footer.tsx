import React from 'react';
import Container from '../UI/Container';
import { GithubIcon, Gitlab as GitlabLogo, Mail, MapPin, Phone } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zain Aldeen Fayod</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Experienced Software Engineer specializing in scalable, high-performance solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-300">
                <Phone size={18} className="mr-2 text-blue-400" />
                <a href={`tel:${resumeData.contact.phone}`} className="hover:text-blue-400 transition-colors">
                  {resumeData.contact.phone}
                </a>
              </li>
              <li className="flex items-center text-slate-300">
                <Mail size={18} className="mr-2 text-blue-400" />
                <a href={`mailto:${resumeData.contact.email}`} className="hover:text-blue-400 transition-colors">
                  {resumeData.contact.email}
                </a>
              </li>
              <li className="flex items-center text-slate-300">
                <MapPin size={18} className="mr-2 text-blue-400" />
                <span>{resumeData.contact.address}</span>
              </li>
              {resumeData.contact.gitlab && (
                <li className="flex items-center text-slate-300">
                  <GitlabLogo size={18} className="mr-2 text-blue-400" />
                  <a 
                    href={resumeData.contact.gitlab}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    GitLab
                  </a>
                </li>
              )}
              {resumeData.contact.github && (
                <li className="flex items-center text-slate-300">
                  <GithubIcon size={18} className="mr-2 text-blue-400" />
                  <a 
                    href={resumeData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Github
                  </a>
                </li>
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['about', 'experience', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    className="text-slate-300 hover:text-blue-400 transition-colors capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Zain Aldeen Fayod. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;