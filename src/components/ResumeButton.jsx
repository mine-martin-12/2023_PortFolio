import { RiDownload2Line } from 'react-icons/ri';
import { profile } from '../data/site';

const ResumeButton = ({ variant = 'ghost', label = 'Download resume', className = '' }) => (
  <a
    href={profile.resume}
    download="Martin-Ndungu-Wangondu-Resume.pdf"
    className={`${variant === 'accent' ? 'btn-accent' : 'btn-ghost'} focus-ring group ${className}`}
  >
    <RiDownload2Line className="transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
    {label}
  </a>
);

export default ResumeButton;
