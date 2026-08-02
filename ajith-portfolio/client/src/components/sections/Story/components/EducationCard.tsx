import { motion } from "framer-motion";

interface Props {
  college: string;
  degree: string;
  specialization: string;
  cgpa: number;
  duration: string;
}

const EducationCard = ({
  college,
  degree,
  specialization,
  cgpa,
  duration,
}: Props) => {
  return (
    <motion.div
      className="education-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="education-top">
        <div className="college-icon">🎓</div>

        <div>
          <h4>{college}</h4>
          <p>{degree}</p>
          <span>{specialization}</span>
        </div>
      </div>

      <div className="cgpa-section">
        <p>CGPA</p>
        <h1>{cgpa}</h1>
      </div>

      <div className="duration">{duration}</div>
    </motion.div>
  );
};

export default EducationCard;