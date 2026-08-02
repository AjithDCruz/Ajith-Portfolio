import { motion } from "framer-motion";
import type { Project } from "../../../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: index * 0.1,
        duration: 0.65,
      }}
    >
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <span className="project-subtitle">
          {project.subtitle}
        </span>
      </div>

      <div className="project-content">
        <h4>{project.title}</h4>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        {(project.githubUrl || project.liveUrl) && (
          <div className="project-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;