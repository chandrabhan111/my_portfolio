import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRobot, FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function Services() {
  const servicesList = [
    {
      title: 'Smart Stock Alert System',
      status: 'Live Demo Available',
      icon: FaRobot,
      iconBg: 'bg-blue-500/10 text-blue-400',
      gradientBg: 'from-blue-500/10 to-brand-primary/5',
      desc: 'An automated inventory management solution that prevents out-of-stock scenarios. Instantly alerts business owners via email when product stock falls below critical thresholds.',
      architecture: [
        'Google Sheets',
        'n8n',
        'Email',
      ],
      tags: ['Automation', 'Inventory', 'No-Code'],
      demoLink: '/demo/stock-alert',
    },
    // We can add more services here in the future
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-primary font-mono text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            Business Automation Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            AI & Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-primary">Automations</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Ready-to-deploy systems that save time, reduce manual work, and scale your business operations instantly.
          </p>
        </motion.div>

        {/* Services Grid - smaller cards than projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-white/[0.02] rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Header area */}
              <div className={`h-24 sm:h-28 bg-gradient-to-br ${service.gradientBg} relative p-5 flex items-start justify-between border-b border-white/5`}>
                <div className={`w-10 h-10 rounded-xl ${service.iconBg} flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg`}>
                  <service.icon className="text-xl" />
                </div>
                <div className="px-2.5 py-1 bg-[#030712]/80 border border-white/10 rounded-full font-mono text-[10px] text-gray-200">
                  {service.status}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {service.desc}
                  </p>

                  {/* Architecture Diagram */}
                  <div className="flex flex-wrap items-center gap-1.5 p-3 bg-black/30 border border-dashed border-white/10 rounded-xl mb-5">
                    {service.architecture.map((node, nodeIdx) => (
                      <div key={node} className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] sm:text-[11px] text-gray-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                          {node}
                        </span>
                        {nodeIdx < service.architecture.length - 1 && (
                          <FaArrowRight className="text-[9px] text-blue-400 opacity-60" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Project tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] text-gray-400 px-2 py-0.5 bg-white/3 border border-white/5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Link
                    to={service.demoLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-br from-blue-500 to-brand-primary text-black font-bold text-sm rounded-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Try Live Demo</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
