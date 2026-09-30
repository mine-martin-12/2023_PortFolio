import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const seenBefore = () => {
  try {
    return sessionStorage.getItem('intro-seen') === '1';
  } catch {
    return false;
  }
};

const Loader = () => {
  const [visible, setVisible] = useState(() => !seenBefore());

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem('intro-seen', '1');
      } catch {
        // ignore
      }
    }, 1100);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="italic fixed inset-0 z-[9999] flex select-none flex-col items-center justify-center gap-10 bg-surface-tint"
        >
          <span className="font-display text-5xl uppercase tracking-tighter text-primary">
            martin<span className="text-accent">.</span>
          </span>
          <div className="h-px w-48 overflow-hidden rounded-full bg-on-surface/10">
            <div className="h-full animate-loader-bar rounded-full bg-accent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
