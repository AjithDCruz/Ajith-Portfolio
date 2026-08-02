import { motion } from "framer-motion";
import "./Automation.css";

import { automation } from "../../../data/story/automation";
import AutomationFlow from "./components/AutomationFlow";
import AchievementCard from "./components/AchievementCard";

function Automation() {
  return (
    <section className="automation" id="automation">
      <div className="automation-container">
        <motion.p
          className="automation-chapter"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {automation.chapter}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          {automation.title}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          "{automation.quote}"
        </motion.h3>

        <div className="automation-line" />

        <motion.p
          className="automation-description"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {automation.description}
        </motion.p>
        <AutomationFlow steps={automation.flow} />
        <AchievementCard achievements={automation.achievements} />
      </div>
    </section>
  );
}

export default Automation;