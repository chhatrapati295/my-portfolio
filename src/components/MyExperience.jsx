import { Icon } from "@iconify/react/dist/iconify.js";
import { EXPERIENCE_DATA } from "../Data.js";

const ExperienceComp = () => {
  const startDate = new Date("2023-06-01");
  const currentDate = new Date();

  // Total experience calculation
  const totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const experienceString =
    years > 0
      ? `${years} ${years === 1 ? "Year" : "Years"}${
          months > 0 ? ` ${months} ${months === 1 ? "Month" : "Months"}` : ""
        }`
      : `${months} ${months === 1 ? "Month" : "Months"}`;

  return (
    <div className="py-10 md:py-16 flex flex-col md:gap-16 gap-8 items-center">
      <h2 className="md:hidden font-medium uppercase">
        * Experience ({experienceString}) *
      </h2>

      <h2 className="text-5xl uppercase md:block hidden font-bold whitespace-nowrap z-30 text-slate-400 animate-pulse opacity-25">
        Experience
      </h2>

      <ul className="md:w-7/12 w-full mx-auto flex flex-col md:gap-14 gap-10 bg-white bg-opacity-50 backdrop-blur-xl backdrop-saturate-150 backdrop-opacity-80 shadow-sm md:p-8 px-4 py-8 rounded-3xl z-30">
        
        {/* GoKwik */}
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

            <h3 className="text-lg">
              GoKwik{" "}
              <span className="text-sm text-gray-400">
                (Software Development Engineer - 1)
              </span>
            </h3>
          </div>

          <div className="border-l border-gray-400 px-6 mx-3 my-1 flex flex-col md:gap-3 gap-6">
            <p className="text-sm text-gray-400 flex items-center flex-wrap gap-x-3">
              Jan 2026 - May 2026
              <span className="h-1 w-1 flex justify-center items-center bg-gray-400 rounded-full"></span>
              Contract
            </p>

            <p className="text-[15px] text-gray-400">
              Tech stack : React.js, Next.js, TypeScript, Redux Toolkit,
              WebSocket, Tailwind CSS, REST APIs
            </p>

            <div className="text-gray-400 text-[15px] flex flex-col gap-3">
              <p>
                Shipped 40+ production tickets across KwikEngage CMS including
                Chat Panel, DIY Bot Builder, AI Chat Summary, Workflow
                Automation, Knowledge Sources and Billing.
              </p>

              <p>
                Built real-time chat system for WhatsApp, Email, Instagram,
                Facebook and Gmail with reactions, emoji picker, auto reconnect
                WebSocket and LinkPreviewCard support.
              </p>

              <p>
                Revamped DIY Bot Builder with drag-and-drop flow system, new
                breakers/actions and Track & Cancel flow improvements.
              </p>

              <p>
                Developed AI Chat Summary feature with AI-driven thread
                compression and bullet-point summaries for faster support
                triaging.
              </p>

              <p>
                Implemented Knowledge Sources / File Upload system for RAG
                ingestion UI along with Shopify prefill and Product Fruits
                onboarding integrations.
              </p>

              <p>
                Resolved multiple critical production issues and optimized
                high-traffic flows using debouncing, rate limiting and event
                listener optimizations.
              </p>
            </div>
          </div>
        </li>

        {/* Squareboat */}
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

            <h3 className="text-lg">
              Squareboat Solutions Pvt Ltd
              <span className="text-sm text-gray-400">
                {" "}
                (Frontend Engineer)
              </span>
            </h3>
          </div>

          <div className="border-l border-gray-400 px-6 mx-3 my-1 flex flex-col md:gap-3 gap-6">
            <p className="text-sm text-gray-400 flex items-center flex-wrap gap-x-3">
              May 2024 - Jan 2026
              <span className="h-1 w-1 flex justify-center items-center bg-gray-400 rounded-full"></span>
              1 Year 8 Months
            </p>

            {EXPERIENCE_DATA?.map((item) => {
              return (
                <div key={item?.id} className="text-base text-gray-500">
                  <span className="flex items-center gap-1 font-medium">
                    <a
                      href={item?.projectUrl}
                      className="flex items-center gap-1 mb-1 md:mb-0 text-lg md:text-base"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Project {item?.id} : {item?.projectName}

                      <Icon
                        icon="heroicons-solid:external-link"
                        className="text-blue-500"
                        width="1em"
                        height="1em"
                      />
                    </a>
                  </span>

                  <p className="mb-2 text-[15px] text-gray-400">
                    Tech stack : {item?.techStack}
                  </p>

                  <p className="text-gray-400 text-[15px]">
                    Description : {item?.description}
                  </p>
                </div>
              );
            })}
          </div>
        </li>

        {/* JP Funware */}
        <li className="flex-col gap-20">
          <div className="flex gap-3 items-center">
            <div className="flex w-6 h-6 justify-center items-center text-white bg-blue-500 rounded-full">
              <Icon icon="mdi:shield-person" width="1em" height="1em" />
            </div>

            <h3 className="text-lg">
              JP Funware Pvt Ltd
              <span className="text-sm text-gray-400">
                {" "}
                (React JS Engineer)
              </span>
            </h3>
          </div>

          <div className="border-l border-gray-400 px-6 mx-3 my-1 flex flex-col">
            <p className="text-sm text-gray-400 flex items-center gap-3">
              June 2023 - May 2024
              <span className="h-1 w-1 flex justify-center items-center bg-gray-400 rounded-full"></span>
              1 Year
            </p>

            <p className="text-[15px] text-gray-400 mt-4 mb-2">
              Tech stack : React.js, Redux Toolkit, React Router, Tailwind CSS,
              REST APIs
            </p>

            <p className="text-[15px] text-gray-400">
              Developed scalable admin panel applications using reusable
              components and Redux Toolkit. Built reports, optimized forms,
              implemented permission-based feature access and ensured mobile
              responsive layouts with focus on clean architecture and user
              experience.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExperienceComp;
