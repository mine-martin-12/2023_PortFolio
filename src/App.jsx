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
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.title = titles[location.pathname] || titles['/'];
  }, [location.pathname]);

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
