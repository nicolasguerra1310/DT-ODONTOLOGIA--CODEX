import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { services } from '../data/content';

export default function Services() {
  return (
    <section className="section" id="servicios">
      <Container>
        <SectionHeading
          count="02"
          eyebrow="Tratamientos"
          title={<>Atención para cada <span className="hl">necesidad</span></>}
          lead="Una propuesta integral, con un plan indicado según cada paciente."
        />

        <Row className="g-4">
          {services.map((s, i) => (
            <Col key={s.title} xs={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="service-simple"
              >
                <span className="card-ic"><Icon name={s.icon} className="ic" /></span>
                <h3>{s.title}</h3>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
