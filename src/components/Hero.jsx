// import { Icon } from "@iconify/react/dist/iconify.js";
import Skills from "./Skills";
import HeroImg from "/assets/body_img.png";
import Palm from "/assets/palm.png";
const Hero = () => {
  return (
    <div className=" min-h-[90vh] ">
      <div className="flex flex-col md:flex-row gap-12 min-h-[73vh] justify-center md:justify-around items-center  md:px-4 md:p-2 ">
        <img src={HeroImg} alt="" className="h-72 w-72 md:h-96 md:w-96" />
        <div className="flex flex-col items-start md:gap-2 gap-3 md:w-1/2 w-10/12 md:p-0 text-center">
          <div className="flex items-center gap-4 w-full md:justify-start justify-center ">
            <h2 className=" md:text-[3rem] whitespace-nowrap text-3xl title">
              Frontend Engineer
            </h2>
            {/* <h2 className=" md:text-5xl text-4xl title">Developer</h2> */}
            <img
              className="w-10 h-10 md:w-11 md:h-11 md:block hidden "
              src={Palm}
              alt="img"
            />
          </div>
          <div className="flex items-center gap-2 md:justify-start justify-center w-full">
            {/* <Icon
              icon="hugeicons:location-04"
              width="1.2rem"
              height="1.2rem"
              style={{ color: "#6b58ca" }}
            /> */}
            <p className="text-[#7d7d7f] text-center">
              @ Squareboat, Gurugram 📍
            </p>
          </div>
          <p className="mt-4 text-balance text-start">
            Hi, I&apos;m Chhatrapati Chauhan. A passionate Front-end React
            Developer based in Gurugram, India. I love crafting designs that
            enhance the overall user experience, making it enjoyable and
            memorable for everyone who interacts with the websites I build.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Hero;
