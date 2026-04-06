export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-2xl">
              <span className="text-7xl font-extrabold text-white select-none">
                FW
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              Hi! I&apos;m <strong className="text-gray-900">Fitrah Wahyudi</strong>,
              a dedicated Full Stack Developer with a strong passion for crafting
              elegant digital experiences. I enjoy turning complex problems into
              simple, beautiful, and intuitive solutions.
            </p>
            <p>
              With hands-on experience in modern web technologies, I build
              responsive and performant applications from front to back. I
              believe in clean code, continuous learning, and collaboration.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new tech trends,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/fitwahyudii/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
