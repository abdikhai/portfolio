import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { projects } from "@/data/projects";
import { Footer } from "@/layout/Footer";
import { useEffect } from "react";

export const AllProjects = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-4 animate-fade-in animation-delay-100">
              All
              <span className="font-serif italic font-normal text-primary">
                {" "}
                Projects
              </span>
            </h1>
            <p className="text-muted-foreground text-lg animate-fade-in animation-delay-200">
              Explore my complete collection of projects, from complex web
              applications to innovative tools that solve real-world problems.
            </p>
          </div>

          <div className="text-center animate-fade-in animation-delay-300">
            <Link to="/">
              <Button variant="outline">← Back to Home</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="group glass rounded-2xl overflow-hidden transition-all hover:shadow-lg"
                style={{
                  animationDelay: `${(idx + 1) * 50}ms`,
                  animation: "fade-in 0.5s ease both",
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
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-surface text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <p className="text-muted-foreground mb-6">
              Interested in working together?
            </p>
            <Link to="/#contact">
              <Button>Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllProjects;
