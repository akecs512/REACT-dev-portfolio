function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded" id="contact">
      <nav className="grid grid-flow-col gap-2">
        <div className="p-1">
          <img
            className="h-10 p-1"
            src="/src/assets/images/phoneIcon.png"
            alt="phone icon"
          />
          <a className="link link-hover">Phone</a>
        </div>
        <div className="p-1">
          <img
            className="h-10 "
            src="/src/assets/images/emailIcon.png"
            alt="email icon"
          />
          <a className="link link-hover">Email</a>
        </div>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <div className="p-1">
            <img
              className="h-10 p-1"
              src="/src/assets/images/LinkedinLogo.png"
              alt="phone icon"
            />
          </div>
          <div className="p-1">
            <img
              className="h-10 p-1"
              src="/src/assets/images/githubLogo.png"
              alt="phone icon"
            />
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
