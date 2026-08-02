import { motion } from "framer-motion";

interface StoryNarrativeProps {
  description: string;
}

function StoryNarrative({ description }: StoryNarrativeProps) {
  return (
    <motion.p
      className="experience-narrative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      {description}
    </motion.p>
  );
}

export default StoryNarrative;