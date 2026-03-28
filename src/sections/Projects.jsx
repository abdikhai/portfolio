import { ArrowUpRight, Github, ChevronUp } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";

const projects = [
  {
    title: "Livestock Price Forecasting System",
    description:
      "Developed a web-based forecasting system using Holt-Winters Exponential Smoothing to predict livestock product prices, helping analyze trends and support data-driven decision making.",
    image: "/projects/project_forecasting.png",
    tags: ["Python", "Flask", "MySQL", "Bootstrap"],
    link: "#",
    github:
      "https://github.com/abdikhai/food-price-forecasting-holt-winters.git",
  },
  {
    title: "Hear4U - Sound Recognition App",
    description:
      "Developed an Android-based application using TensorFlow to detect and classify environmental sounds in real time, helping hearing-impaired users stay aware of their surroundings.",
    image: "/projects/project_hear4u.png",
    tags: ["Android", "TensorFlow", "Google Cloud", "Next.js"],
    link: "#",
    github: "https://github.com/HEAR4U-bangkit",
  },
  {
    title: "Bike Sharing Dashboard",
    description:
      "Built an interactive dashboard to analyze bike-sharing data, exploring usage patterns between casual and registered riders across seasons and weekdays using Streamlit.",
    image: "/projects/project_bike-sharing.png",
    tags: ["Python", "Pandas", "Streamlit", "EDA", "Data Visualization"],
    link: "https://khairulabdi-bikesharing.streamlit.app/",
    github: "https://github.com/abdikhai/bike-sharing-analysis",
  },
  {
    title: "Kantrian - QR-Based Ordering System",
    description:
      "Developed a web-based food ordering system using QR code scanning with collaborative filtering for personalized menu recommendations, integrated ordering, payment, and transaction tracking in one platform.",
    image: "/projects/project_kantrian.png",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    link: "#",
    github: "#",
  },
  {
    title: "Orange Ripeness Classification",
    description:
      "A machine learning project that classifies orange ripeness using image processing and Support Vector Machine (SVM), achieving 91% accuracy based on color feature extraction.",
    image: "/projects/project_pcd.png",
    tags: ["Python", "OpenCV", "Machine Learning", "SVM"],
    link: "#",
    github: "#",
  },
  {
    title: "Undankin - Digital Invitation Platform",
    description:
      "A web-based digital invitation platform that allows users to create and share personalized wedding and event invitations online, complete with RSVP, countdown, and guest management features.",
    image: "/projects/project_undankin.png",
    tags: ["PHP", "jQuery", "MySQL", "Bootstrap"],
    link: "#",
    github: "#",
  },
  {
    title: "Tridharma Information System",
    description:
      "A web-based system for managing and recapping lecturers' Tridharma activities, including research, community service, and academic outputs, with role-based access for admin and lecturers.",
    image: "/projects/project_tridharma.png",
    tags: ["PHP", "Bootstrap", "MySQL", "JS"],
    link: "#",
    github: "https://github.com/aeez/rekap_tridharma",
  },
];

const INITIAL_COUNT = 4;

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenCount = projects.length - INITIAL_COUNT;

  const handleToggle = () => {
    if (showAll) {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setTimeout(() => setShowAll(false), 400);
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayed.map((project, idx) => {
            const isNew = idx >= INITIAL_COUNT;
            return (
              <div
                key={project.title}
                className="group glass rounded-2xl overflow-hidden md:row-span-1 transition-all"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                  animation:
                    isNew && showAll
                      ? `fadeInUp 0.4s ease ${(idx - INITIAL_COUNT) * 80}ms both`
                      : "fade-in 0.5s ease both",
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton onClick={handleToggle}>
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                View All Projects
                <span className="text-sm text-muted-foreground font-normal">
                  +{hiddenCount} more
                </span>
                <ArrowUpRight className="w-5 h-5" />
              </>
            )}
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
