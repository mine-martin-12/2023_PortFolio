import { Link } from 'react-router-dom';
import Socials from './Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 py-2">
          {/* Logo */}
          <Link to="/">
            <img
              src="/logo.svg"
              width={180}
              height={18}
              alt="Portfolio Logo"
              className="w-32 md:w-44"
            />
          </Link>

          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
