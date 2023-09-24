

const styles = {
  navbarStyle: {
    background: "purple",
    justifyContent: "flex-end",
  },
};
function Navbar() {
  return (
    <div className="navbar bg-russian">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Adrienne Kecskes</a>
      </div>
      <div className="navbar-end px-4">
        <ul className="flex gap-4">
          <li>About Me</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
