import { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Lazy load heavy components for better performance
const StarsCanvas = lazy(() => import("./components/starBg"));
const ExperienceComp = lazy(() => import("./components/MyExperience"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] relative">
      <Header />
      <div className="flex flex-col gap-10 md:gap-12">
        <Hero />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <StarsCanvas />
          <ExperienceComp />
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
