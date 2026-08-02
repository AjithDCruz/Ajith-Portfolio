import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.p
          className="contact-chapter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          CHAPTER 07
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Next Chapter
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          "Could begin with your company."
        </motion.h3>

        <div className="contact-line" />

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="contact-intro">
            I am open to QA Automation and SDET opportunities where I can
            contribute through reliable test automation, strong validation,
            and continuous improvement.
          </p>

          <div className="contact-actions">
            <a
              className="contact-primary"
              href="mailto:abc@google.com"
            >
              Contact Me
            </a>

            <a
              className="contact-secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;