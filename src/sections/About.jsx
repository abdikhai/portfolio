import { Code2, Lightbulb, Brain, Database } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Building and deploying intelligent models that learn from data to solve real-world problems.",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description:
      "Transforming raw data into meaningful insights and actionable information through exploration and visualization.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive and interactive web interfaces using React, Tailwind CSS, and modern web technologies.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Applying data and technology to design effective solutions for complex, real-world challenges.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building systems that
              <span className="font-serif italic font-normal text-white">
                {" "}
                make work simpler.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science graduate from Universitas Negeri Medan
                and a Full-Stack Developer working mainly with Laravel, PHP, and
                MySQL.
              </p>

              <p>
                I currently work as a Software Developer at PT. Charoen Pokphand
                Indonesia, where I built a Manufacturing Execution System (MES)
                from scratch for the Production Department. I work across the
                stack, from database and backend development to frontend
                implementation, deployment, and UI/UX.
              </p>

              <p>
                I also have a background in Machine Learning. I graduated from
                Bangkit Academy 2024, Machine Learning Path, with Distinction and
                ranked in the Top 10% of 2,000+ participants.
              </p>

              <p>
                I enjoy building software from the ground up and figuring out how
                technology can fit into the way people actually work.
              </p>
            </div>

          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
