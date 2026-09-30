import { Link } from 'react-router-dom';
import Socials from './Socials';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-primary/70 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-3 py-4">
          <Link to="/" aria-label="Home" className="text-2xl font-heading font-bold tracking-tight">
            martin<span className="text-indigo-500">.</span>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
