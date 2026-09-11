import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    quote: 'La atención fue muy clara y tranquila. Me explicó cada paso y me sentí acompañada durante toda la consulta.',
    name: 'Lucía',
    age: 32,
    treatment: 'Limpieza y control preventivo',
  },
  {
    quote: 'Tenía una pieza dañada y el resultado quedó muy natural. Destaco especialmente la paciencia y el cuidado.',
    name: 'Martín',
    age: 41,
    treatment: 'Arreglo dental',
  },
  {
    quote: 'Buscaba mejorar mi sonrisa sin perder naturalidad. Quedé muy conforme con el tratamiento y la atención.',
    name: 'Camila',
    age: 29,
    treatment: 'Blanqueamiento dental',
  },
  {
    quote: 'Recibí una explicación completa de las alternativas y pude elegir con tranquilidad. Hoy me siento mucho más cómoda.',
    name: 'Graciela',
    age: 58,
    treatment: 'Prótesis dental',
  },
  {
    quote: 'Llegué bastante nervioso, pero el trato cercano me dio mucha tranquilidad. También recibí indicaciones claras para después del procedimiento.',
    name: 'Pablo',
    age: 36,
    treatment: 'Cirugía dental',
  },
];

export default function Testimonials() {
  return (
    <section className="section section-alt" id="opiniones">
      <Container>
        <SectionHeading
          count="03"
          eyebrow="Experiencias"
          title={<>Lo que cuentan nuestros <span className="hl">pacientes</span></>}
          lead="Experiencias de atención compartidas por quienes eligieron el consultorio."
        />

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={`${testimonial.name}-${testimonial.treatment}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
            >
              <span className="testimonial-quote" aria-hidden="true">“</span>
              <p>{testimonial.quote}</p>
              <footer>
                <strong>{testimonial.name}, {testimonial.age} años</strong>
                <span>{testimonial.treatment}</span>
              </footer>
              <div className="testimonial-stars" aria-label="5 de 5 estrellas">★★★★★</div>
            </motion.article>
          ))}
        </div>

        <p className="testimonials-note">
          Textos de muestra. Reemplazar por opiniones verificadas y autorizadas antes de publicar el sitio.
        </p>
      </Container>
    </section>
  );
}