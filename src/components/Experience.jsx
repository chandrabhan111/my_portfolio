import { motion } from 'framer-motion';

export default function Experience() {
  const timelineItems = [
    {
      time: '1+ Year Experience',
      title: 'Full-Stack & Backend Systems Developer',
      desc: 'Architecting production-ready backend codebases, handling API routing systems, implementing robust security protocols, and managing data modeling pipelines.',
    },
    {
      time: 'Core Skill',
      title: 'API Design & Optimization',
      desc: 'Designing RESTful endpoints with micro-second latency, structured query parameters, unified error handlers, and performance-optimized database aggregation pipelines.',
    },
    {
      time: 'Core Skill',
      title: 'Secure Authentication Systems',
      desc: 'Integrating robust user authentication and authorization layers using JSON Web Tokens (JWT), session cookies, encrypted password schemas (bcrypt), and Firebase Auth patterns.',
    },
    {
      time: 'Architecture',
      title: 'Scalable Systems Architecture',
      desc: 'Structuring clean code bases using MVC/layered architectures, setting up automated data backups, and configuring highly optimized connection pools for MongoDB.',
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#030712]/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-brand-primary tracking-wider uppercase mb-2 block">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experience Highlights
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative pl-8 border-l-2 border-gradient-to-b from-brand-primary to-brand-secondary/40">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="mb-12 relative p-8 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-md hover:border-brand-primary/20 transition-all duration-300 group"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 rounded-full bg-[#030712] border-3 border-brand-primary -left-[41px] top-9 z-10 shadow-[0_0_10px_rgba(0,240,255,0.6)] group-hover:scale-125 transition-transform duration-300"></div>

              {/* Time Label */}
              <div className="font-mono text-xs font-semibold text-brand-primary tracking-wider uppercase mb-2">
                {item.time}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
