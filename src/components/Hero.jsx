import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { waLink } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: [0.2, 0.7, 0.3, 1] } }),
};

const heroImages = [
  {
    src: '/images/hero-01.webp',
    alt: 'El Dr. Duilio Torres conversando con una paciente en el consultorio',
    position: 'center 55%',
  },
  {
    src: '/images/hero-02.webp',
    alt: 'El Dr. Duilio Torres explicando un tratamiento dental a un paciente',
    position: '65% center',
  },
  {
    src: '/images/hero-03.webp',
    alt: 'El Dr. Duilio Torres atendiendo a una paciente',
    position: 'center center',
  },
  {
    src: '/images/hero-04.webp',
    alt: 'El Dr. Duilio Torres en el sillón de su consultorio',
    position: 'center 45%',
  },
  {
    src: '/images/hero-05.webp',
    alt: 'El Dr. Duilio Torres junto al equipamiento odontológico',
    position: '45% center',
  },
  {
    src: '/images/hero-06.webp',
    alt: 'El Dr. Duilio Torres concentrado durante una atención odontológica',
    position: '45% center',
  },
  {
    src: '/images/hero-07.webp',
    alt: 'El Dr. Duilio Torres preparado para atender en el consultorio',
    position: 'center center',
  },
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="grain" />
      </div>
      <Container>
        <Row className="hero-in align-items-center g-5">
          <Col lg={7} className="hero-copy">
            <motion.p className="eyebrow" variants={fadeUp} initial="hidden" animate="show" custom={0}>
              Consultorio odontológico · Tucumán
            </motion.p>
            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
              Tu sonrisa, en manos <span className="hl">de confianza</span>
            </motion.h1>
            <motion.p className="lead" variants={fadeUp} initial="hidden" animate="show" custom={2}>
              Conocé al Dr. Duilio Torres y su propuesta de atención odontológica cercana, clara y profesional.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="show" custom={3}>
              <a className="btn btn-wa btn-lg" href={waLink('Hola Dr. Torres, quisiera consultar por un turno.')} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" className="ic" /> Escribir por WhatsApp
              </a>
              <a className="btn btn-ghost btn-lg" href="#doctor">
                Conocer al profesional <Icon name="arrow" className="ic" />
              </a>
            </motion.div>
          </Col>

          <Col lg={5}>
            <motion.figure
              className="hero-photo"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1], delay: 0.2 }}
            >
              <div className="photo-frame">
                <Carousel
                  className="hero-carousel"
                  controls={heroImages.length > 1}
                  indicators={heroImages.length > 1}
                  interval={5000}
                  fade
                >
                  {heroImages.map((image, index) => (
                    <Carousel.Item key={image.src}>
                      <img
                        src={image.src}
                        width="1045"
                        height="1400"
                        alt={image.alt}
                        fetchpriority={index === 0 ? 'high' : undefined}
                        loading="eager"
                        decoding="async"
                        style={{ objectPosition: image.position }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <figcaption className="photo-caption">
                <span className="cap-rule"></span>
                Dr. Duilio Torres, Odontólogo
              </figcaption>
            </motion.figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
