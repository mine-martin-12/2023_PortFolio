import Nav from './Nav';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="page bg-primary text-white bg-cover bg-no-repeat font-sora relative">
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
