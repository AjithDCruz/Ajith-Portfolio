import "./Experience.css";

import WiproScene from "./components/WiproScene";
import ExperienceCard from "./components/ExperienceCard";
import StoryNarrative from "./components/StoryNarrative";

import { experience } from "../../../data/story/experience";
import TechStack from "./components/TechStack";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <p className="experience-chapter">{experience.chapter}</p>

        <h2>{experience.title}</h2>

        <h3>"{experience.quote}"</h3>

        <div className="experience-line" />

        <div className="experience-layout">
          <WiproScene />

          <ExperienceCard
            company={experience.company}
            role={experience.role}
            duration={experience.duration}
            domain={experience.domain}
            project={experience.project}
            highlights={experience.highlights}
          />
        </div>

        <StoryNarrative description={experience.description} />
        <TechStack technologies={experience.technologies} />
      </div>
    </section>
  );
}

export default Experience;