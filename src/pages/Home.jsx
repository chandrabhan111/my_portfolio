import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
