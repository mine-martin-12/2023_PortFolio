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
    <div className="relative overflow-hidden pt-28 md:pt-32">
      <div className="bg-orb absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full pointer-events-none" />
      <div className="bg-orb absolute bottom-1/3 -right-24 w-[380px] h-[380px] rounded-full pointer-events-none opacity-70" />

      <Section className="relative z-10">
        <SectionHeading
          eyebrow="What I do"
          title="Services that ship "
          accent="products."
          subtitle="Whether you need a new product built or an existing one made faster, here is how I can help."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card p-7 flex flex-col hover:border-indigo-400/50 hover:glow-indigo hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center text-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                {s.icon}
              </div>
              <h3 className="h3 mb-3">{s.title}</h3>
              <p className="text-sm text-white/60 mb-5">{s.description}</p>
              <ul className="mt-auto space-y-2 pt-5 border-t border-white/10">
                {s.features.map((f) => (
                  <li key={f} className="text-xs text-white/50 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* process */}
      <Section className="relative z-10">
        <SectionHeading eyebrow="Process" title="How I " accent="work." />
        <div className="grid gap-6 md:grid-cols-3">
          {process.map((p) => (
            <div key={p.step} className="glass-card p-7">
              <span className="text-4xl font-bold text-indigo-500/40">{p.step}</span>
              <h3 className="h3 mt-3 mb-2">{p.title}</h3>
              <p className="text-sm text-white/60">{p.text}</p>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 mt-10 px-7 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-all duration-300 glow-indigo"
        >
          Start a project
          <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </Section>

      <Footer />
    </div>
  );
};

export default Services;
