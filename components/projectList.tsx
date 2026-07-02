import ProjectCard from "./projectCard";

interface Project {
	title: string;
	description: string;
	technologies: string[];
	link?: string;
}

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({
	projects,
}: ProjectListProps) {
	return (
		<section className="flex flex-wrap justify-center gap-6 mx-auto max-w-7xl px-4 m-5 sm:px-6 lg:px-8">
			{projects.map((project) => (
				<ProjectCard key={project.title} {...project} />
			))}
		</section>
	);
}

