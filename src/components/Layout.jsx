import Nav from './Nav';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="page bg-primary text-white bg-cover bg-no-repeat font-sans relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-indigo-500 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <Header />
      <main id="main">{children}</main>
    </div>
  );
};

export default Layout;
