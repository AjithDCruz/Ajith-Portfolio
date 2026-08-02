import { motion } from "framer-motion";
import type { Certificate } from "../../../../data/certificates";

interface CertificateCardProps {
  certificate: Certificate;
}

function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <motion.article
      className="certificate-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="certificate-image-wrapper">
        <img
          src={certificate.image}
          alt={certificate.name}
          className="certificate-image"
        />
      </div>

      <div className="certificate-content">
        <span className="certificate-category">
          {certificate.category}
        </span>

        <h4>{certificate.name}</h4>

        <p>{certificate.issuer}</p>
      </div>
    </motion.article>
  );
}

export default CertificateCard;