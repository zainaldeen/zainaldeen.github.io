import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Container from '../UI/Container';
import Button from '../UI/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-2xl font-bold text-slate-900 dark:text-white transition-colors"
            onClick={() => scrollToSection('hero')}
          >
            ZF<span className="text-blue-600 dark:text-blue-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {['about', 'experience', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 text-sm font-medium capitalize transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <Button 
                variant="primary" 
                size="sm"
                icon={<Download size={16} />}
                onClick={() => window.open(`${import.meta.env.BASE_URL}files/resume.pdf`, '_blank')}
              >
                Resume
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg absolute top-full left-0 right-0 border-t border-slate-100 dark:border-slate-800 transition-all duration-300">
          <Container>
            <ul className="py-4 space-y-3">
              {['about', 'experience', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="w-full text-left py-2 px-4 text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 font-medium capitalize transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <Button 
                  variant="primary" 
                  className="w-full mt-2"
                  icon={<Download size={16} />}
                  onClick={() => window.open(`${import.meta.env.BASE_URL}files/resume.pdf`, '_blank')}
                >
                  Download Resume
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;