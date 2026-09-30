import { Link } from 'react-router-dom';
import { RiMapPin2Line } from 'react-icons/ri';
import Socials from './Socials';
import { profile } from '../data/site';

const footerLinks = [
  { name: 'Selected work', to: '/work' },
  { name: 'Services', to: '/services' },
  { name: 'Experience', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="mx-auto max-w-7xl rounded-2xl bg-surface px-6 py-12 md:rounded-3xl md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tighter text-primary">
              martin<span className="text-accent">.</span>
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-on-surface/70">
              <RiMapPin2Line className="text-accent" aria-hidden="true" />
              {profile.location}
            </p>
            <p className="mt-1 text-sm text-on-surface-mute">
              {profile.role} · {profile.years}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-4 text-xs uppercase tracking-widest text-on-surface-mute">Explore</h2>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-on-surface/80 transition-colors hover:text-accent">
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume}
                  download="Martin-Ndungu-Wangondu-Resume.pdf"
                  className="text-on-surface/80 transition-colors hover:text-accent"
                >
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-xs uppercase tracking-widest text-on-surface-mute">Connect</h2>
            <Socials />
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block text-sm text-on-surface/80 transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-on-surface/10 pt-6 text-xs text-on-surface-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
