import React from 'react';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import ProjectsSection from './components/ProjectsSection';
import TechStack from './components/TechStack';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <>
      <HeroSection />
      <JourneySection />
      <TechStack />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}
export default Home;
