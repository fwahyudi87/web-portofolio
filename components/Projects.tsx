const projects = [
  {
    title: "Web Portfolio",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS to showcase projects, skills, and professional experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    emoji: "🚀",
    link: "https://github.com/fwahyudi87/web-portofolio",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce web application with product management, shopping cart, and secure checkout functionality.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    emoji: "🛒",
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop boards, and team collaboration features.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    emoji: "📋",
    link: "#",
  },
  {
    title: "REST API Service",
    description:
      "A scalable RESTful API service with authentication, rate limiting, and comprehensive documentation using Swagger.",
    tags: ["Node.js", "Express", "JWT", "Swagger"],
    emoji: "🔌",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A selection of projects I&apos;ve worked on. Each one reflects my
            commitment to quality and clean code.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{project.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
