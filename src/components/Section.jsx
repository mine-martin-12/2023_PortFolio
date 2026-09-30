import { motion } from 'framer-motion';

const Section = ({ id, children, className = '', delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={`container mx-auto px-4 py-14 md:py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export const SectionHeading = ({ eyebrow, title, accent, subtitle, align = 'left' }) => (
  <div className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
    {eyebrow && (
      <span className="inline-block mb-4 px-4 py-1.5 text-[11px] tracking-[0.3em] uppercase rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
        {eyebrow}
      </span>
    )}
    <h2 className="h2 text-gradient-indigo">
      {title}
      {accent && <span className="text-indigo-500">{accent}</span>}
    </h2>
    {subtitle && <p className="mt-4 text-white/60">{subtitle}</p>}
  </div>
);

export default Section;
