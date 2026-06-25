import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [latency, setLatency] = useState(32);

  // Monitor scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulating API Latency fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      const baseLatency = 20;
      const variance = Math.floor(Math.random() * 15);
      setLatency(baseLatency + variance);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-extrabold tracking-wider text-white">
          CS<span className="text-brand-primary">.</span>
        </a>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Section actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Server Latency status */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
            <span className="w-2 h-2 bg-[#00ff88] rounded-full shadow-[0_0_8px_#00ff88] animate-pulse"></span>
            <span className="text-xs font-semibold text-gray-400">
              API: <span className="font-mono text-[#00ff88]">{latency}ms</span>
            </span>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}assets/Chandrabhan_Singh_Solanki_Resume.pdf`}
            download
            className="px-5 py-2 bg-gradient-to-br from-brand-primary to-brand-accent text-black font-bold text-sm rounded-lg hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile action toggles */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Latency badge on mobile */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full shadow-[0_0_6px_#00ff88] animate-pulse"></span>
            <span className="text-[10px] font-semibold text-gray-400">
              API: <span className="font-mono text-[#00ff88]">{latency}ms</span>
            </span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none text-xl"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-[#030712]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-300 z-40 border-t border-white/5 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-gray-300 hover:text-white transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
        <a
          href={`${import.meta.env.BASE_URL}assets/Chandrabhan_Singh_Solanki_Resume.pdf`}
          download
          onClick={() => setIsOpen(false)}
          className="mt-4 px-8 py-3 bg-gradient-to-br from-brand-primary to-brand-accent text-black font-bold rounded-lg hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
