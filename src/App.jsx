import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctor from './components/Doctor';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <NavBar />
      <main id="contenido">
        <Hero />
        <Doctor />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
