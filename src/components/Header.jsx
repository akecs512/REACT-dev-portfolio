import Typewriter from "typewriter-effect";

function Header() {
  return (
    <div
      className="hero min-h-screen"
      style={
        {backgroundImage: "(url(/images/purplehex.jpeg)"}}
    
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <Typewriter
            options={{
              strings: ["I am a developer", "I am a creator"],
              autoStart: true,
              loop: true,
            }}
          />

          <div>
            <div>
              <div className="icons-list h-30 p-1 flex">
                <div>
                  <img
                    className="flex h-20 p-1"
                    src="/src/assets/images/contact/LinkedinLogo.png"
                    alt="LinkedIn"
                  />
                </div>
                <div>
                  <img
                    className="flex h-20 p-1"
                    src="/src/assets/images/contact/githubLogo.png"
                    alt="github"
                  />
                </div>
                <div>
                  <img
                    className="flex h-20 p-1"
                    src="/src/assets/images/contact/emailicon.png"
                    alt="email"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
