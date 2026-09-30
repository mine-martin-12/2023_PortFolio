import Navbar from './Navbar';
import Loader from './Loader';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-surface-tint font-sans text-on-surface">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-surface"
      >
        Skip to content
      </a>
      <Loader />
      <Navbar />
      <main id="main">{children}</main>
    </div>
  );
};

export default Layout;
