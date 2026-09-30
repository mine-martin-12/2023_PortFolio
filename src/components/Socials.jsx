import { RiGithubLine, RiLinkedinLine, RiTwitterXLine } from 'react-icons/ri';
import { FaKaggle } from 'react-icons/fa6';
import { profile } from '../data/site';

export const socialLinks = [
  { name: 'GitHub', href: profile.socials.github, icon: RiGithubLine },
  { name: 'LinkedIn', href: profile.socials.linkedin, icon: RiLinkedinLine },
  { name: 'Kaggle', href: profile.socials.kaggle, icon: FaKaggle },
  { name: 'X / Twitter', href: profile.socials.twitter, icon: RiTwitterXLine },
];

const Socials = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} profile`}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-on-surface/10 text-lg text-on-surface/70 transition-all duration-300 hover:border-accent/50 hover:text-accent"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
