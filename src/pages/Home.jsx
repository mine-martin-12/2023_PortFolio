import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { BsArrowRight } from 'react-icons/bs';
import ParticlesContainer from '../components/ParticlesContainer';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import Section, { SectionHeading } from '../components/Section';
import { fadeIn } from '../utils/variants';
import { profile, stats, projects, skillGroups } from '../data/site';

const services = [
  {
    title: 'Web Development',
    text: 'Full-stack applications with React, Next.js, Node.js and NestJS — clean code and scalable APIs.',
  },
  {
    title: 'Data & Analytics',
    text: 'Dashboards, reporting and database optimisation that turn raw data into decisions.',
  },
  {
    title: 'AI Training',
    text: 'Prompt engineering, annotation and model evaluation to make AI systems measurably better.',
  },
];

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* hero */}
      <section className="relative min-h-[92vh] flex items-center bg-primary/60 overflow-hidden">
        <div className="bg-orb absolute top-20 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none" />
        <div className="bg-orb absolute bottom-10 left-1/3 w-[320px] h-[320px] rounded-full pointer-events-none opacity-60" />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10" />

        {/* background visual */}
        <div className="hidden xl:block w-[1100px] h-full absolute right-0 bottom-0">
          <ParticlesContainer />
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="w-full h-full max-w-[680px] max-h-[640px] absolute bottom-0 right-[6%]"
          >
            <Avatar />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20 text-center xl:text-left">
          <motion.span
            variants={fadeIn('down', 0.1)}
            initial="hidden"
            animate="show"
            className="inline-block mb-5 px-4 py-1.5 text-[11px] tracking-[0.3em] uppercase rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300"
          >
            {profile.tagline}
          </motion.span>

          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            className="h1 text-gradient-indigo max-w-3xl mx-auto xl:mx-0"
          >
            Transforming ideas into{' '}
            <span className="text-indigo-400">digital reality</span>
          </motion.h1>

          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            className="max-w-xl mx-auto xl:mx-0 mt-6 mb-10 text-white/60 text-sm md:text-base"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start"
          >
            <Link
              to="/work"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition-all duration-300 glow-indigo"
            >
              View my work
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/20 hover:border-indigo-400/60 hover:text-indigo-300 transition-all duration-300"
            >
              Hire me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* stats */}
      <Section className="!py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center sm:text-left">
              <div className="text-4xl font-bold text-gradient-indigo">
                <CountUp start={0} end={s.value} duration={2} />
                {s.suffix}
              </div>
              <p className="mt-2 text-sm text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* services preview */}
      <Section>
        <SectionHeading
          eyebrow="What I do"
          title="Services built around "
          accent="outcomes."
          subtitle="From first sketch to production deployment — engineering that ships and keeps working."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card p-7 hover:border-indigo-400/50 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="h3 mb-3">{s.title}</h3>
              <p className="text-sm text-white/60">{s.text}</p>
            </div>
          ))}
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 mt-8 text-indigo-300 hover:text-indigo-200 transition-colors"
        >
          All services <BsArrowRight />
        </Link>
      </Section>

      {/* work preview */}
      <Section>
        <SectionHeading
          eyebrow="Selected work"
          title="Recent "
          accent="projects."
          subtitle="A few systems I designed, built and shipped."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card overflow-hidden group hover:border-indigo-400/50 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-52 md:h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.subtitle}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="h3 mb-1">{p.title}</h3>
                <p className="text-sm text-white/50">{p.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* about teaser */}
      <Section>
        <div className="glass-card p-8 md:p-12 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <SectionHeading eyebrow="About" title="Engineering with " accent="intent." />
            <p className="text-white/60 text-sm md:text-base">
              Based in {profile.location}, I have spent {profile.years} building
              products across fintech-style dashboards, retail systems and AI
              training pipelines. I care about clean architecture, measurable
              performance and interfaces people enjoy using.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-indigo-300 hover:text-indigo-200 transition-colors"
            >
              More about me <BsArrowRight />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroups.flatMap((g) => g.items).slice(0, 14).map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Home;
