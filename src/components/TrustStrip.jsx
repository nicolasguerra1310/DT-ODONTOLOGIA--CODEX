import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Icon from './Icon';

const items = [
  { icon: 'whatsapp', title: 'Turnos por WhatsApp', text: 'Escribinos y coordinamos día y horario de forma directa, sin formularios.' },
  { icon: 'shield', title: 'Subsidio de salud', text: 'Se recibe subsidio de salud. Consultá tu cobertura antes de la primera visita.' },
  { icon: 'heart', title: 'Atención personalizada', text: 'Trato cercano y explicación paso a paso de cada tratamiento.' },
  { icon: 'sparkles', title: 'Consultorio equipado', text: 'Equipamiento e instrumental para resolver tu tratamiento en el lugar.' },
];

export default function TrustStrip() {
  return (
    <section className="strip">
      <Container>
        <Row className="g-4 g-lg-0">
          {items.map((it, i) => (
            <Col key={it.title} xs={6} lg={3}>
              <motion.article
                className="pill"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <Icon name={it.icon} className="ic ic-lg" />
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </motion.article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
