import { motion } from 'framer-motion';

export default function SectionHeading({ count, eyebrow, title, lead, align = 'center' }) {
  return (
    <div className={`section-head section-head--${align}`}>
      <span className="ghost-numeral" aria-hidden="true">{count}</span>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <em>{count}</em> {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          className="section-lead"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
}
