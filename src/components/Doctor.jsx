import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { waLink } from '../data/content';

export default function Doctor() {
  return (
    <section className="section section-alt" id="doctor">
      <Container>
        <Row className="justify-content-center">
          <Col lg={9} xl={8}>
            <motion.div
              className="split-copy doctor-simple"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="eyebrow"><em>01</em> Conocé al profesional</p>
              <h2>Dr. Duilio <span className="hl">Torres</span></h2>
              <p>Odontólogo dedicado a la atención integral de pacientes de todas las edades. Su forma de trabajar se apoya en algo simple: explicar cada paso, dar opciones claras y acompañar el tratamiento de principio a fin.</p>
              <p>En el consultorio vas a encontrar un espacio tranquilo y equipado, pensado para brindar una experiencia cómoda y acompañada.</p>

              <p className="doctor-note"><Icon name="check" className="ic" /> Atención de niños, adultos y adultos mayores.</p>

              <div className="split-actions">
                <a className="btn btn-primary" href={waLink('Hola Dr. Torres, quisiera consultar por un turno.')} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" className="ic" /> Consultar con el Dr. Torres
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
