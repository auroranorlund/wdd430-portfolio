import ProjectList from "@/components/projectList";

const projects = [
  {
    title: "Project 1",
    description: "This is the first project.",
    technologies: ["React", "TypeScript", "CSS"],
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description: "This is the second project.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
    link: "https://example.com/project2",
  }
];

export default function Home() {
  return (
    <main className="flex-1">
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">My Portfolio</h2>
      <p className="mb-6">
        Welcome to my portfolio! I'm a full-stack developer learning Next.js and React. Here are some of the projects I've worked on:
      </p>
      </div>
      <ProjectList projects={projects} />
    </main>
  );
}