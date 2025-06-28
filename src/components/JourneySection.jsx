import React from "react";
import "./JourneySection.css";
import { FaBriefcase, FaCode, FaRocket } from "react-icons/fa";

function JourneySection() {
  return (
    <section id="journey" className="journey-section">
      <h2>My Journey</h2>
      <div className="timeline">

        <div className="timeline-item">
          <div className="icon"><FaBriefcase /></div>
          <div className="content">
            <h3>Zoho</h3>
            <p>
              Worked in the Zoho Assist team for 1.10 years as a Full Stack Developer.
              Gained solid experience in building scalable, production-ready tools.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="icon upskill"><FaCode /></div>
          <div className="content">
            <h3>Upskilling Phase</h3>
            <p>
              Focused on personal well-being and professional growth.  
              Spent time building real-world React projects, refining JavaScript skills, and staying current with frontend trends.  
              Developed confidence in clean UI design, state management, and modern tooling.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="icon now"><FaRocket /></div>
          <div className="content">
            <h3>Now</h3>
            <p>
              Actively building React apps and exploring advanced frontend practices.  
              Fully ready and excited to return to the tech world with a sharper mindset and stronger skills.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default JourneySection;
