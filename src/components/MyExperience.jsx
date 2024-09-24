import { Icon } from "@iconify/react/dist/iconify.js";

const ExperienceComp = () => {
  const currentTime = new Date();
  const monthCounter = currentTime.getMonth() - 3;

  return (
    <div className="md:py-16 md:pb-0 pb-10 pt-0 flex flex-col md:gap-16 gap-8 items-center">
      <h2 className="md:hidden font-medium uppercase">* Experience *</h2>
      <h2 className="text-5xl uppercase md:block hidden  font-bold whitespace-nowrap z-30 text-slate-400 animate-pulse opacity-25">
        Experience
      </h2>
      <ul className="md:w-7/12 w-11/12 mx-auto flex flex-col md:gap-14 gap-10 bg-white bg-opacity-50 backdrop-blur-xl backdrop-saturate-150 backdrop-opacity-80  shadow-sm md:p-8 p-4 rounded-3xl z-30">
        <li className="flex-col gap-20">
          <div className="flex gap-3 items-center">
            <div className="flex w-6 h-6 justify-center items-center bg-blue-500 rounded-full">
              <Icon
                icon="mdi:shield-person"
                width="1em"
                height="1em"
                style={{ color: "white" }}
              />
            </div>
            <h3 className="text-lg">Squareboat Solutions Pvt Ltd</h3>
          </div>
          <div className=" border-l border-gray-400 px-6 mx-3 my-1 flex flex-col gap-3">
            <p className="text-sm text-gray-400 flex items-center gap-3">
              May 2024 - Present{" "}
              <span className="h-1 w-1 flex justify-center items-center bg-gray-400 rounded-full"></span>
              {monthCounter} months
            </p>
            <div className="md:text-base text-sm text-gray-500">
              <span className=" flex items-center gap-1">
                <Icon
                  icon="solar:medal-star-bold"
                  color={"#fca311"}
                  width="1em"
                  height="1em"
                />{" "}
                Project 1 : Tofler
              </span>
              <p className="mb-2 text-sm">
                Tech stack : Html , SASS/SCSS , JavaScript.
              </p>
              <p className="text-gray-400 text-sm">
                Description : Developed the UI for the Tofler project using core
                HTML, Sass/SCSS, and JavaScript, emphasizing high reusability.
                Achieved a minimal CSS bundle size of just 10 KB, significantly
                enhancing performance and load times. Leveraged best practices
                to create a fast and efficient user experience. Delivered a
                visually appealing and responsive interface, meeting project
                goals effectively.
              </p>
            </div>

            <div className="md:text-base text-sm text-gray-500 mt-2">
              <span className=" flex items-center gap-1">
                <Icon
                  icon="solar:medal-star-bold"
                  color={"#fca311"}
                  width="1em"
                  height="1em"
                />{" "}
                Project 2 : GrayPorter
              </span>
              <p className="mb-2 text-sm">
                Tech stack : Html , SASS/SCSS , JavaScript.
              </p>
              <p className="text-gray-400 text-sm">
                Description : Designed and developed the home page and main
                product page for Grayporter using HTML, Sass/SCSS, and
                JavaScript. Implemented a fully responsive layout, ensuring
                optimal user experience across devices. Delivered a visually
                appealing and functional interface that aligns with project
                objectives.
              </p>
            </div>

            <div className="md:text-base text-sm text-gray-500 mt-2">
              <span className=" flex items-center gap-1">
                <Icon
                  icon="solar:medal-star-bold"
                  color={"#fca311"}
                  width="1em"
                  height="1em"
                />{" "}
                Project 3 : Qyubic
              </span>
              <p className="mb-2 text-sm">
                Tech stack : Next js , Tailwind CSS , Performance optimisation.
              </p>
              <p className="text-gray-400 text-sm">
                Description : Significantly optimized the project&apos;s
                performance, achieving a 2.5x improvement on desktop and a 6x
                increase on mobile by addressing and preventing Cumulative
                Layout Shift (CLS) , LCP issues.
              </p>
            </div>
          </div>
        </li>
        <li className="flex-col gap-20">
          <div className="flex gap-3 items-center">
            <div className="flex w-6 h-6 justify-center items-center text-white bg-blue-500 rounded-full">
              <Icon icon="mdi:shield-person" width="1em" height="1em" />
            </div>
            <h3 className="text-lg">JP Funware Pvt Ltd</h3>
          </div>
          <div className=" border-l border-gray-400 px-6 mx-3 my-1 flex flex-col gap-3">
            <p className="text-sm text-gray-400 flex items-center gap-3">
              June 2023 - May 2024{" "}
              <span className="h-1 w-1 flex justify-center items-center bg-gray-400 rounded-full"></span>
              1 Year
            </p>
            <p className="text-sm text-gray-400">
              I specialized in developing the frontend part of admin panel for
              my company. I&apos;ve created numerous reports and configured
              various forms to streamline processes. <br /> Additionally,
              I&apos;ve implemented a permission flow system, allowing precise
              control over which features are accessible to users. <br />{" "}
              Ensuring accessibility, I&apos;ve made the admin panel mobile
              responsive. With a focus on clean code, I prioritize user
              experience and efficient functionality.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExperienceComp;
