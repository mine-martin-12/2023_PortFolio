import { BsArrowRight } from 'react-icons/bs';
import { RiMailLine, RiPhoneLine, RiMapPin2Line } from 'react-icons/ri';
import Footer from '../components/Footer';
import Socials from '../components/Socials';
import Section, { SectionHeading } from '../components/Section';
import { profile } from '../data/site';

const Contact = () => {
  return (
    <div className="relative overflow-hidden pt-28 md:pt-32">
      <div className="bg-orb absolute top-10 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none" />
      <div className="bg-orb absolute bottom-0 -right-20 w-[380px] h-[380px] rounded-full pointer-events-none opacity-70" />

      <Section className="relative z-10">
        <div className="grid gap-10 xl:grid-cols-2 xl:gap-16 items-start">
          {/* left */}
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Let's build something "
              accent="together."
              subtitle="Have a project in mind, a system to fix, or a role to fill? Send a message and I will reply within a day."
            />

            <ul className="space-y-4">
              <li className="glass-card p-4 flex items-center gap-4">
                <RiMailLine className="text-xl text-indigo-400" aria-hidden="true" />
                <a href={`mailto:${profile.email}`} className="text-sm hover:text-indigo-300 transition-colors">
                  {profile.email}
                </a>
              </li>
              <li className="glass-card p-4 flex items-center gap-4">
                <RiPhoneLine className="text-xl text-indigo-400" aria-hidden="true" />
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="text-sm hover:text-indigo-300 transition-colors">
                  {profile.phone}
                </a>
              </li>
              <li className="glass-card p-4 flex items-center gap-4">
                <RiMapPin2Line className="text-xl text-indigo-400" aria-hidden="true" />
                <span className="text-sm text-white/70">{profile.location}</span>
              </li>
            </ul>

            <div className="mt-8">
              <Socials />
            </div>
          </div>

          {/* form */}
          <form
            className="glass-card p-6 md:p-8 flex flex-col gap-5 w-full"
            action="https://formsubmit.co/wangondumn@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New contact form submission!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="flex gap-x-6 gap-y-5 w-full flex-col md:flex-row">
              <input type="text" name="name" placeholder="Name" className="input" required />
              <input type="email" name="email" placeholder="Email" className="input" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input" required />
            <textarea name="message" placeholder="Message" className="textarea" required></textarea>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-all duration-300 max-w-[190px]"
            >
              Let's talk
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
