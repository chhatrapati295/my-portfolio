import { memo } from "react";

const Header = memo(() => {
  return (
    <header className="fixed top-0 left-0 right-0 md:px-0 px-6 py-4 flex justify-between md:w-11/12 w-full m-auto items-center backdrop-filter md:backdrop-blur-sm backdrop-blur-xl z-40">
      <a
        href="/"
        className="text-[#3f3f41] logo md:text-[1.3rem] text-xl"
        aria-label="Chhatrapati.dev - Home"
      >
        Chhatrapati.dev
      </a>
      <nav
        className="md:hidden md:gap-12 gap-4 items-center md:text-sm text-xs hidden"
        role="navigation"
      >
        <ul className="flex gap-4">
          <li>
            <a href="#home" className="hover:text-blue-600 cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 cursor-pointer">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="contact_icons"
        role="group"
        aria-label="Social media links"
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/chhatrapati8279/"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          target="_blank"
          href="https://github.com/chhatrapati295"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
