import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import SkillsSection from './components/Sections/SkillsSection';
import ContactSection from './components/Sections/ContactSection';
import './utils/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Zain Aldeen Fayod | Senior Software Engineer';
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;