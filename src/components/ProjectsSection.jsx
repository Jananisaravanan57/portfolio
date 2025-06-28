import React from "react";
import "./ProjectsSection.css";
import qrcode from "../assets/qrcode.png";
import lifeboard from "../assets/lifeboard.png";
import planpal from "../assets/planpal.png";

const projects = [
  {
    name: "LifeBoard",
    description: "A visual board for tracking daily mood and goals with a minimalist UI.",
    tech: ["React", "Tailwind CSS", "LocalStorage"],
    img: lifeboard,
    live: "#",
    code: "#"
  },
  {
    name: "PlanPal",
    description: "AI-powered travel planner that creates full itineraries with animation.",
    tech: ["React", "Framer Motion", "OpenAI API"],
    img: planpal,
    live: "#",
    code: "#"
  },
  {
    name: "QR Code Generator",
    description: "Generate custom QR codes instantly from any input text or URL.",
    tech: ["React", "QR Library"],
    img: qrcode,
    live: "https://mood-tracker-tau-lime.vercel.app/",
    code: "https://github.com/Jananisaravanan57/qrcode-generator"
  }
];

function ProjectsSection() {
  return (
    <section className="projects-premium-section" id="projects">
      <h2 className="projects-premium-title">
        ✨ Featured Projects
      </h2>

      <div className="project-premium-list">
        {projects.map((proj, index) => (
          <div
            key={index}
            className={`project-showcase-row ${index % 2 === 0 ? "left" : "right"}`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="project-showcase-img">
                  <img src={proj.img} alt={proj.name} />
                </div>
                <div className="project-showcase-content">
                  <h3>{proj.name}</h3>
                  <p>{proj.description}</p>
                  <div className="project-showcase-tags">
                    {proj.tech.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-showcase-links">
                    <a href={proj.live} target="_blank" rel="noreferrer">🔗 Live</a>
                    <a href={proj.code} target="_blank" rel="noreferrer">💻 Code</a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="project-showcase-content">
                  <h3>{proj.name}</h3>
                  <p>{proj.description}</p>
                  <div className="project-showcase-tags">
                    {proj.tech.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-showcase-links">
                    <a href={proj.live} target="_blank" rel="noreferrer">🔗 Live</a>
                    <a href={proj.code} target="_blank" rel="noreferrer">💻 Code</a>
                  </div>
                </div>
                <div className="project-showcase-img">
                  <img src={proj.img} alt={proj.name} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;