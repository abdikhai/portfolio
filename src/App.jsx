import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import Projects from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Achievements } from "@/sections/Achievements";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import { useEffect, lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

// Lazy load AllProjects since it is a secondary route
const AllProjects = lazy(() => import("@/sections/AllProjects"));

// Premium sleek loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-full border-2 border-muted border-t-primary animate-spin" />
      <span className="text-muted-foreground text-xs uppercase tracking-widest animate-pulse">Loading...</span>
    </div>
  </div>
);

function Home() {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget =
      location.state?.scrollTo || location.hash?.replace("#", "");
    if (scrollTarget) {
      const section = document.getElementById(scrollTarget);
      if (section) {
        // Small delay to ensure DOM is fully rendered
        setTimeout(() => {
          section.scrollIntoView({ behavior: "auto" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/projects";

  return (
    <div className="min-h-screen overflow-x-hidden">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<PageLoader />}>
              <AllProjects />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <Analytics />
    </Router>
  );
}

export default App;
