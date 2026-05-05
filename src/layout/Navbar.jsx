import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Reset active section when navigating to home page
    if (isHomePage && !location.hash) {
      // Small delay to ensure DOM is ready after navigation
      setTimeout(() => setActiveSection(""), 100);
    }
  }, [isHomePage, location.pathname, location.hash]);

  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    // Function to find active section based on scroll position
    const findActiveSection = () => {
      if (window.scrollY <= 100) {
        setActiveSection("");
        return;
      }

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (considering the root margin)
          if (
            rect.top <= window.innerHeight * 0.4 &&
            rect.bottom >= window.innerHeight * 0.55
          ) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("");
    };

    // Check active section on mount and scroll
    findActiveSection();

    const handleScroll = () => {
      findActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        let hasActiveSection = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY > 100) {
            setActiveSection(entry.target.id);
            hasActiveSection = true;
          }
        });

        // If no section is active and we're not at the very top, reset activeSection
        if (!hasActiveSection && window.scrollY > 100) {
          setActiveSection("");
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    // Small delay to ensure elements are mounted
    setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [isHomePage]);

  const handleNavClick = (href) => {
    if (isHomePage) {
      // On home page, just scroll to section
      const section = document.getElementById(href.replace("#", ""));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, navigate to home with hash
      navigate(`/${href}`);
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    if (isHomePage) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#contact");
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          AK<span className="text-primary">.</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-foreground bg-surface font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button onClick={handleContactClick}>Contact Me</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(link.href)}
                className="text-lg text-muted-foreground hover:text-foreground hover:bg-surface hover:font-medium py-2 px-3 rounded-lg text-left transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}

            <Button onClick={handleContactClick} className="w-full">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
