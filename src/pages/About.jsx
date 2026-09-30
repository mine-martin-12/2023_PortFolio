import CountUp from 'react-countup';
import Footer from '../components/Footer';
import ResumeButton from '../components/ResumeButton';
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
    <div className="relative pt-16">
      {/* intro */}
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="About Me"
          title="Software engineer, data-minded."
          subtitle={profile.summary}
        />
        <ResumeButton variant="accent" className="-mt-4 self-start" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="card">
              <div className="font-display text-4xl tracking-tight text-secondary">
                <CountUp start={0} end={s.value} duration={2} />
                {s.suffix}
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-on-surface/60">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* skills */}
      <Section>
        <SectionHeading eyebrow="Toolkit" title="Skills & stack." />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="card card-hover">
              <h3 className="mb-4 text-xs uppercase tracking-widest text-accent">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="tag">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* experience timeline */}
      <Section id="experience">
        <SectionHeading eyebrow="Journey" title="Experience timeline." />
        <ol className="relative space-y-6 border-l border-on-surface/10 pl-6 md:pl-10">
          {experience.map((e) => (
            <li key={`${e.role}-${e.company}`} className="relative">
              <span className="absolute -left-[31px] top-8 h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20 md:-left-[47px]" />
              <div className="card">
                <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h3 className="h3">{e.role}</h3>
                  <span className="text-xs uppercase tracking-wider text-secondary">{e.period}</span>
                </div>
                <p className="mb-4 text-sm text-on-surface-mute">{e.company}</p>
                <ul className="space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm leading-7 text-on-surface/70">
                      <span className="text-accent">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* education + certificates */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="pill">Education</span>
            <div className="mt-8 space-y-4">
              {education.map((e) => (
                <div key={e.title} className="card !p-6">
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-on-surface-mute">{e.org}</p>
                  <p className="mt-1 text-xs text-secondary">{e.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="pill">Certificates</span>
            <div className="mt-8 space-y-4">
              {certificates.map((c) => (
                <div key={c.title} className="card flex items-center justify-between gap-4 !p-6">
                  <div>
                    <p className="font-medium">{c.title}</p>
                    <p className="text-sm text-on-surface-mute">{c.org}</p>
                  </div>
                  <span className="whitespace-nowrap text-xs text-secondary">{c.period}</span>
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
