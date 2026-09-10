import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const testimonials = Array.from({ length: 5 }, (_, index) => ({
  quote: 'Comentario real del paciente pendiente de agregar.',
  author: `Paciente ${index + 1}`,
}));

export default function Testimonials() {
  return (
    <section className="section section-alt" id="opiniones">
      <Container>
        <SectionHeading
          count="03"
          eyebrow="Experiencias"
          title={<>Lo que cuentan nuestros <span className="hl">pacientes</span></>}
          lead="Cinco espacios preparados para incorporar comentarios reales."
        />

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
            >
              <span className="testimonial-quote" aria-hidden="true">“</span>
              <p>{testimonial.quote}</p>
              <footer>{testimonial.author}</footer>
            </motion.article>
          ))}
        </div>

        <p className="testimonials-note">
          Reemplazar estos textos con opiniones verificadas antes de publicar el sitio.
        </p>
      </Container>
    </section>
  );
}
