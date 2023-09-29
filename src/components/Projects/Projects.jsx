import {
  techblogItems,
  travelogueItems,
  wodItems,
} from "../../lib/content/projectItems";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <h1 className="mb-4" id="projects">
        Projects
      </h1>

      <div className="grid grid-cols-3 auto-rows-max gap-4 py-6 px-10">
        <div className="col">
          <ProjectCard
            title="Travelogue Application"
            subtitle="Interactive Full-Stack Application"
            items={travelogueItems}
          />
        </div>
        <div className="col">
          <ProjectCard
            title="Wheels of Date Night Application"
            subtitle="Node.js Application"
            items={wodItems}
          />
        </div>
        <div className="col">
          <ProjectCard
            title="Tech-Blog Application"
            subtitle="MVC Application"
            items={techblogItems}
          />
        </div>
        <div className="col">
          <ProjectCard
            title="Travelogue Application"
            subtitle="Interactive Full-Stack Application"
            items={travelogueItems}
          />
        </div>
        <div className="col">
          <ProjectCard
            title="Wheels of Date Night Application"
            subtitle="Node.js Application"
            items={wodItems}
          />
        </div>
        <div className="col">
          <ProjectCard
            title="Tech-Blog Application"
            subtitle="MVC Application"
            items={techblogItems}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
