import { motion } from 'framer-motion';
import Icon from './Icon';
import { waLink } from '../data/content';

export default function WhatsAppFloat() {
  return (
    <motion.a
      className="wa-float"
      href={waLink('Hola Dr. Torres, quisiera consultar por un turno.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
    >
      <Icon name="whatsapp" className="ic" />
      <span className="wa-tip">¿Coordinamos tu turno?</span>
    </motion.a>
  );
}
