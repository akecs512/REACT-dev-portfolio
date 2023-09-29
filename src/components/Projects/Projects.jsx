import ProjectCard from "./ProjectCard";
import {
  techblogImages,
  travelogueItems,
  wodImages,
} from "../../lib/content/projectItems";
import AltProjectCard from "./AltProjectCard";

function Projects() {
  return (
    <>
      <h1 className="mb-4" id="projects">
        Projects
      </h1>

      <div className="grid grid-cols-3 auto-rows-max gap-4 py-6 px-10">
        <div className="col">
          <AltProjectCard
            title="Travelogue Application"
            subtitle="Interactive Full-Stack Application"
            items={travelogueItems}
          />
        </div>
        <div className="col">
          <AltProjectCard
            title="Night Application"
            subtitle="Node.js Application"
            items={wodImages}
          />
        </div>
        <div className="col">
          <AltProjectCard
            title="Tech-Blog Application"
            subtitle="MVC Application"
            items={techblogImages}
          />
        </div>
        <div className="col">
          <AltProjectCard
            title="Travelogue Application"
            subtitle="Interactive Full-Stack Application"
            items={travelogueItems}
          />
        </div>
        <div className="col">
          <AltProjectCard
            title="Wheels of Date Night Application"
            subtitle="Node.js Application"
            items={wodImages}
          />
        </div>
        <div className="col">
          <AltProjectCard
            title="Tech-Blog Application"
            subtitle="MVC Application"
            items={techblogImages}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
