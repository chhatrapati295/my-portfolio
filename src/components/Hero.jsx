import { Icon } from "@iconify/react/dist/iconify.js";
import Skills from "./Skills";
// import HeroImg from "/assets/body_img4.webp";
import Palm from "/assets/palm.png";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/chhatrapati_resume.pdf";
    link.download = "chhatrapati_resume"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-[90vh] relative">
      <div className="flex flex-col md:flex-row gap-12 md:min-h-[73vh] min-h-[70vh] justify-center md:justify-around items-center md:px-4 md:p-2">
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={
              "https://ik.imagekit.io/ywdhkkfvg/body_img4.webp?updatedAt=1720023653941"
            }
            alt="Hero"
            className="h-48 w-h-48 md:h-[40vh] md:m-0 md:w-auto sm:mt-[10vh] mt-[12vh]"
            loading="eager"
          />
        </div>
        <div className="flex flex-col items-start md:gap-2 gap-3 md:w-1/2 w-10/12 md:p-0 text-center">
          <div className="flex items-center gap-4 w-full md:justify-start justify-center">
            <h2 className="md:text-[2rem] lg:text-[2rem] xl:text-[3rem] md:text-black text-gray-700 whitespace-nowrap text-3xl title">
              Frontend Engineer
            </h2>
            <img
              className="w-10 h-10 md:w-8 xl:w-12 md:h-8 xl:h-12 md:block hidden"
              src={Palm}
              alt="Palm"
              loading="lazy"
            />
          </div>
          <div className="flex items-center gap-2 md:justify-start justify-center w-full">
            <p className="md:text-[#7d7d7f] text-gray-700 text-center">
              @ Squareboat, Gurugram 📍
            </p>
          </div>
          <div className="mt-4 md:text-balance md:text-start text-center">
            Hello, I&apos;m Chhatrapati Chauhan, a skilled Front-end Engineer.
            Specializing in creating visually appealing and user-friendly
            websites, I focus on delivering seamless and engaging user
            experiences.{" "}
            <p className="md:block hidden">
              Let&apos;s collaborate to create exceptional digital experiences.
            </p>
          </div>
          <button
            onClick={handleDownload}
            className={`flex gap-1 items-center text-sm border border-[#7d7d7f] outline-none rounded-md py-[6px] px-4 active:scale-90 transition-all duration-300 ease-in-out md:mx-0 mx-auto download_btn`}
          >
            Download Resume{" "}
            <Icon
              icon="material-symbols:download"
              className="download_icon transition-all duration-300 ease-in-out"
            />{" "}
          </button>
        </div>
        <img
          src="../../public/assets/Images/grass.png"
          className="absolute lg:block hidden -top-14 -right-10 h-40 z-50"
          alt=""
        />
      </div>
      <Skills />
    </div>
  );
};

export default Hero;
