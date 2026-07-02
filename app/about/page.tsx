import AboutCard from "@/components/aboutCard";

const linkedin = "https://www.linkedin.com/in/aurora-n/";
const github = "https://github.com/auroranorlund";
const email = "aurora.n@example.com";

export default function About() {
  return (
    <main className="flex-1">
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="mb-6">
        My name is Aurora Norlund, and I am a graphic design and web development student at BYU Pathways Worldwide. I am currently learning how to apply my skills with front-end and back-end development into cohesive, full-stack applications.
      </p>
      </div>
      <AboutCard linkedin={linkedin} github={github} email={email} />
    </main>
  );
}