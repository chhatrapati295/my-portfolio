import Skills from "./Skills";
import HeroImg from "/assets/body_img.png";
import Palm from "/assets/palm.png";
const Hero = () => {
  return (
    <div className="md:h-full ">
      <div className="flex flex-col md:flex-row gap-12 justify-center md:justify-around items-center  md:px-4 md:p-2 ">
        <img src={HeroImg} alt="" className="h-72 w-72 md:h-96 md:w-96" />
        <div className="flex flex-col items-start gap-2 md:w-1/2 w-10/12 md:p-0 text-center">
          <h2 className=" md:text-5xl text-4xl title">Frontend React</h2>
          <div className="flex items-center gap-4">
            <h2 className=" md:text-5xl text-4xl title">Developer</h2>
            <img className="w-10 h-10 md:w-12 md:h-12 " src={Palm} alt="img" />
          </div>
          <p className="mt-8 text-balance text-start">
            Hi, I&apos;m Chhatrapati Chauhan. A passionate Front-end React
            Developer based in Gurugram, India. I love crafting designs that
            enhance the overall user experience, making it enjoyable and
            memorable for everyone who interacts with the websites I build. 📍
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Hero;
