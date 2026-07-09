import { motion } from 'framer-motion';
import { FaHouseChimney, FaBookBookmark, FaArrowRight, FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function Projects() {
  const projectsList = [
    {
      title: 'GharDilaDo',
      status: 'Live Project',
      icon: FaHouseChimney,
      iconBg: 'bg-brand-primary/10 text-brand-primary',
      gradientBg: 'from-brand-primary/10 to-brand-accent/5',
      desc: 'A high-performance real estate web platform that simplifies property finding. Engineered a secure, scalable backend with high-speed search queries, custom filtering algorithms, and interactive client maps.',
      architecture: [
        'React Web Client',
        'JWT Auth',
        'Express API',
        'MongoDB',
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB', 'React.js'],
      demoLink: `${import.meta.env.BASE_URL}ghardilado-app-demo.html`,
      gitLink: 'https://github.com/chandrabhan111/GharDilaDo.git',
    },
    {
      title: 'LibraryHub',
      status: 'Featured System',
      icon: FaBookBookmark,
      iconBg: 'bg-purple-500/10 text-purple-400',
      gradientBg: 'from-purple-500/10 to-brand-primary/5',
      desc: 'An automated library seat booking application designed to manage student reservations dynamically. Implemented real-time seat tracking updates, queue management, and automated booking notifications.',
      architecture: [
        'Web Client',
        'Node.js Core',
        'Firebase DB',
        'Seat Sync',
      ],
      tags: ['Node.js', 'Express.js', 'Firebase', 'JWT Auth'],
      demoLink: `${import.meta.env.BASE_URL}libraryhub-app-demo.html`,
      gitLink: 'https://github.com/chandrabhan111/Library-App.git',
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030712]/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-primary tracking-wider uppercase mb-2 block">
            My Creations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="flex flex-col h-full rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md overflow-hidden hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Project Card Image placeholder / header icon */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradientBg} border-b border-white/5 relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-radial-gradient from-brand-primary/5 to-transparent pointer-events-none"></div>
                <div className={`p-6 rounded-2xl border border-white/10 ${project.iconBg} group-hover:scale-110 transition-transform duration-500`}>
                  <project.icon className="text-4xl" />
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#030712]/80 border border-white/10 rounded-full font-mono text-xs text-gray-200">
                  {project.status}
                </div>
              </div>

              {/* Card content */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Architecture Diagram */}
                  <div className="flex flex-wrap items-center gap-1.5 p-3.5 bg-black/30 border border-dashed border-white/10 rounded-xl mb-6">
                    {project.architecture.map((node, nodeIdx) => (
                      <div key={node} className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] sm:text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                          {node}
                        </span>
                        {nodeIdx < project.architecture.length - 1 && (
                          <FaArrowRight className="text-[10px] text-brand-primary opacity-60" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Project tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-gray-400 px-2.5 py-1 bg-white/3 border border-white/5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-br from-brand-primary to-brand-accent text-black font-bold text-sm rounded-lg hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300"
                  >
                    <span>Live Demo</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                  
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-lg hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-300"
                  >
                    <FaGithub className="text-base" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
