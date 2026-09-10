# DT Odontología — Dr. Duilio Torres

Landing page informativa del consultorio. Sitio estático: HTML + CSS + JavaScript, sin
dependencias ni proceso de build.

---

## Archivos

| Archivo | Qué contiene |
|---|---|
| `index.html` | Estructura y todo el contenido de texto. |
| `styles.css` | Estilos. Está numerado por secciones (tokens, navegación, hero, etc.). |
| `script.js` | Menú móvil, animaciones de entrada, acordeón de preguntas y visor de fotos. |
| `images/` | Fotos reales del Dr. Torres y del consultorio, ya redimensionadas. |
| `_backup_v1/` | La versión anterior del sitio (la que se hizo con la otra IA) y sus imágenes generadas por IA. |

## Cómo verlo

Abrí `index.html` con doble clic. Para que se vea exactamente como en producción,
conviene servirlo por HTTP:

```bash
npx serve "C:/Users/naguerra/Desktop/CLAUDE/Proyectos/1er Proyecto Claude/DT_Odontologia"
```

---

## ⚠️ Datos pendientes de completar

En el HTML están marcados con el comentario `<!-- EDITAR: ... -->`. Son datos que no
pude confirmar, así que quedaron como texto provisorio. **Antes de publicar el sitio hay
que reemplazarlos por los reales**, o borrar el bloque si no aplica.

| Dato | Dónde aparece | Estado |
|---|---|---|
| **Dirección del consultorio** | Sección Contacto, pie, datos estructurados | Provisorio |
| **Horarios de atención** | Barra superior, Contacto, pie, datos estructurados | Provisorio — inventados |
| **Número de matrícula profesional** | Sección "El profesional" | Dice *"a completar"* |
| **Email** | Contacto y pie | `dtorresodontologia@gmail.com` — venía del proyecto anterior, conviene confirmarlo |
| **Ciudad** | Hero, Contacto, pie | Se dedujo "San Miguel de Tucumán" por la característica 381 |
| **Medios de pago** | Pregunta frecuente | Respuesta genérica |
| **Enlace a Google Maps** | Sección Contacto | Es una búsqueda por nombre, no una ubicación exacta |

### Datos que sí están confirmados

Salen de las fotos y del flyer del consultorio:

- WhatsApp y teléfono: **+54 9 381 671-7375**
- Instagram: **@duiliot.od**
- Tratamientos: control preventivo, limpiezas, blanqueamiento, arreglos, prótesis, cirugías
- **Se recibe subsidio de salud**

---

## Cambios respecto de la versión anterior

- **Fotos reales** del Dr. Torres y del consultorio en lugar de las imágenes generadas por IA.
- **Paleta de la marca real**: el azul `#0141A5` se tomó directamente del logo del
  consultorio, en vez del turquesa/dorado que traía la versión anterior.
- **Tema claro**: para un consultorio médico transmite más limpieza y confianza que el
  fondo oscuro anterior.
- **Se quitaron los testimonios inventados** ("María López", "Carlos Rodríguez"…) y las
  estadísticas inventadas ("15 años", "5000 pacientes", "98% de satisfacción"). Publicar
  reseñas ficticias en el sitio de un profesional de la salud es un riesgo real, no un
  detalle de diseño. Si el Dr. Torres tiene reseñas verdaderas, se pueden agregar.
- **Se quitó Facebook**: el enlace anterior apuntaba a un perfil que no existe.
- **Tratamientos reales** tomados del flyer del consultorio, en vez de la lista genérica.
- Nueva sección de **preguntas frecuentes** y bloque de contacto ampliado, porque el
  objetivo del sitio es que el paciente encuentre rápido cómo comunicarse.
- **Datos estructurados** (`schema.org/Dentist`) para que Google entienda que es un
  consultorio odontológico y muestre teléfono y horarios en los resultados.

---

## Cómo publicarlo

Al ser un sitio estático se puede subir a cualquier hosting gratuito arrastrando la
carpeta: Netlify Drop, Cloudflare Pages, GitHub Pages o Vercel. No hace falta servidor
ni base de datos.

Antes de publicar conviene:

1. Completar los datos pendientes de la tabla de arriba.
2. Reemplazar el logo dibujado en SVG (está dentro de `index.html`, en el símbolo
   `#i-logo`) por el archivo original del logo, si el Dr. Torres lo tiene en buena calidad.
3. Cambiar el `og:image` por una imagen de 1200×630 px si se va a compartir por WhatsApp
   o redes.
