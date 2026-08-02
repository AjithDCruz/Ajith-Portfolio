import { motion } from "framer-motion";
import "./Certifications.css";

import CertificateCard from "./components/CertificateCard";
import { certificates } from "../../../data/certificates";

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <motion.p
          className="certifications-chapter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          CHAPTER 05
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Continuous Learning
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          "Every certification added a new tool to my journey."
        </motion.h3>

        <div className="certifications-line" />

        <div className="certifications-grid">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;