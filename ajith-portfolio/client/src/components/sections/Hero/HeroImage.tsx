import hero from "../../../assets/images/profile/hero.png";
import { motion } from "framer-motion";

function HeroImage() {

  return (

    <motion.div
  className="hero-image"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>

      <img
        src={hero}
        alt="Ajith R"
      />

    </motion.div>

  );

}

export default HeroImage;