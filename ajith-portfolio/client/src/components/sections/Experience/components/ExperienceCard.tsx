import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  domain: string;
  project: string;
  highlights: string[];
}

function ExperienceCard({
  company,
  role,
  duration,
  domain,
  project,
  highlights,
}: ExperienceCardProps) {
  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <p className="experience-card-label">Professional Journey</p>

      <h4>{company}</h4>
      <p className="experience-role">{role}</p>

      <div className="experience-meta">
        <div>
          <span>Domain</span>
          <strong>{domain}</strong>
        </div>

        <div>
          <span>Project</span>
          <strong>{project}</strong>
        </div>
      </div>

      <ul className="experience-highlights">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="experience-duration">{duration}</div>
    </motion.div>
  );
}

export default ExperienceCard;