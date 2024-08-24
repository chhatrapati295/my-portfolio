import { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StarsCanvas from "./components/starBg";

const AboutMe = lazy(() => import("./components/AboutMe"));
const LeftPortion = lazy(() => import("./components/LeftPortion"));
const Projects = lazy(() => import("./components/Projects"));
const RightPortion = lazy(() => import("./components/RightPortion"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  // const supabase = createClient(
  //   "https://yllzfjjtxritncxrrwnu.supabase.co",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsbHpmamp0eHJpdG5jeHJyd251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MDU1MjMsImV4cCI6MjAzNjA4MTUyM30.2vn_COFpE-JSG9hUsnWajQHY3RB20axPqORmWXoeEcI"
  // );
  return (
    <div className="flex flex-col w-full min-h-screen bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] relative">
      {/* <img
        src="../../public/assets/Images/grass.png"
        className="fixed md:block hidden top-0 -right-10 h-40 z-50"
        alt=""
      /> */}
      <StarsCanvas />
      <Header />
      <div className="flex flex-col md:gap-12 gap-6">
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          {/* <AboutMe /> */}
          {/* <LeftPortion /> */}
          <Projects />
          <RightPortion />
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
