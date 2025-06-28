import React from "react";
import "./TechStack.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiBootstrap} from "react-icons/si";
import { DiJava, DiVisualstudio } from "react-icons/di";

function TechStack() {
  return (
    <section id="stack" className="techstack-section">
      <h2>Tech Stack</h2>
      <p className="techstack-sub">Tools and technologies I’ve worked with</p>

      <div className="tech-category">
        <h3>Core</h3>
        <div className="tech-icons">
          <div><FaHtml5 className="icon html" /> HTML</div>
          <div><FaCss3Alt className="icon css" /> CSS</div>
          <div><FaJs className="icon js" /> JavaScript</div>
        </div>
      </div>

      <div className="tech-category">
        <h3>Frontend Frameworks</h3>
        <div className="tech-icons">
          <div><FaReact className="icon react" /> React</div>
          <div><SiTailwindcss className="icon tailwind" /> Tailwind</div>
          <div><SiBootstrap className="icon bootstrap" />Bootstrap</div>
          <div><SiVite className="icon vite" /> Vite</div>
        </div>
      </div>

      <div className="tech-category">
        <h3>Backend  Languages</h3>
        <div className="tech-icons">
          <div><DiJava className="icon java" />Core Java</div>
        </div>
      </div>

      <div className="tech-category">
        <h3>Tools</h3>
        <div className="tech-icons">
          <div><FaGitAlt className="icon git" /> Git & GitHub</div>
          <div><DiVisualstudio className="icon vscode" /> VS Code</div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
