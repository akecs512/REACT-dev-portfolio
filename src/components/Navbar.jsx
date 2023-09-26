const styles = {
  navbarStyle: {
    background: "purple",
    justifyContent: "flex-end",
  },
};
function Navbar() {
  return (
    <div className="navbar bg-primary h-400">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Adrienne Kecskes</a>
      </div>
      <div className="navbar-end px-4">
        <ul className="flex gap-4">
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="src/assets/_Adrienne Kecskes Resume 2023.pdf">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
