import { Icon } from "@iconify/react/dist/iconify.js";

const ExperienceComp = () => {
  const startDate = new Date("2024-05-01"); // Start date
  const currentDate = new Date();

  // Calculate total months of experience
  const totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  // Convert to years and months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  // Format the experience string
  const experienceString =
    years > 0
      ? `${years} ${years === 1 ? "Year" : "Years"}${
          months > 0 ? ` ${months} ${months === 1 ? "Month" : "Months"}` : ""
        }`
      : `${months} ${months === 1 ? "Month" : "Months"}`;

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
              {experienceString}
            </p>
            <div className="md:text-sm text-sm text-gray-500">
              <span className=" flex items-center gap-1 font-medium">
                {/* <Icon
                  icon="solar:medal-star-bold"
                  color={"#fca311"}
                  width="1em"
                  height="1em"
                />{" "} */}
                <a
                  href="https://www.tofler.in/"
                  className="flex items-center gap-1"
                  target="_blank"
                >
                  Project 1 : Tofler{" "}
                  <Icon
                    icon="heroicons-solid:external-link"
                    className="text-blue-500"
                    width="1em"
                    height="1em"
                  />
                </a>
              </span>
              <p className="mb-2 text-sm text-gray-400">
                Tech stack : Html , SASS/SCSS , JavaScript.
              </p>
              <p className="text-gray-400 text-sm">
                Description : Developed the UI for the{" "}
                <span className="">Tofler project from scratch</span> using core
                HTML, Sass/SCSS, and JavaScript, emphasizing high reusability.
                <span className="">
                  {" "}
                  Achieved a minimal CSS bundle size of just 10 KB
                </span>
                , significantly enhancing performance and load times. Leveraged
                best practices to create a fast and efficient user experience.
                Delivered a visually appealing and responsive interface, meeting
                project goals effectively.
              </p>
            </div>

            <div className="md:text-sm text-sm text-gray-500 mt-2">
              <span className=" flex items-center gap-1 font-medium">
                {/* <Icon
                  icon="solar:medal-star-bold"
                  color={"#fca311"}
                  width="1em"
                  height="1em"
                />{" "} */}
                <a
                  href="https://www.grayporter.com/home/us/"
                  className="flex items-center gap-1"
                  target="_blank"
                >
                  Project 2 : GrayPorter{" "}
                  <Icon
                    icon="heroicons-solid:external-link"
                    className="text-blue-500"
                    width="1em"
                    height="1em"
                  />
                </a>
              </span>
              <p className="mb-2 text-sm text-gray-400">
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

            <div className="md:text-sm text-sm text-gray-500 mt-2">
              <span className=" flex items-center gap-1 font-medium">
                <a
                  href="https://qyubic.com/uae-en/"
                  className="flex items-center gap-1"
                  target="_blank"
                >
                  Project 3 : Qyubic{" "}
                  <Icon
                    icon="heroicons-solid:external-link"
                    className="text-blue-500"
                    width="1em"
                    height="1em"
                  />
                </a>
              </span>
              <p className="mb-2 text-sm text-gray-400">
                Tech stack : Next js , Tailwind CSS , Performance optimisation.
              </p>
              <p className="text-gray-400 text-sm">
                Description : Significantly optimized the project&apos;s
                performance,{" "}
                <span className="">
                  achieved a 2.5x improvement on desktop and a 6x increase on
                  mobile
                </span>{" "}
                by addressing and preventing Cumulative Layout Shift (CLS) , LCP
                issues.
              </p>
            </div>

            <div className="md:text-sm text-sm text-gray-500 mt-2">
              <span className=" flex items-center gap-1 font-medium">
                <a
                  href="https://acadru.com/"
                  className="flex items-center gap-1"
                  target="_blank"
                >
                  Project 4 : ACadru{" "}
                  <Icon
                    icon="heroicons-solid:external-link"
                    className="text-blue-500"
                    width="1em"
                    height="1em"
                  />
                </a>
              </span>
              <p className="mb-2 text-sm text-gray-400">
                Tech stack : Express handlebars , React.
              </p>
              <p className="text-gray-400 text-sm">
                Description : Optimized ACardru&apos;s blog and project pages
                with SEO strategies like webpage schema (Article, Video, List,
                Organization) and keyword integration. Enhanced UI/UX by adding
                a Table of Contents, author info, and interactive features.
                Improved mobile responsiveness, load times, and organic
                rankings. Utilized tools like Google Search Console. Achieved
                higher engagement, lower bounce rates, and better search
                visibility.
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
