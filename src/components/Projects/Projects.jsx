import ProjectCard from "./ProjectCard";
import { techblogImages, travelogueImages, wodImages } from "../../lib/content/projectItems";

function Projects() {
  return (
    <div className="container mx-auto">
      <ProjectCard
        title="Travelogue Application"
        subtitle="Interactive Full-Stack Application"
        images={travelogueImages}
      />
      <ProjectCard
        title="Wheels of Date Night Application"
        subtitle="Node.js Application"
        images={wodImages}
        reverse
      />
      <ProjectCard 
        title="Tech-Blog Application"
        subtitle="Node.js Application"
        images={techblogImages}
      />
    </div>
  )
}


export default Projects;
