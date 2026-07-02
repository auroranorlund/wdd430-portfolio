interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 text-sm leading-6 text-gray-600">{description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

          {link && (
              <p className="text-sm font-medium text-blue-600 hover:text-blue-700">
                <a href={link} target="_blank" rel="noopenernoreferrer">
                  View Project →
                </a>
              </p>
          )}
    </article>
  );
}
