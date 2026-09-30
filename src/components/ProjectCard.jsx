import { BsArrowUpRight } from 'react-icons/bs';

const ProjectCard = ({ project, showImage = true }) => {
  const external = project.link && project.link !== '#';
  const Wrapper = external ? 'a' : 'div';
  const linkProps = external
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="card card-hover focus-ring group flex flex-col overflow-hidden !p-0"
    >
      {showImage && project.image && (
        <div className="relative h-48 overflow-hidden md:h-56">
          <img
            src={project.image}
            alt={`${project.title}: ${project.subtitle}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-xs uppercase tracking-widest text-secondary">{project.subtitle}</p>
        <h3 className="h3 mt-2">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-on-surface/70">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
          {external ? 'View project' : 'Case study coming soon'}
          {external && (
            <BsArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          )}
        </span>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
