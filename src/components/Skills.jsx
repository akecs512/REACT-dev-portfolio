import { skillIcons } from "../lib/content/skillIcons.js";
import SkillsCard from "/src/components/SkillsCard.jsx";

function Skills() {
  return (
    <>
      <h1 className="my-10" id="skills">
        Skills
      </h1>
      <div className="container mx-auto">
        <div>
          <h3 className="text-2xl text-antique py-4 leading-loose">
            These are some major languages, platforms, and tools I have
            experience with:
          </h3>
        </div>
        {/* Languages */}
        <div>
          <h3>Languages & Databases</h3>
          </div>
          <div className="icons-list h-30 p-1 flex">         
        <div>
          <SkillsCard items={skillIcons} />
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
