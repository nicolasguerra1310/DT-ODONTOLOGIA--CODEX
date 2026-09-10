import { Container, Accordion } from 'react-bootstrap';
import SectionHeading from './SectionHeading';
import { faqItems } from '../data/content';

export default function Faq() {
  return (
    <section className="section section-alt" id="faq">
      <Container className="narrow">
        <SectionHeading
          count="04"
          eyebrow="Preguntas frecuentes"
          title={<>Antes de tu <span className="hl">primera visita</span></>}
        />

        <Accordion className="faq-accordion" defaultActiveKey={undefined} flush>
          {faqItems.map((item, i) => (
            <Accordion.Item eventKey={String(i)} key={item.q}>
              <Accordion.Header>{item.q}</Accordion.Header>
              <Accordion.Body>{item.a}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
