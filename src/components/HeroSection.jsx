import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="content">
        <h1>Hi, I’m <span>Janani Saravanan</span></h1>
        <p>Frontend Developer | Dream Builder | Coder</p>
        <div className="buttons">
         <a href="#journey">My Journey</a>
<a href="#projects">View Projects</a>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
