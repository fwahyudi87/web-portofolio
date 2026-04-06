const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fitwahyudii/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    description: "Connect with me on LinkedIn",
    cta: "View Profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/fwahyudi87",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    description: "Check out my repositories",
    cta: "View GitHub",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
            I&apos;m open to new opportunities and collaborations. Feel free to
            reach out — I&apos;d love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all text-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {item.description}
                  </div>
                </div>
                <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800 transition-colors">
                  {item.cta} →
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Let&apos;s Work Together</h3>
            <p className="text-indigo-100 mb-6">
              Whether you have a project in mind or just want to chat about
              tech, my inbox is always open.
            </p>
            <a
              href="https://www.linkedin.com/in/fitwahyudii/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-indigo-50 transition-colors shadow"
            >
              Say Hello on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
