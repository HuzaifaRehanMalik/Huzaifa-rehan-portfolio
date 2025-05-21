import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Dynamic Resume Builder",
    description: "An interactive platform where users can generate polished, professional resumes by inputting their information in a structured form.",
    image: "/p-1.png",
    url: "https://resuma-builder-milestone-2.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Car Marketplace Platform",
    description: "A responsive website for buying and selling vehicles, inspired by platforms like PakWheels, featuring listings, filters, and user-friendly navigation.",
    image: "/p-2.png",
    url: "https://class-6-project-pakwheels-web.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "React.js"],
  },
  {
    title: "Full-featured E-commerce Store",
    description: "A complete e-commerce solution with product pages, a shopping cart, and user authentication built with modern web technologies.",
    image: "/p-4.png",
    url: "https://class-5-project-lxul.vercel.app/?__vercel_draft=1",
    techStack: ["Next.js", "Tailwind CSS", "React.js"],
  },
];

const techColors: Record<string, string> = {
  HTML: "bg-gray-600",
  CSS: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  "Next.js": "bg-black",
  "Tailwind CSS": "bg-blue-800",
  "React.js": "bg-zinc-600",
};

const ProjectCard = ({ title, description, image, url, techStack }: typeof projects[0]) => (
  <div className="bg-slate-500 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div>
        <Image
          alt={`Screenshot of ${title}`}
          src={image}
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-blue-800 font-semibold text-xl mb-2">{title}</h2>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className={`${techColors[tech] || "bg-gray-700"} px-3 py-1 rounded-full text-xs text-white`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  </div>
);

export default function Projects() {
  return (
    <div className="min-h-screen bg-black py-20 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <footer className="bg-black text-white py-6 mt-20 text-center rounded-lg">
          <p className="text-sm">&copy; {new Date().getFullYear()} Huzaifa Rehan. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}