import HeroButtons from "./HeroButtons";
import { motion } from "framer-motion";

function HeroContent() {
  return (
    <motion.div
  className="hero-content"
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

      <span className="hero-tag">
        👋 Welcome to My Journey
      </span>

      <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.7 }}
>
        I'm <br />
        <span>Ajith R</span>
      </motion.h1>

      <motion.h2
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.7 }}
>
        Engineering Reliable Test Automation
        for Modern Banking Systems.
      </motion.h2>

      <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7, duration: 0.8 }}
>
        Passionate Automation Test Engineer with experience
        in Java, Selenium, Playwright, Azure and AI.
        I love building scalable automation solutions
        that improve software quality.
      </motion.p>

      <div className="tech-stack">

        <span>☕ Java</span>
<span>🧪 Selenium</span>
<span>🎭 Playwright</span>
<span>☁ Azure</span>
<span>🤖 AI</span>

      </div>

      <HeroButtons />

    </motion.div>
  );
}

export default HeroContent;