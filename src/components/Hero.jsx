import { motion } from 'framer-motion';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glow graphics */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-[#7000ff]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start text-left"
        >
          <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-brand-primary tracking-wide mb-6">
            Available for Freelance & Full-time
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">Chandrabhan Singh Solanki</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-gray-300 mb-6">
            Software Developer | Web Apps | AI Products | Freelancer
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
            I build modern websites, intelligent AI products, high-converting UGC Ads, and provide complete freelance tech solutions to power your digital growth.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group px-8 py-3 bg-gradient-to-br from-brand-primary to-brand-accent text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3"
            >
              <span>View Projects</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="https://wa.me/916378091973?text=Hi%20Chandrabhan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-[#25D366]/20 hover:border-[#25D366]/50 hover:text-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3"
            >
              <FaWhatsapp className="text-xl text-[#25D366] group-hover:scale-110 transition-transform duration-300" />
              <span>WhatsApp Me</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Image Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Glowing background behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
            
            {/* Image Frame */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 p-2 bg-[#0a0f1d]/40 backdrop-blur-md">
              <img
                src={`${import.meta.env.BASE_URL}assets/developer.jpg`}
                alt="Chandrabhan Singh Solanki"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down mouse icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center">
        <a href="#about" aria-label="Scroll to About" className="group">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1.5 transition-colors group-hover:border-brand-primary">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-brand-primary"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
}
