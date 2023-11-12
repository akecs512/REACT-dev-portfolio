import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(/images/purplehex.jpeg" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex flex-col">
          <h1 className="header-title mb-5 text-5xl font-bold ">Hello there</h1>
          <Typewriter
            options={{
              strings: ["I am a developer", "I am a creator"],
              autoStart: true,
              loop: true,
            }}
          />

          <div>
            <div>
              <div className="icons-list justify-center h-30 p-1 flex">
                <div>
                  <a href="https://www.linkedin.com/in/akecs/">
                    <img
                      className="flex h-20 p-1"
                      src="/images/contact/LinkedinLogo.png"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/akecs512">
                    <img
                      className="flex h-20 p-1"
                      src="/images/contact/githubLogo.png"
                      alt="github"
                    />
                  </a>
                </div>
                <div>
                  <a href="mailto:akecs619@yahoo.com">
                    <img
                      className="flex h-20 p-1"
                      src="/images/contact/emailIcon.png"
                      alt="email"
                    />
                  </a>
                </div>
              </div>
              <div className="text-2xl text-bold pt-4">
                Check out my feature projects{" "}
                <span className="underline text-primary">
                  <Link to="/Projects">here</Link>
                </span>
              </div>
              <div className="text-2xl text-bold pt-4">
                Check out my resume{" "}
                <span className="underline text-primary">
                  <Link to="/Resume">here</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
