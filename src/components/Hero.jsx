import { motion } from "framer-motion";
import Skills from "./Skills";
import HeroImg from "/assets/body_img4.webp";
import Palm from "/assets/palm.png";

const Hero = () => {
  return (
    <div className="min-h-[90vh] relative">
      <div className="flex flex-col md:flex-row gap-12 md:min-h-[73vh] min-h-[70vh] justify-center md:justify-around items-center md:px-4 md:p-2">
        <div className="md:w-1/2 flex justify-center items-center">
          <motion.img
            src={HeroImg}
            alt="Hero"
            className="h-48 w-h-48 md:h-[40vh] md:m-0 md:w-auto sm:mt-[10vh] mt-[12vh]"
            initial={{ x: "-150%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            loading="eager"
          />
        </div>
        <motion.div
          initial={{ x: "150%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col items-start md:gap-2 gap-3 md:w-1/2 w-10/12 md:p-0 text-center"
        >
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
          <p className="mt-4 md:text-balance md:text-start text-center">
            Hello, I&apos;m Chhatrapati Chauhan, a skilled Front-end Engineer.
            Specializing in creating visually appealing and user-friendly
            websites, I focus on delivering seamless and engaging user
            experiences.{" "}
            <p className="md:block hidden">
              With a keen eye for detail and a passion for excellence, I
              transform creative concepts into high-performing web applications.
              Let&apos;s collaborate to create exceptional digital experiences.
            </p>
          </p>
        </motion.div>
        <img
          src="../../public/assets/Images/grass.png"
          className="absolute xl:block hidden -top-14 -right-10 h-40 z-50"
          alt=""
        />
      </div>
      <Skills />
    </div>
  );
};

export default Hero;
