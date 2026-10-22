const experiences = [
  {
    period: "Jun 2026 — Present",
    role: "Software Developer",
    company: "PT Global Permai Abadi (Placement: PT Charoen Pokphand Indonesia – Food Division, Medan)",
    description:
      "Built a Manufacturing Execution System (MES) to digitalize Production Department operations, and an internal payroll system based on attendance and overtime to automate salary calculation for outsourced employees. Handled full-stack development (Laravel, PHP, MySQL, Alpine.js, Tailwind CSS) from database design to deployment, and translated production team needs into app features, UI/UX, and floor signage.",
    technologies: ["Laravel", "PHP", "MySQL", "Alpine.js", "Tailwind CSS"],
    current: true,
  },
  {
    period: "Jan 2026 — Feb 2026",
    role: "Software Developer",
    company: "Gugus Penjamin Mutu (GPM), Universitas Negeri Medan",
    description:
      "Developed and maintained 3 academic information systems using Laravel, Filament, MySQL, and Tailwind CSS, including a bilingual (Indonesian–English) admission system supporting 2 intake cycles with 76 applicants, and the AISTEEL seminar system handling ~50 papers with peer-review and publication. Also provided technical support to prospective and active students.",
    technologies: ["Laravel", "MySQL", "Filament", "PHP", "Tailwind CSS"],
    current: false,
  },
  {
    period: "Feb 2024 — Jun 2024",
    role: "Machine Learning Cohort – Distinction (Top 10% of 2,000+ Participants)",
    company: "Bangkit Academy led by Google, Goto, and Traveloka",
    description:
      "Completed 10+ end-to-end projects covering data preprocessing, model training, and evaluation. Led the ML Team (3 members) in a cross-functional capstone with 3 ML, 3 Cloud Computing, and 2 Mobile Developers, building an environmental sound recognition model with Python and TensorFlow (project score 91.6/100).",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Google Colab"],
    current: false,
  },
  {
    period: "Dec 2022 — Feb 2024",
    role: "Freelance Front-End Developer",
    company: "UNDANKIN",
    description:
      "Designed and developed 8 web-based digital invitation themes using HTML, PHP, Bootstrap, and jQuery, and maintained and improved the UI to keep it responsive and consistent.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "jQuery"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Building systems and{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              intelligent solutions.
            </span>
          </h2>
          <p>
            A journey through my experience in web development and machine
            learning — building academic systems, developing scalable web
            applications, and creating data-driven solutions through real-world
            projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute rounded-full inset-0 bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
