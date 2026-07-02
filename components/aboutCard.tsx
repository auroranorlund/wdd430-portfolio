interface AboutCardProps {
  linkedin: string;
  github: string;
  email: string;
};

export default function AboutCard({
  linkedin,
  github,
  email
}: AboutCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md max-w-sm mx-auto flex flex-col items-center text-center">
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-700 text-center">
        LinkedIn
      </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-700 ml-4 text-center">
        GitHub
          </a>
        <a href={`mailto:${email}`} className="text-sm font-medium text-blue-600 hover:text-blue-700 ml-4 text-center">
        Email
      </a>
    </article>
  );
}