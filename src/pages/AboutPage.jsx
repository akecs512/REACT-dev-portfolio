import {
  skillIcons,
  frameworkIcons,
  toolsIcons,
} from "../lib/content/skillIcons.js";
import SkillsCard from "/src/components/SkillsCard.jsx";

export const AboutPage = () => {
  return (
    <>
      <h1>About Me</h1>
      <div className="about-card flex my-10 lg:card-side bg-base-100">
      <figure className="about-image">
          <img src="/images/meImage.jpeg" alt="Me Image" />
          </figure>
   
        <div className="about-card-body flex flex-col justify-center pr-50px">
          {/* <h2 className="card-title">New album is released!</h2> */}
          <p>
            {" "}
            I am a tech-savvy, art-loving, design-obsessed. go-getter who doesn’t like to not know the answer to a question. If you want to know what I mean by any of these very generic and vague hyphenated terms, ask me in the phone and/or video interview (hint hint). As for my skills, I just finished up a full-stack coding bootcamp from the University of Texas,Austin, so my CSS, HTML, and Javascript knowledge is up to date and as fresh was a baby’s bum! I also have a BA in Visual Arts:Art History/ Criticism from UCSD that is a couple decades old, but I still consider my passion for the arts as vibrant as a Henri Matisse painting. And somewhere in between by BA and bootcamp, I also took classes in graphic design, but alas was not able to complete the program for a certificate, but learned a lot about design and adobe creative cloud. 
            I have an eclectic range of skills and passions that I strive to constantly improve on. I am very friendly and get along with just about everyone.

          </p>
        </div>
      </div>
      <h1 className="my-10" id="skills">
        Skills
      </h1>
      <div className="container mx-auto">
        <div>
          <h4 className="skills-title">
            These are some major languages, platforms, and tools I have
            experience with:
          </h4>
        </div>
        {/* Languages */}
        <div>
          <h3>Languages</h3>
        </div>
        <div className="flex flex-col justify justify-center items-center p-2">
          <div className="icons-list pb-4">
            <SkillsCard items={skillIcons} />
          </div>
          {/* Frameworks */}
          <div>
            <h3>Frameworks & Libraries</h3>
          </div>
          <div className="icons-list pt-1 pb-4">
            <SkillsCard items={frameworkIcons} />
          </div>
          {/* Tools */}
          <div>
            <h3>Tools & Databases</h3>
          </div>
          <div className="icons-list">
            <SkillsCard items={toolsIcons} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
