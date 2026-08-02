import { motion } from "framer-motion";
import wiproCampus from "../../../../assets/images/companies/wipro-campus.jpg";

function WiproScene() {
  return (
    <motion.div
      className="wipro-scene"
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="wipro-location">
        📍 Coimbatore, India
      </div>

      <img
        className="wipro-campus"
        src={wiproCampus}
        alt="Wipro campus"
      />

      <div className="wipro-brand">
  <div className="wipro-brand-mark">W</div>
  <span>Wipro Limited</span>
</div>
    </motion.div>
  );
}

export default WiproScene;