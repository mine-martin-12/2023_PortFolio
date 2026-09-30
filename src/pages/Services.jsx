import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxLightningBolt,
} from 'react-icons/rx';
import Footer from '../components/Footer';
import Section, { SectionHeading } from '../components/Section';
import { process } from '../data/site';

const services = [
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description:
      'Full-stack web apps built with React, Next.js, Node.js and NestJS — clean code, scalable APIs and solid databases.',
    features: ['React / Next.js / Vue', 'Node.js & NestJS APIs', 'PostgreSQL / MongoDB'],
  },
  {
    icon: <RxPencil2 />,
    title: 'UI/UX Design',
    description:
      'Modern, accessible interfaces designed mobile-first with clear hierarchy and delightful interaction detail.',
    features: ['Responsive layouts', 'Design systems', 'Accessibility audits'],
  },
  {
    icon: <RxReader />,
    title: 'AI & Data',
    description:
      'Prompt engineering, annotation and evaluation pipelines that make AI systems measurably more accurate.',
    features: ['Prompt engineering', 'Data annotation', 'Model evaluation'],
  },
  {
    icon: <RxLightningBolt />,
    title: 'API & Integrations',
    description:
      'Third-party integrations and microservices — payments, messaging and internal tooling wired together reliably.',
    features: ['REST API design', 'Microservices', 'Third-party integrations'],
  },
  {
    icon: <RxCrop />,
    title: 'Branding',
    description:
      'Memorable brand identities: logos, palettes and guidelines that stay consistent across every touchpoint.',
    features: ['Logo & visual identity', 'Brand guidelines', 'Style systems'],
  },
  {
    icon: <RxRocket />,
    title: 'SEO & Performance',
    description:
      'Technical SEO, Core Web Vitals work and analytics setup to grow organic traffic and keep pages fast.',
    features: ['Technical SEO audit', 'Core Web Vitals', 'Analytics setup'],
  },
];

const Services = () => {
  return (
    <div className="relative pt-16">
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="Services that ship products."
          subtitle="Whether you need a new product built or an existing one made faster, here is how I can help."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="card card-hover flex flex-col">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-2xl text-accent">
                {s.icon}
              </span>
              <h2 className="h3 mt-6">{s.title}</h2>
              <p className="mt-3 text-sm leading-7 text-on-surface/70">{s.description}</p>
              <ul className="mt-auto space-y-2 border-t border-on-surface/10 pt-5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-on-surface/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="How I work." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <article key={p.step} className="card">
              <span className="font-display text-4xl font-semibold text-accent/60">{p.step}</span>
              <h3 className="h3 mt-6">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-on-surface/70">{p.text}</p>
            </article>
          ))}
        </div>
        <Link to="/contact" className="btn-accent focus-ring group self-start">
          Start a project
          <BsArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Section>

      <Footer />
    </div>
  );
};

export default Services;
