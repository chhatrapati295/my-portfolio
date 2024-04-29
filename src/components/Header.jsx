const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 px-2 py-4 flex justify-between w-11/12 m-auto items-center  backdrop-filter md:backdrop-blur-sm backdrop-blur-xl ">
      <a href="/" className="md:text-gray-700 logo md:text-xl text-2xl">
        Chhatrapati.dev
      </a>
      <ul className="md:hidden md:gap-12 gap-4 items-center md:text-sm text-xs hidden">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Projects</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
      <div className="contact_icons">
        <a href="https://www.linkedin.com/in/chhatrapati8279/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/chhatrapati295">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
