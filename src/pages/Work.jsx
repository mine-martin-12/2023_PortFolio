import { BsArrowUpRight } from 'react-icons/bs';
import Footer from '../components/Footer';
import Section, { SectionHeading } from '../components/Section';
import { projects } from '../data/site';

const Work = () => {
  return (
    <div className="relative overflow-hidden pt-28 md:pt-32">
      <div className="bg-orb absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none" />
      <div className="bg-orb absolute bottom-1/4 -left-24 w-[360px] h-[360px] rounded-full pointer-events-none opacity-60" />

      <Section className="relative z-10">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I have "
          accent="shipped."
          subtitle="Real systems in production — laundry operations, retail point of sale, dashboards and storefronts."
        />

        {/* grid on md+ */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target={p.link === '#' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="glass-card overflow-hidden group hover:border-indigo-400/50 hover:glow-indigo hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.subtitle}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="h3">{p.title}</h3>
                    <p className="text-sm text-white/50">{p.subtitle}</p>
                  </div>
                  <BsArrowUpRight className="text-xl text-indigo-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <p className="mt-4 text-sm text-white/60">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-[11px] bg-white/5 border border-white/10 text-white/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

      </Section>

      <Footer />
    </div>
  );
};

export default Work;
