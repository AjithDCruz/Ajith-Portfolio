import { motion } from "framer-motion";

interface AutomationFlowProps {
  steps: string[];
}

function AutomationFlow({ steps }: AutomationFlowProps) {
  return (
    <div className="automation-flow">
      <p className="automation-flow-label">Automation Journey</p>

      <div className="automation-flow-track">
        {steps.map((step, index) => (
          <div className="automation-flow-item" key={step}>
            <motion.div
              className="automation-flow-node"
              initial={{ opacity: 0, y: 28, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: index * 0.12,
                duration: 0.55,
              }}
            >
              <span className="automation-flow-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{step}</strong>
            </motion.div>

            {index < steps.length - 1 && (
              <motion.div
                className="automation-flow-connector"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12 + 0.25,
                  duration: 0.5,
                }}
              >
                <span>→</span>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutomationFlow;