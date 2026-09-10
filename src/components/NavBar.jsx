import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';
import { waLink } from '../data/content';

const LINKS = [
  { href: '#doctor', label: 'El profesional' },
  { href: '#servicios', label: 'Tratamientos' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#contacto', label: 'Contacto' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length) return undefined;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-abierto', open);
  }, [open]);

  const close = () => setOpen(false);

  const linkList = (onClick) => LINKS.map((l) => (
    <a key={l.href} href={l.href} className={active === l.href ? 'activo' : ''} onClick={onClick}>
      {l.label}
    </a>
  ));

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} id="nav">
      <div className="container nav-in">
        <a className="brand" href="#inicio" aria-label="DT Odontología, ir al inicio">
          <img src="/images/logo-dt-final.png" className="brand-mark" alt="Logo DT Odontología" width="44" height="44" />
          <span className="brand-text">DT <b>Odontología</b><small>Dr. Duilio Torres</small></span>
        </a>

        <nav className="nav-links nav-links--desktop" aria-label="Navegación principal">
          {linkList()}
          <a className="btn btn-wa nav-links-cta" href={waLink('Hola Dr. Torres, quisiera consultar por un turno.')} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" className="ic" /> Pedir turno
          </a>
        </nav>

        <button
          className={`burger ${open ? 'is-open' : ''}`}
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {createPortal(
        <>
          <div className={`nav-backdrop ${open ? 'is-open' : ''}`} onClick={close} />
          <nav className={`nav-links nav-links--mobile ${open ? 'is-open' : ''}`} aria-label="Navegación móvil">
            {linkList(close)}
            <a className="btn btn-wa nav-links-cta" href={waLink('Hola Dr. Torres, quisiera consultar por un turno.')} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" className="ic" /> Pedir turno
            </a>
          </nav>
        </>,
        document.body
      )}
    </header>
  );
}
