import { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StarsCanvas from "./components/starBg";
import ExperienceComp from "./components/MyExperience";

const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] relative">
      <StarsCanvas />
      <Header />
      <div className="flex flex-col md:gap-12 gap-10">
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <ExperienceComp />
          {/* <AboutMe /> */}
          {/* <LeftPortion /> */}
          {/* <Projects /> */}
          {/* <RightPortion /> */}
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
