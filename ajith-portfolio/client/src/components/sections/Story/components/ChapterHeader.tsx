import { motion } from "framer-motion";

interface ChapterHeaderProps {
  chapter: string;
  title: string;
  quote: string;
}

const ChapterHeader = ({
  chapter,
  title,
  quote,
}: ChapterHeaderProps) => {
  return (
    <motion.div
      className="chapter-header"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="chapter-number">{chapter}</span>

      <h2>{title}</h2>

      <p className="chapter-quote">"{quote}"</p>

      <div className="chapter-line"></div>
    </motion.div>
  );
};

export default ChapterHeader;