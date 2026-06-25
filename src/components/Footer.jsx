import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#02040a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#hero" className="text-xl font-extrabold tracking-wider text-white mb-2 block">
            CS<span className="text-brand-primary">.</span>
          </a>
          <p className="text-xs sm:text-sm text-gray-500">
            &copy; 2026 Chandrabhan Singh Solanki. All rights reserved.
          </p>
        </div>

        {/* Right: Social & build details */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4">
            <a
              href="https://github.com/chandrabhan111"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/3 border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary hover:bg-brand-primary/5 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/3 border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary hover:bg-brand-primary/5 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-base" />
            </a>
          </div>
          <p className="font-mono text-[10px] sm:text-xs text-gray-500">
            Built with React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
