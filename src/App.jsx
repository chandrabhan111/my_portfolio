import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#030712] text-gray-100 min-h-screen relative font-sans antialiased overflow-x-hidden">
      {/* Dynamic Background Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Main Header navigation */}
      <Navbar />

      <main>
        {/* Intro Hero banner */}
        <Hero />

        {/* Detailed professional summary */}
        <About />

        {/* Technical stack levels */}
        <Skills />

        {/* Showcasing works portfolio grid */}
        <Projects />

        {/* Vertical timelines experience */}
        <Experience />

        {/* Interactive achievements numbers count */}
        <Stats />

        {/* Web3Forms Contact gateway */}
        <Contact />
      </main>

      {/* Footer copyright socials */}
      <Footer />
    </div>
  );
}
