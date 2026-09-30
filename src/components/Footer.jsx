import { Link } from 'react-router-dom';
import { RiGithubLine, RiLinkedinLine, RiMailLine, RiMapPin2Line } from 'react-icons/ri';
import { profile } from '../data/site';

const iconLink =
  'w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-lg text-white/70 hover:text-indigo-300 hover:border-indigo-400/50 transition-all duration-300';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-primary/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-14 pb-28 xl:pb-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* identity */}
          <div>
            <h3 className="text-xl font-semibold mb-3">{profile.name}</h3>
            <p className="flex items-center gap-2 text-white/60 text-sm mb-1">
              <RiMapPin2Line className="text-indigo-400" aria-hidden="true" />
              {profile.location}
            </p>
            <p className="text-white/50 text-sm">
              {profile.role} · {profile.years}
            </p>
          </div>

          {/* projects */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
              Projects
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/work" className="text-white/70 hover:text-indigo-300 transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-indigo-300 transition-colors">
                  Skills &amp; Experience
                </Link>
              </li>
              <li>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-indigo-300 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* connect */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
                <RiGithubLine />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
                <RiLinkedinLine />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className={iconLink}>
                <RiMailLine />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/40">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p>Built with React, Vite &amp; framer-motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
