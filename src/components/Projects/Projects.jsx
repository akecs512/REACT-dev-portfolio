import ProjectCard from "./ProjectCard";
import { travelogueImages, wodImages } from "../../lib/content/projectItems";

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

      {/* Tech Blog Text Card */}
      <div className="card w-96 h-50 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Tech-Blog Project</h2>
          <p>MVC Application</p>
          <figure>
            <img
              className="h-10 p-1"
              src="/src/assets/images/JSLogo.png"
              alt="JS"
            />
            <img
              className="h-10 p-1"
              src="/src/assets/images/handlebarsLogo.png"
              alt="handlebars"
            />
            <img
              className="h-10 p-1"
              src="/src/assets/images/nodejsLogo.png"
              alt="nodejs"
            />
            <img
              className="h-10 p-1"
              src="/src/assets/images/mysqlLogo.jpg"
              alt="mysql"
            />
            <img
              className="h-10 p-1"
              src="/src/assets/images/sequelizeLogo.png"
              alt="Sequelize"
            />
          </figure>
          <div className="card-actions p-4 justify-end">
            <button className="btn btn-primary bg-bitter">Link</button>
            <button className="btn btn-primary bg-bitter">Repo</button>
          </div>
        </div>
      </div>
      {/* Tech Blog Image Card */}
      <div className="card w-96 h-50 bg-base-100">
        <figure>
          <img
            className="h-50 m-8 object-cover"
            src="/src/assets/images/techblog01.png"
            alt="tech-blog"
          />
        </figure>
      </div>
    </div>
  );
}

export default Projects;
