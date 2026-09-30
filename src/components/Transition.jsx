import { motion } from 'framer-motion';

const transitions = {
  initial: { x: '100%', width: '100%' },
  animate: { x: '0%', width: '0%' },
  exit: { x: ['0%', '100%'], width: ['0%', '100%'] },
};

const layers = [
  { className: 'z-[60] bg-accent', delay: 0.2 },
  { className: 'z-[59] bg-primary', delay: 0.3 },
  { className: 'z-[58] bg-surface', delay: 0.4 },
];

const Transition = () => {
  return (
    <>
      {layers.map((layer) => (
        <motion.div
          key={layer.delay}
          aria-hidden="true"
          className={`pointer-events-none fixed bottom-0 right-full top-0 h-screen w-screen ${layer.className}`}
          variants={transitions}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: layer.delay, duration: 0.6, ease: 'easeInOut' }}
        />
      ))}
    </>
  );
};

export default Transition;
