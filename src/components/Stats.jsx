import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Stats() {
  const statsList = [
    { target: 2, label: 'Projects Completed', suffix: '+' },
    { target: 1, label: 'Year Experience', suffix: '+' },
    { target: 100, label: '% Dedication', suffix: '%' },
    { target: 99, label: 'Fast API Performance (%)', suffix: '%' },
  ];

  return (
    <section id="stats" className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-brand-primary/2 to-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {statsList.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md text-center group"
            >
              <h3 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                <Counter target={stat.target} suffix={stat.suffix} />
              </h3>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    // determine duration and step time
    const duration = 2000; // 2 seconds animation
    const increment = Math.ceil(end / 60); // approx 60fps
    const stepTime = duration / (end / increment);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, Math.max(stepTime, 16));

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
