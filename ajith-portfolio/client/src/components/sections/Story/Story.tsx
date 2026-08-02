import "./Story.css";

import ChapterHeader from "./components/ChapterHeader";
import CollegeScene from "./components/CollegeScene";
import EducationCard from "./components/EducationCard";

import { education } from "../../../data/story/education";

function Story() {
  return (
    <section className="story">
      <div className="story-container">
        <ChapterHeader
          chapter={education.chapter}
          title={education.title}
          quote={education.quote}
        />

        <div className="story-layout">
          {/* Left Side */}
          <CollegeScene />

          <div className="story-description">
  <p>
    Technology has always fascinated me. My journey into software engineering
    began at Hindusthan College of Engineering and Technology, where I built a
    strong academic foundation and graduated with a CGPA of <strong>9.26</strong>.
    Those years shaped my curiosity, discipline, and passion for creating
    high-quality software.
  </p>
</div>

          {/* Right Side */}
          <EducationCard
            college={education.college}
            degree={education.degree}
            specialization={education.specialization}
            cgpa={education.cgpa}
            duration={education.duration}
          />
        </div>
      </div>
    </section>
  );
}

export default Story;