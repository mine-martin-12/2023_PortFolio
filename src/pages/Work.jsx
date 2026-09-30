import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import Section, { SectionHeading } from '../components/Section';
import { projects } from '../data/site';

const Work = () => {
  return (
    <div className="relative pt-16">
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Selected Work"
          title="Projects I have shipped."
          subtitle="Real systems in production: laundry operations, retail point of sale, dashboards and storefronts."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Work;
