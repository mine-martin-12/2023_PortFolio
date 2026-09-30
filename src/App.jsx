import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Transition from './components/Transition';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';

const titles = {
  '/': 'Martin Ndungu · Software Engineer & AI Trainer',
  '/about': 'About Martin Ndungu · Skills & Experience',
  '/services': 'Services · Web Development, Data & AI',
  '/work': 'Selected Work · Projects by Martin Ndungu',
  '/contact': 'Contact Martin Ndungu · Software Engineer',
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || titles['/'];
  }, [location.pathname]);

  // Scroll to #section links (e.g. /#work), otherwise to the top on page change.
  // The delay lets the page transition mount the target first.
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const t = setTimeout(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
    return () => clearTimeout(t);
  }, [location.pathname, location.hash]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>
          <Transition />
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
