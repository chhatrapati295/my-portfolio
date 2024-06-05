import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LeftPortion from "./components/LeftPortion";
import Projects from "./components/Projects";
import RightPortion from "./components/RightPortion";

function App() {
  return (
    <div className="flex flex-col w-full h-screen overflow-x-hidden bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <Header />
      <div className=" pt-14 flex flex-col md:gap-12 gap-6">
        <Hero />
        <AboutMe />
        <LeftPortion />
        <Projects />
        <RightPortion />
        <Contact />
      </div>
    </div>
  );
}



export default App;
