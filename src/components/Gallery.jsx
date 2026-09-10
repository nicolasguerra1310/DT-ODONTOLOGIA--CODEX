import { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import { galleryShots } from '../data/content';

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="consultorio">
      <Container>
        <SectionHeading
          count="03"
          eyebrow="El consultorio"
          title={<>Un espacio pensado para que <span className="hl">estés cómodo</span></>}
          lead="Así es el lugar donde vas a ser atendido: limpio, ordenado y con el equipamiento necesario para trabajar con precisión."
        />

        <div className="gallery">
          {galleryShots.map((shot, i) => (
            <motion.button
              key={shot.src}
              type="button"
              className={`shot ${shot.tall ? 'shot-tall' : ''}`}
              onClick={() => setActive(shot)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <img src={shot.src} alt={shot.alt} loading="lazy" />
              <span className="shot-cap">{shot.caption}</span>
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {active && (
          <Modal show onHide={() => setActive(null)} centered size="lg" className="lightbox-modal" animation={false}>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }}>
              <button className="lb-close" type="button" aria-label="Cerrar" onClick={() => setActive(null)}>
                <Icon name="close" className="ic" />
              </button>
              <figure className="lb-fig">
                <img src={active.src} alt={active.alt} />
                <figcaption>{active.caption}</figcaption>
              </figure>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}
