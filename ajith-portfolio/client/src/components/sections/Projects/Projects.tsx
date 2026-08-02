import { motion } from "framer-motion";
import "./Projects.css";

import ProjectCard from "./components/ProjectCard";
import { projects } from "../../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.p
          className="projects-chapter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          CHAPTER 06
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          "Engineering solutions built from real-world challenges."
        </motion.h3>

        <div className="projects-line" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;