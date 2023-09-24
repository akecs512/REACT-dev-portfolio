import ProjectCard from "./ProjectCard";
import {
  techblogImages,
  travelogueItems,
  wodImages,
} from "../../lib/content/projectItems";

function Projects() {
  return (
    <>
      <h1 className="underline-offset-8">
        Featured Projects
      </h1>
      <div className="container mx-auto">
        <ProjectCard
          title="Travelogue Application"
          subtitle="Interactive Full-Stack Application"
          items={travelogueItems}
        />
        <ProjectCard
          title="Wheels of Date Night Application"
          subtitle="Node.js Application"
          items={wodImages}
          reverse
        />
        <ProjectCard
          title="Tech-Blog Application"
          subtitle="MVC Application"
          items={techblogImages}
        />
      </div>
    </>
  );
}

export default Projects;
