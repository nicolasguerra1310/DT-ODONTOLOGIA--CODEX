export const WHATSAPP = '5493816717375';
export const PHONE_DISPLAY = '381 671-7375';
export const PHONE_FULL_DISPLAY = '+54 9 381 671-7375';
export const EMAIL = 'dtorresodontologia@gmail.com';
export const INSTAGRAM_HANDLE = '@duiliot.od';
export const INSTAGRAM_URL = 'https://www.instagram.com/duiliot.od/';
export const MAPS_URL = 'https://maps.app.goo.gl/TJi8XT9Bx9y65NLLA';

export const waLink = (texto) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

export const services = [
  {
    icon: 'shield',
    title: 'Control preventivo',
    text: 'Chequeos periódicos para detectar a tiempo caries, desgastes y problemas de encía, antes de que duelan.',
  },
  {
    icon: 'sparkles',
    title: 'Limpiezas',
    text: 'Remoción de sarro y placa bacteriana para mantener dientes y encías sanos y prevenir complicaciones.',
  },
  {
    icon: 'sun',
    title: 'Blanqueamiento',
    text: 'Tratamiento para aclarar el color de tus dientes de manera controlada y cuidando el esmalte.',
  },
  {
    icon: 'tooth',
    title: 'Arreglos',
    text: 'Restauraciones estéticas que devuelven forma, color y función a la pieza dañada por caries o fracturas.',
  },
  {
    icon: 'crown',
    title: 'Prótesis',
    text: 'Prótesis fijas y removibles para reponer piezas perdidas y recuperar la mordida y la estética.',
  },
  {
    icon: 'medical',
    title: 'Cirugías',
    text: 'Extracciones y procedimientos quirúrgicos con indicaciones y seguimiento post-operatorio.',
  },
];

export const galleryShots = [
  { src: '/images/tratamiento-blanqueamiento.jpg', caption: 'Blanqueamiento en sesión', alt: 'El Dr. Torres realizando una sesión de blanqueamiento dental a un paciente', tall: true },
  { src: '/images/consultorio-equipo.jpg', caption: 'Sillón y equipamiento', alt: 'Sillón y equipo odontológico del consultorio DT Odontología' },
  { src: '/images/dr-torres-escritorio.jpg', caption: 'Agenda y seguimiento', alt: 'El Dr. Torres organizando la agenda de turnos' },
  { src: '/images/consultorio-sala.jpg', caption: 'Sala de atención', alt: 'Sala de atención del consultorio DT Odontología' },
  { src: '/images/dr-torres-consulta.jpg', caption: 'Consulta y diagnóstico', alt: 'El Dr. Torres en el escritorio de consulta' },
];

export const faqItems = [
  {
    q: '¿Cómo saco un turno?',
    a: (
      <>La vía más rápida es WhatsApp al <a href={waLink('Hola Dr. Torres, quisiera consultar por un turno.')} target="_blank" rel="noopener noreferrer">{PHONE_DISPLAY}</a>. Contanos qué necesitás y coordinamos día y horario. También podés llamar al mismo número.</>
    ),
  },
  { q: '¿Reciben subsidio de salud?', a: 'Sí, se recibe subsidio de salud. Antes de tu turno escribinos para confirmar qué cubre tu caso y qué documentación conviene llevar.' },
  { q: '¿Atienden urgencias?', a: 'Escribinos por WhatsApp contando qué te pasa y desde cuándo. Según el caso te indicamos cómo seguir y buscamos el espacio más cercano en la agenda.' },
  { q: '¿Atienden niños?', a: 'Sí. Se atiende a niños, adultos y adultos mayores. Con los más chicos el objetivo es que la visita sea tranquila y que se vayan con ganas de volver.' },
  { q: '¿Cuánto dura una consulta de control?', a: 'Una primera consulta de control y diagnóstico lleva entre 30 y 40 minutos. Ahí se revisa el estado general, se explican los hallazgos y se define el plan de tratamiento con su presupuesto.' },
];
