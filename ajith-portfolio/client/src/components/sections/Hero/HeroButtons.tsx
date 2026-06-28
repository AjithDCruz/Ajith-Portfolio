import { motion } from "framer-motion";

function HeroButtons() {
  return (
    <motion.div
  className="hero-buttons"
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 0.7 }}
>

      <button className="primary-btn">
        Start My Journey
      </button>

      <button className="secondary-btn">
        Download Resume
      </button>

    </motion.div>
  );
}

export default HeroButtons;