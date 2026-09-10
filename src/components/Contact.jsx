import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import {
  waLink, PHONE_DISPLAY, EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE, MAPS_URL,
} from '../data/content';

const cards = [
  {
    className: 'ccard-wa',
    icon: 'whatsapp',
    title: 'WhatsApp',
    text: PHONE_DISPLAY,
    cta: 'Escribir ahora',
    href: waLink('Hola Dr. Torres, quisiera consultar por un turno.'),
  },
  {
    className: 'ccard-ig',
    icon: 'instagram',
    title: 'Instagram',
    text: INSTAGRAM_HANDLE,
    cta: 'Ver perfil',
    href: INSTAGRAM_URL,
  },
  { icon: 'mail', title: 'Email', text: EMAIL, cta: 'Enviar mail', href: `mailto:${EMAIL}` },
];

export default function Contact() {
  return (
    <section className="section" id="contacto">
      <Container>
        <SectionHeading
          count="04"
          eyebrow="Contacto"
          title={<>Hablemos por el canal que <span className="hl">prefieras</span></>}
          lead="Turnos y consultas de manera simple y directa."
        />

        <Row className="contact-grid g-0">
          {cards.map((c, i) => (
            <Col key={c.title} md={4}>
              <motion.a
                className={`ccard ${c.className || ''}`}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Icon name={c.icon} className="ic ic-lg" />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="ccard-go">{c.cta} <Icon name="arrow" className="ic" /></span>
              </motion.a>
            </Col>
          ))}
        </Row>

        <div className="contact-details-simple">
          <div className="detail-simple">
            <Icon name="pin" className="ic" />
            <div>
              <h3>Dirección</h3>
              <p>Av. Avellaneda 853, Planta Baja<br />San Miguel de Tucumán</p>
              <a className="link" href={MAPS_URL} target="_blank" rel="noopener noreferrer">Ver ubicación <Icon name="arrow" className="ic" /></a>
            </div>
          </div>
          <div className="detail-simple">
            <Icon name="clock" className="ic" />
            <div>
              <h3>Turnos</h3>
              <p>Se coordinan por WhatsApp según disponibilidad.</p>
              <a className="link" href={waLink('Hola Dr. Torres, quisiera consultar horarios disponibles.')} target="_blank" rel="noopener noreferrer">Consultar turnos <Icon name="arrow" className="ic" /></a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
