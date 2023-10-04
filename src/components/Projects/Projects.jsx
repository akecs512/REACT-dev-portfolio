import {
  techblogItems,
  travelogueItems,
  wodItems,
  weatherItems,
  projectItems,
  noteItems
} from "../../lib/content/projectItems";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <h1 className="mb-4" id="projects">
        Projects
      </h1>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">

        {/* <div className="project-card"> */}
          <ProjectCard
            title="Travelogue Application"
            subtitle="Interactive Full-Stack Application"
            items={travelogueItems}
          />
        {/* </div> */}
        {/* <div className=""> */}
          <ProjectCard
            title="Wheels of Date Night Application"
            subtitle="Node.js Application"
            items={wodItems}
          />
        {/* </div>  */}
        {/* <div className=""> */}
          <ProjectCard title="Coming Soon!" subtitle="" items={projectItems} />
        {/* </div> */}

        {/* <div className=""> */}
          <ProjectCard
            title="Tech-Blog Application"
            subtitle="A CMS-style blog site"
            items={techblogItems}
          />
        {/* </div> */}

        {/* <div className=""> */}
          <ProjectCard
            title="Weather Dashboard Application"
            subtitle="Server-Side API Application"
            items={weatherItems}
          />
        {/* </div> */}
        {/* <div className=""> */}
          <ProjectCard
            title="Note Taker"
            subtitle="Express.js Application"
            items={noteItems}
          />
        {/* </div> */}
      </div>
    </>
  );
}

export default Projects;
