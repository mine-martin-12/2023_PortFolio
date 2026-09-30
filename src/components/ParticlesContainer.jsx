import { motion } from 'framer-motion';

// Lightweight decorative floating dots (framer-motion, no external engine)
const dots = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  top: (i * 37) % 100,
  left: (i * 61) % 100,
  size: 2 + (i % 4),
  duration: 6 + (i % 7),
  delay: (i % 10) * 0.4,
}));

const ParticlesContainer = () => {
  return (
    <div
      aria-hidden="true"
      className="w-full h-full absolute inset-0 pointer-events-none translate-z-0"
    >
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-indigo-300/40"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesContainer;
