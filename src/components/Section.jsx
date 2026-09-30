import { motion } from 'framer-motion';

const Section = ({ id, children, className = '', innerClassName = '', delay = 0 }) => {
  return (
    <section id={id} className={`w-full scroll-mt-24 py-16 md:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        className={`mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:px-10 ${innerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionHeading = ({ eyebrow, title, subtitle, as: Tag = 'h2' }) => (
  <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
    <div className="max-w-2xl">
      {eyebrow && <span className="pill">{eyebrow}</span>}
      <Tag className="h2 mt-8">{title}</Tag>
    </div>
    {subtitle && (
      <p className="max-w-md text-sm leading-7 text-on-surface/70 md:text-base">{subtitle}</p>
    )}
  </div>
);

export default Section;
