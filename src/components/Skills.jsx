import { memo } from "react";

const Skills = memo(() => {
  const skillsData = [
    { name: "html", src: "./assets/Images/html.png" },
    { name: "css", src: "./assets/Images/css-3.png" },
    { name: "javascript", src: "./assets/Svg/javaScript.svg" },
    { name: "typescript", src: "./assets/Images/TsLogo.jpeg" },
    { name: "next.js", src: "./assets/Images/nextjs.svg" },
    { name: "react", src: "./assets/Svg/react.svg" },
    { name: "tailwind-css", src: "./assets/Svg/tailwind.svg" },
    { name: "bootstrap", src: "./assets/Images/bootstrap.png" },
    { name: "ant design", src: "./assets/Svg/antd.svg" },
    { name: "scss/sass", src: "./assets/Svg/sass.svg" },
    { name: "material ui", src: "./assets/Svg/mui.svg" },
    { name: "git", src: "./assets/Images/git.png" },
  ];

  return (
    <div className="lowerBody flex flex-col z-30">
      <span className="font-medium uppercase md:hidden mt-20">* Skills *</span>
      <ul className="flex-wrap flex md:flex xl:flex-nowrap md:flex-wrap w-11/12 xl:gap-0 md:gap-x-20 gap-12 md:justify-around justify-center">
        {skillsData.map((skill) => (
          <li key={skill.name} title={skill.name}>
            <img
              className={
                skill.name === "react"
                  ? "react"
                  : skill.name === "javascript" || skill.name === "typescript"
                  ? "rounded-sm"
                  : ""
              }
              src={skill.src}
              alt={`${skill.name} logo`}
              loading="lazy"
              width="64"
              height="64"
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

Skills.displayName = "Skills";

export default Skills;
