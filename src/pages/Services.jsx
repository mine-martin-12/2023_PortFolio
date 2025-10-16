import Bulb from '../components/Bulb';
import Circles from '../components/Circles';
import ServiceSlider from '../components/ServiceSlider';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-24 md:py-36 flex items-center">
      <Circles />
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 "
            >
              My Services
              <span className="text-indigo-500">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Offering comprehensive web development services from design to
              deployment, bringing your digital vision to life.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('left', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
