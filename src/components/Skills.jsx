import {
  skillIcons,
  frameworkIcons,
  toolsIcons,
} from "../lib/content/skillIcons.js";
import SkillsCard from "/src/components/SkillsCard.jsx";

function Skills() {
  return (
    <>
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
}

export default Skills;

{
  /* <SkillsItems icons={icons} />
      <h1 className="my-10" id="skills">
        Skills
      </h1>
      <div>
        <div className="container mx-auto">
          <div>
            <h3 className="text-2xl text-antique py-4 leading-loose">
              These are some major languages, platforms, and tools I have
              experience with:
            </h3>
          </div>
          {/* Languages */
}
{
  /* <figure>
            <img
              className="flex h-20 p-1"
              src="src/assets/images/icons/skills/html.png"
              alt="html"
            />
            <figcaption className="text-lg">HTML</figcaption>
          </figure>
        </div> */
}
//       {/* </div> */} */
//     </>
//   );
// }

// export default Skills;
