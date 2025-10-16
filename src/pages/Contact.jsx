import Bulb from '../components/Bulb';
import Circles from '../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import { BsArrowRight } from 'react-icons/bs';

const Contact = () => {

  return (
    <div className="h-full bg-primary/30 py-24 md:py-32 overflow-y-auto">
      <Circles />
      <div className="container mx-auto px-4 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-indigo-500">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            action="https://formsubmit.co/wangondumn@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New contact form submission!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            {/* input group */}
            <div className="flex gap-x-6 w-full flex-col md:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea"
              required
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-indigo-500 group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Contact;
