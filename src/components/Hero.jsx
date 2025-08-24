import { Icon } from "@iconify/react/dist/iconify.js";
import { lazy, Suspense, memo } from "react";

// Lazy load Skills component
const Skills = lazy(() => import("./Skills"));

const Hero = memo(() => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1CbMSea1tqlnzY4atcoDZPh5X_3lwl4pt/view?usp=sharing";
    link.target = "_blank";
    link.download = "chhatrapati_resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative flex flex-col justify-between min-h-screen py-12">
      <div className="flex flex-col md:flex-row gap-12 md:min-h-[73vh] min-h-[70vh] justify-center md:justify-around items-center md:px-4 md:p-2">
        <div className="flex items-center justify-center md:w-1/2">
          <img
            src="https://ik.imagekit.io/ywdhkkfvg/body_img4.webp?updatedAt=1720023653941"
            alt="Chhatrapati Chauhan - Frontend Engineer"
            className="h-48 z-30 w-h-48 md:h-[40vh] md:m-0 md:w-auto sm:mt-[10vh] mt-[12vh]"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="z-30 flex flex-col items-start w-10/12 gap-3 text-center md:gap-2 md:w-1/2 md:p-0">
          <div className="flex items-center justify-center w-full gap-4 md:justify-start">
            <h1 className="md:text-[2rem] lg:text-[2rem] xl:text-[3rem] md:text-black text-gray-700 whitespace-nowrap text-3xl title">
              Frontend Engineer
            </h1>
            <img
              className="hidden w-10 h-10 md:w-8 xl:w-12 md:h-8 xl:h-12 md:block"
              src="/assets/palm.png"
              alt="Palm decoration"
              loading="lazy"
              width="48"
              height="48"
            />
          </div>
          <div className="flex items-center justify-center w-full gap-2 md:justify-start">
            <a
              href="https://squareboat.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-[#7d7d7f] text-gray-700 text-center hover:text-blue-600"
            >
              @ Squareboat, Gurugram 📍
            </a>
          </div>
          <div className="mt-4 text-center md:text-balance md:text-start">
            Hello, I&apos;m Chhatrapati Chauhan, a skilled Front-end Engineer.
            Specializing in creating visually appealing and user-friendly
            websites, I focus on delivering seamless and engaging user
            experiences.{" "}
            <p className="hidden md:block">
              Let&apos;s collaborate to create exceptional digital experiences.
            </p>
          </div>
          <button
            onClick={handleDownload}
            className="flex gap-2 items-center text-sm border border-[#7d7d7f] outline-none rounded-md py-[6px] px-4 active:scale-90 transition-all duration-300 ease-in-out md:mx-0 mx-auto download_btn"
            aria-label="View Resume"
          >
            View Resume
            <Icon
              icon="mdi:eye"
              className="transition-all duration-300 animate-pulse eye"
            />
          </button>
        </div>
      </div>
      <Suspense fallback={<></>}>
        <Skills />
      </Suspense>
    </div>
  );
});

Hero.displayName = "Hero";

export default Hero;
