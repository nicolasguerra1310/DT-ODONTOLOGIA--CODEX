import Icon from './Icon';
import { EMAIL, INSTAGRAM_URL } from '../data/content';

export default function Footer() {
  const anio = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="container foot-in">
        <div className="foot-brand">
          <a className="brand" href="#inicio">
            <img src="/images/logo-dt-final.png" className="brand-mark" alt="" width="46" height="46" />
            <span className="brand-text">DT <b>Odontología</b><small>Dr. Duilio Torres</small></span>
          </a>
          <div className="foot-social">
            <a className="is-wa" href="https://wa.me/5493816717375" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" className="ic" /></a>
            <a className="is-ig" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" className="ic" /></a>
            <a className="is-mail" href={`mailto:${EMAIL}`} aria-label="Email"><Icon name="mail" className="ic" /></a>
          </div>
        </div>
      </div>

      <div className="container foot-bottom">
        <p>&copy; {anio} DT Odontología — Dr. Duilio Torres. Todos los derechos reservados.</p>
        <p className="foot-note">La información de este sitio es orientativa y no reemplaza una consulta profesional.</p>
      </div>
    </footer>
  );
}
