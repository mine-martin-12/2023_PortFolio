import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { RiCloseLine, RiDownload2Line, RiMenu4Line } from 'react-icons/ri';
import ThemeToggle from './ThemeToggle';
import { profile } from '../data/site';

const links = [
  { name: 'Work', to: '/#work' },
  { name: 'Process', to: '/#process' },
  { name: 'Testimonials', to: '/#testimonials' },
  { name: 'Services', to: '/services' },
  { name: 'About', to: '/about' },
];

const linkClass =
  'focus-ring rounded-full px-3 py-2 text-sm text-on-surface/70 transition-colors hover:text-on-surface';

const NavItem = ({ link, onClick }) =>
  link.to.includes('#') ? (
    <Link to={link.to} onClick={onClick} className={linkClass}>
      {link.name}
    </Link>
  ) : (
    <NavLink
      to={link.to}
      onClick={onClick}
      className={({ isActive }) => `${linkClass} ${isActive ? '!text-accent' : ''}`}
    >
      {link.name}
    </NavLink>
  );

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2 transition-all duration-500 md:px-6 ${
          scrolled
            ? 'border-on-surface/10 bg-surface/80 shadow-sm backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Link
          to="/"
          aria-label="Home"
          className="italic focus-ring rounded-full font-display text-2xl font-semibold tracking-tighter text-primary"
        >
          {/* <span className="flex items-end"> */}
            {/* <img src="/logo.svg" alt="Martin" className="h-8 w-auto" /> */}
              {/* <span className="text-accent">.</span> */}
          {/* </span> */}
          martin<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavItem key={l.name} link={l} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resume}
            download="Martin-Ndungu-Wangondu-Resume.pdf"
            className="btn-ghost focus-ring hidden !px-4 !py-2.5 md:inline-flex"
          >
            <RiDownload2Line aria-hidden="true" />
            Resume
          </a>
          <Link to="/contact" className="btn-accent focus-ring hidden !py-2.5 sm:inline-flex">
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-on-surface/10 text-xl lg:hidden"
          >
            {open ? <RiCloseLine /> : <RiMenu4Line />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-on-surface/10 bg-surface/95 p-4 shadow-lg backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <NavItem key={l.name} link={l} onClick={() => setOpen(false)} />
              ))}
              <a
                href={profile.resume}
                download="Martin-Ndungu-Wangondu-Resume.pdf"
                className={`${linkClass} flex items-center gap-2 md:hidden`}
              >
                <RiDownload2Line aria-hidden="true" />
                Download resume
              </a>
              <Link to="/contact" className="btn-accent focus-ring mt-3 sm:hidden">
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
