import { motion } from "framer-motion";

interface TechStackProps {
  technologies: string[];
}

function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="experience-tech">
      <p className="experience-tech-label">Tools & Technologies</p>

      <div className="experience-tech-list">
        {technologies.map((technology, index) => (
          <motion.span
            key={technology}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
            }}
          >
            {technology}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default TechStack;