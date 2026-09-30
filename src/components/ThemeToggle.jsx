import { useEffect, useState } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const getTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

const ThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // storage unavailable (private mode); theme still applies for this visit
    }
  }, [theme]);

  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={`focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-on-surface/10 text-lg text-on-surface/80 transition-colors hover:border-accent/50 hover:text-accent ${className}`}
    >
      {theme === 'dark' ? <RiSunLine /> : <RiMoonLine />}
    </button>
  );
};

export default ThemeToggle;
