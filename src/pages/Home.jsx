import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { RiCodeSSlashLine, RiDoubleQuotesL, RiPhoneLine } from 'react-icons/ri';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ResumeButton from '../components/ResumeButton';
import Section, { SectionHeading } from '../components/Section';
import { socialLinks } from '../components/Socials';
import { icons } from '../components/icons';
import {
  profile,
  projects,
  valueProps,
  process,
  bestFit,
  testimonials,
} from '../data/site';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' },
});

// Concave corner piece that makes the hero card look "notched"
const InvertedCorner = ({ className }) => (
  <div
    aria-hidden="true"
    className={`h-12 w-12 ${className}`}
    style={{
      background:
        'radial-gradient(circle at 0 0, transparent 47px, rgb(var(--surface-tint)) 48px)',
    }}
  />
);

const Hero = () => (
  <section className="flex h-[100svh] min-h-[640px] w-full items-center justify-center p-3 md:p-5">
    <div className="relative flex h-full w-full max-w-7xl flex-col items-center overflow-hidden rounded-2xl bg-surface md:rounded-3xl">
      {/* soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative flex h-full w-full flex-col items-center justify-center px-6 pb-28 pt-24 md:pb-24">
        <motion.div {...reveal(0.1)} className="mb-2 h-36 w-36 md:h-48 md:w-48 lg:h-56 lg:w-56">
          <img
            src="/portfolioavatar.png"
            alt={profile.name}
            className="h-full w-full rounded-full object-cover object-top"
          />
        </motion.div>

        <div className="flex flex-col items-center text-center md:px-6 lg:px-12">
          <motion.div {...reveal(0.25)} className="relative mx-auto mb-6 w-fit">
            <Link
              to="/about"
              className="focus-ring flex animate-hero-badge-pulse items-center gap-2 rounded-full border border-accent/20 px-4 py-2 backdrop-blur-md transition-all duration-500 hover:border-accent/60"
            >
              <RiCodeSSlashLine className="text-sm text-accent" aria-hidden="true" />
              <span className="text-xs font-light text-on-surface sm:text-sm">{profile.tagline}</span>
            </Link>
          </motion.div>

          <motion.h1
            {...reveal(0.4)}
            className="mb-6 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-primary drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl"
          >
            I turn ideas into dependable software.
          </motion.h1>

          <motion.p
            {...reveal(0.55)}
            className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-on-surface/70 sm:text-base"
          >
            {profile.summary}
          </motion.p>

          {/* socials marquee */}
          <motion.div {...reveal(0.7)} className="w-full max-w-sm overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused]">
              {[...socialLinks, ...socialLinks].map(({ name, href, icon: Icon }, i) => (
                <a
                  key={`${name}-${i}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} profile`}
                  tabIndex={i >= socialLinks.length ? -1 : undefined}
                  className="flex items-center gap-2 text-sm text-on-surface/70 transition-colors hover:text-accent"
                >
                  <Icon className="text-lg" />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* floating experience card */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-10 left-10 hidden min-w-[200px] flex-col gap-4 rounded-3xl border border-accent/10 bg-surface/90 p-6 backdrop-blur-md transition-all hover:border-accent/30 lg:flex"
      >
        <span className="font-display text-4xl tracking-tight text-secondary">
          {profile.years.replace(' years', '')}
        </span>
        <span className="text-xs font-light uppercase tracking-widest text-on-surface/60">
          Years of experience
        </span>
        <Link
          to="/contact"
          className="focus-ring flex items-center gap-2 self-start rounded-full bg-accent py-1.5 pl-1.5 pr-5 text-surface transition-all hover:bg-accent-dark active:scale-95"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface/20">
            <RiPhoneLine className="text-sm" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium">Hire me</span>
        </Link>
      </motion.div>

      {/* notched corner CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 right-0 flex items-center gap-4 rounded-tl-3xl bg-surface-tint p-4 pl-8 pt-5 md:rounded-tl-4xl md:p-8 md:pl-14 md:pt-10"
      >
        <InvertedCorner className="absolute -top-12 right-0" />
        <InvertedCorner className="absolute -left-12 bottom-0" />
        <Link to="/contact" className="focus-ring group flex items-center gap-4 rounded-full">
          <span className="hidden flex-col text-right md:flex">
            <span className="text-xs uppercase tracking-widest text-on-surface-mute">
              Available for work
            </span>
            <span className="text-lg font-medium md:text-xl">Let&apos;s talk</span>
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-lg text-accent shadow-sm transition-transform group-hover:rotate-45">
            <BsArrowUpRight />
          </span>
        </Link>
      </motion.div>
    </div>
  </section>
);

const IconBadge = ({ name }) => {
  const Icon = icons[name];
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-2xl text-accent">
      {Icon && <Icon aria-hidden="true" />}
    </span>
  );
};

const Home = () => {
  return (
    <div className="relative">
      <Hero />

      {/* What you get */}
      <Section id="value">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="An engineer who sees the whole picture."
          subtitle="Six years across code, data and AI means fewer handoffs, fewer surprises and results you can measure."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {valueProps.map((v) => (
            <article key={v.title} className="card card-hover">
              <IconBadge name={v.icon} />
              <h3 className="h3 mt-6">{v.title}</h3>
              <p className="mt-3 text-sm leading-7 text-on-surface/70">{v.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* How I work */}
      <Section id="process">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from idea to launch."
          subtitle="You always know what is being built, why it matters and when it ships."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <article key={p.step} className="card card-hover">
              <span className="font-display text-4xl font-semibold text-accent/60">{p.step}</span>
              <h3 className="h3 mt-6">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-on-surface/70">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Best fit */}
      <Section id="fit">
        <SectionHeading
          eyebrow="Ideal Projects"
          title="Where I add the most value."
          subtitle="The roles and projects where my mix of engineering, data and AI experience makes the biggest difference."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {bestFit.map((b) => (
            <article key={b.title} className="card card-hover flex gap-5">
              <IconBadge name={b.icon} />
              <div>
                <h3 className="h3">{b.title}</h3>
                <p className="mt-3 text-sm leading-7 text-on-surface/70">{b.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Selected work */}
      <Section id="work">
        <SectionHeading
          eyebrow="Portfolio"
          title="Things I have built."
          subtitle="Business tools and platforms designed around the day-to-day work of the people who use them."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <SectionHeading
          eyebrow="Kind Words"
          title="What colleagues say."
          subtitle="Feedback from people I have built software with."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.role + t.company} className="card flex flex-col">
              <RiDoubleQuotesL className="text-3xl text-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-7 text-on-surface/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-on-surface/10 pt-4">
                <p className="text-sm font-medium">{t.role}</p>
                <p className="text-xs text-on-surface-mute">{t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" className="!pt-0">
        <div className="relative overflow-hidden rounded-3xl bg-surface px-6 py-16 text-center md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
          />
          <span className="pill relative">Contact</span>
          <h2 className="h2 relative mx-auto mt-8 max-w-2xl">
            Got an idea worth building?
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-sm leading-7 text-on-surface/70 md:text-base">
            Whether it is a new product, a data problem or a role on your team, I would love to hear
            about it. Send a message and I will get back to you within a day.
          </p>
          <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-accent focus-ring group">
              Start a conversation
              <BsArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="btn-ghost focus-ring">
              See my experience
            </Link>
            <ResumeButton />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Home;
