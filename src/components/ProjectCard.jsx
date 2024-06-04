import PropTypes from "prop-types";

const ProjectCard = ({ projectData }) => {
  console.log(projectData);
  return (
    <div className=" p-6 rounded-md flex flex-col gap-2 md:w-[50%] w-10/12 bg-white ">
      <img
        src={projectData?.imgSrc}
        className=" w-full   bg-white mb-4 border-b border-gray-200 pb-8 rounded-tl-sm rounded-tr-sm"
        alt=""
      />
      <h2 className="text-xl font-semibold">{projectData?.title}</h2>
      <div className="flex gap-1 items-center flex-wrap ">
        {projectData?.techStack?.map((item, i) => {
          return (
            <small
              key={i}
              className="py-1 px-2 font-medium text-[0.6rem] text-gray-600 rounded-md bg-purple-100 "
            >
              {item}
            </small>
          );
        })}
      </div>
      <p className="text-xs py-4 text-gray-600">{projectData?.summary}</p>
      <div className="flex gap-3 justify-end">
        <a
          href={projectData?.repoUrl}
          title={!projectData?.repoUrl && "Code is not available"}
          rel="noreferrer"
          target="_blank"
          className={
            `py-1 px-4 text-[0.6rem] outline-none rounded-md bg-gray-200 font-medium hover:bg-gray-100 transition-all duration-150 flex items-center gap-2 ` +
            `${!projectData?.repoUrl && "cursor-not-allowed"}`
          }
        >
          Code <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href={projectData?.hostUrl}
          title={!projectData?.hostUrl && "Preview is not available"}
          className={
            `py-1 px-4 text-[0.6rem] outline-none rounded-md bg-gray-200 font-medium hover:bg-gray-100 transition-all duration-150 flex items-center gap-2 ` +
            `${!projectData?.hostUrl && "cursor-not-allowed"}`
          }
        >
          Preview <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  projectData: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired,
    hostUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
