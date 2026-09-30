import CountUp from 'react-countup';
import Footer from '../components/Footer';
import Section, { SectionHeading } from '../components/Section';
import {
  profile,
  stats,
  skillGroups,
  experience,
  education,
  certificates,
} from '../data/site';

const About = () => {
  return (
    <div className="relative overflow-hidden pt-28 md:pt-32">
      <div className="bg-orb absolute -top-20 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none" />
      <div className="bg-orb absolute top-1/2 -right-24 w-[380px] h-[380px] rounded-full pointer-events-none opacity-60" />

      {/* intro */}
      <Section className="relative z-10">
        <SectionHeading
          eyebrow="About me"
          title="Software engineer, "
          accent="data-minded."
          subtitle={profile.summary}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-6">
              <div className="text-3xl font-bold text-gradient-indigo">
                <CountUp start={0} end={s.value} duration={2} />
                {s.suffix}
              </div>
              <p className="mt-2 text-sm text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* skills */}
      <Section className="relative z-10">
        <SectionHeading eyebrow="Toolkit" title="Skills & " accent="stack." />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="glass-card p-6 hover:border-indigo-400/40 transition-colors duration-300">
              <h3 className="text-sm uppercase tracking-[0.2em] text-indigo-300 mb-4">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/70"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* experience timeline */}
      <Section className="relative z-10">
        <SectionHeading eyebrow="Journey" title="Experience " accent="timeline." />
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-8">
          {experience.map((e) => (
            <div key={`${e.role}-${e.company}`} className="relative">
              <span className="absolute -left-[31px] md:-left-[47px] top-2 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
              <div className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
                  <h3 className="h3">{e.role}</h3>
                  <span className="text-xs tracking-wider uppercase text-indigo-300">
                    {e.period}
                  </span>
                </div>
                <p className="text-sm text-white/50 mb-3">{e.company}</p>
                <ul className="space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="text-sm text-white/60 flex gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* education + certificates */}
      <Section className="relative z-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="h3 mb-5 text-gradient-indigo">Education</h2>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.title} className="glass-card p-5">
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-white/50">{e.org}</p>
                  <p className="text-xs text-indigo-300 mt-1">{e.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="h3 mb-5 text-gradient-indigo">Certificates</h2>
            <div className="space-y-4">
              {certificates.map((c) => (
                <div key={c.title} className="glass-card p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium">{c.title}</p>
                    <p className="text-sm text-white/50">{c.org}</p>
                  </div>
                  <span className="text-xs text-indigo-300 whitespace-nowrap">{c.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
