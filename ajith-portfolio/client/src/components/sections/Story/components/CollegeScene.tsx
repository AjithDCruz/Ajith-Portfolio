import { motion } from "framer-motion";
import campus from "../../../../assets/images/college/hindusthan-campus.jpg";
import "./CollegeScene.css";

const CollegeScene = () => {
  return (
    <motion.div
      className="college-scene"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
      }}
    >
      <div className="location-badge">
        📍 Coimbatore, Tamil Nadu
      </div>

      <img
        src={campus}
        alt="Hindusthan College"
      />
    </motion.div>
  );
};

export default CollegeScene;