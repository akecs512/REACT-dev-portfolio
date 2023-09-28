function Footer () {
  return (
    <>
      <footer className="footer mt-16 items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
         <p className="text-2xl font-bold pl-4">Contact Me</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className="flex items-center h-10">
            <div>
              <img
                className="footer-icon"
                src="src/assets/images/phoneIcon.png"
                alt="phone"
              />
            </div>
            <div>
              <img
                className="footer-icon"
                src="/src/assets/images/contact/emailicon.png"
                alt="email"
              />
            </div>
            <div>
              <img
                className="footer-icon"
                src="/src/assets/images/contact/LinkedinLogo.png"
                alt="LinkedIn"
              />
            </div>

            <div  >
              <img
                className="footer-icon"
                src="public/githubLogo.png"
                alt="github"
              />
            </div>
          </div>
        </nav>
      </footer>
    </>
  );}

export default Footer;
