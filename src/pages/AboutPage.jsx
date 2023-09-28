import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

export const AboutPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div>
          <AboutMe />
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </>
  );
};
export default AboutPage;
