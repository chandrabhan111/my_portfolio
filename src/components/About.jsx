import { motion } from 'framer-motion';
import { SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiReact } from 'react-icons/si';

export default function About() {
  const techBadges = [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'React Native', icon: SiReact },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030712]/50">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#7000ff]/3 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-primary tracking-wider uppercase mb-2 block">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About Me
          </h2>
        </div>

        {/* Grid content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative p-8 sm:p-12 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md shadow-2xl hover:border-brand-primary/20 transition-colors duration-500 overflow-hidden group"
          >
            {/* Glowing card borders */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Building Powerful Digital Engines
            </h3>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              I am a passionate Backend Developer with a deep interest in crafting scalable, efficient, and robust architecture. Over my career journey, I have specialized in designing performance-driven backend systems using <strong className="text-white">Node.js</strong> and <strong className="text-white">Express.js</strong>, integrating highly responsive databases like <strong className="text-white">MongoDB</strong>, and implementing reliable backend-as-a-service platforms like <strong className="text-white">Firebase</strong>.
            </p>
            
            <p className="text-gray-400 mb-10 leading-relaxed">
              My expertise doesn't stop at the server side; I also build cross-platform mobile experiences with <strong className="text-white">React Native</strong>. This full-stack awareness enables me to build APIs that are perfectly tailored for high-speed client integrations, ensuring secure and seamless data flows.
            </p>

            {/* Tech Badge Grid */}
            <div className="flex flex-wrap gap-4">
              {techBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white/3 border border-white/5 rounded-full hover:bg-brand-primary/5 hover:border-brand-primary/30 hover:-translate-y-0.5 transition-all duration-300 group/badge"
                >
                  <badge.icon className="text-brand-primary text-lg group-hover/badge:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-semibold text-gray-300 group-hover/badge:text-white transition-colors duration-300">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
