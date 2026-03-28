import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    title: "Machine Learning Graduate with Distinction",
    subtitle: "Bangkit Academy 2024 • Top 10%",
    description:
      "Ranked in the top 10% of participants after completing 10+ machine learning projects and build a capstone project on sound recognition.",
  },
  {
    title: "Hear4U - Sound Recognition for the Hearing Impaired",
    subtitle: "Capstone Project • Bangkit Academy",
    description:
      "Built a CNN-based system to classify 10 environmental sounds, enabling real-time audio awareness for hearing-impaired users.",
  },
  {
    title: "GPA 3.90 / 4.00",
    subtitle: "Universitas Negeri Medan",
    description:
      "Graduated with excellent academic performance in Computer Science.",
  },
  {
    title: "PKM Grant Recipient (Project Lead)",
    subtitle: "Diktiristek 2023 • PKM-PI",
    description:
      "Led a funded project developing 'Kantrian', a QR-based food ordering system with collaborative filtering to improve ordering efficiency and user experience.",
  },
  {
    title: "91% Accuracy - SVM Project",
    subtitle: "Computer Science Expo",
    description:
      "Developed an orange maturity detection model using Support Vector Machine.",
  },
  {
    title: "Published Research",
    subtitle: "Random Forest",
    description:
      "Published research on drinking water feasibility prediction using machine learning.",
  },
];

export const Achievements = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % achievements.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + achievements.length) % achievements.length,
    );
  };

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background Blur */}
      <div
        className="absolute top-1/2 left-1/2
        w-200 h-200 bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Milestones that{" "}
            <span className="font-serif italic font-normal text-white">
              define my journey.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A collection of academic and project achievements that reflect my
            growth in machine learning, software development, and real-world
            problem solving.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Card */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              {/* Icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="pt-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {achievements[activeIdx].title}
                </h3>

                <p className="text-sm text-primary mb-4">
                  {achievements[activeIdx].subtitle}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  {achievements[activeIdx].description}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {achievements.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
