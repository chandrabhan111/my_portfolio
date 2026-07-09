import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGears, FaDatabase, FaToolbox, FaWandMagicSparkles } from 'react-icons/fa6';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend Core',
      icon: FaGears,
      colorClass: 'text-brand-primary bg-brand-primary/10',
      skills: [
        { name: 'Node.js', percentage: '90%', desc: 'Server-side JavaScript runtime for scalable APIs.' },
        { name: 'Express.js', percentage: '85%', desc: 'Used for Custom Middleware, Rate Limiting, & API Routing.' },
        { name: 'REST APIs', percentage: '95%', desc: 'Designing stateless, high-performance API endpoints.' },
      ],
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      colorClass: 'text-purple-400 bg-purple-500/10',
      skills: [
        { name: 'MongoDB', percentage: '80%', desc: 'NoSQL document database for flexible schemas.' },
        { name: 'Firebase', percentage: '85%', desc: 'Real-time sync, auth, and serverless functions.' },
      ],
    },
    {
      title: 'Tools & Security',
      icon: FaToolbox,
      colorClass: 'text-emerald-400 bg-emerald-500/10',
      skills: [
        { name: 'JWT (JSON Web Token)', percentage: '90%', desc: 'Secure stateless user authentication.' },
        { name: 'GitHub & Version Control', percentage: '85%', desc: 'Collaborative code management & CI/CD.' },
      ],
    },
    {
      title: 'Web & AI Media',
      icon: FaWandMagicSparkles,
      colorClass: 'text-blue-400 bg-blue-500/10',
      skills: [
        { name: 'React.js', percentage: '80%', desc: 'Modern and responsive web application development.' },
        { name: 'Product AI UGC Ads', percentage: '90%', desc: 'Creating highly engaging AI Product UGC Ads for clients to scale their marketing on-demand.' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#00f0ff]/3 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-primary tracking-wider uppercase mb-2 block">
            My Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & Expertise
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md hover:border-white/10 hover:bg-white/3 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3.5 rounded-2xl border border-white/5 ${category.colorClass}`}>
                  <category.icon className="text-xl sm:text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-6">
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Skill Name & percentage */}
      <div className="flex justify-between font-mono text-sm mb-2">
        <span className="text-gray-200 font-semibold">{skill.name}</span>
        <span className="text-brand-primary">{skill.percentage}</span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full h-2 bg-white/5 rounded-full overflow-visible relative border border-white/5">
        {/* Animated Inner Bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: skill.percentage }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
        />

        {/* Tooltip Overlay */}
        {hovered && (
          <div className="absolute bottom-[180%] left-1/2 transform -translate-x-1/2 w-64 bg-[#0f111a] border border-brand-primary/30 rounded-lg p-3 text-xs text-gray-300 text-center shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-20 pointer-events-none">
            {skill.desc}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-[#0f111a]"></div>
          </div>
        )}
      </div>
    </div>
  );
}
