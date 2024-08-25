const Skills = () => {
  return (
    <div
      className="lowerBody flex flex-col z-30"
    >
      <span className="font-medium uppercase md:hidden mt-20">* Skills *</span>
      {/* <p>Tech Stack</p> */}
      <ul className="flex-wrap flex md:flex xl:flex-nowrap md:flex-wrap w-11/12 xl:gap-0 md:gap-x-20 gap-12 md:justify-around justify-center ">
        <li title="html">
          <img className="" src="./assets/Images/html.png" alt="" />
        </li>
        <li title="css">
          <img className="" src="./assets/Images/css-3.png" alt="" />
        </li>
        <li title="javascript">
          <img
            className=" rounded-sm"
            src="./assets/Svg/javaScript.svg"
            alt=""
          />
        </li>
        <li title="typescript">
          <img
            className=" rounded-sm"
            src="./assets/Images/TsLogo.jpeg"
            alt=""
          />
        </li>
        <li title="next.js">
          <img className="" src="./assets/Images/nextjs.svg" alt="" />
        </li>
        <li title="react">
          <img className=" react" src="./assets/Svg/react.svg" alt="" />
        </li>
        <li title="tailwind-css">
          <img className="" src="./assets/Svg/tailwind.svg" alt="" />
        </li>
        <li title="bootstrap">
          <img className="" src="./assets/Images/bootstrap.png" alt="" />
        </li>
        <li title="ant design">
          <img className="" src="./assets/Svg/antd.svg" alt="" />
        </li>
        <li title="scss/sass">
          <img className="" src="./assets/Svg/sass.svg" alt="" />
        </li>
        <li title="material ui">
          <img className="" src="./assets/Svg/mui.svg" alt="" />
        </li>
        <li title="git">
          <img className="" src="./assets/Images/git.png" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
