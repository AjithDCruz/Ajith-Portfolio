import { motion } from "framer-motion";

interface Achievement {
  value: string;
  label: string;
}

interface AchievementCardProps {
  achievements: Achievement[];
}

function AchievementCard({ achievements }: AchievementCardProps) {
  return (
    <div className="automation-achievements">
      <p className="automation-achievements-label">
        Engineering Impact
      </p>

      <div className="automation-achievements-grid">
        {achievements.map((achievement, index) => (
          <motion.article
            className="automation-achievement-card"
            key={achievement.label}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              delay: index * 0.1,
              duration: 0.55,
            }}
          >
            <strong>{achievement.value}</strong>
            <span>{achievement.label}</span>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default AchievementCard;