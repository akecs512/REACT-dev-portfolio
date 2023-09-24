function Projects () {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          {/* Travelogue Text Card */}
          <div className="card w-96 h-50 bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Travelogue Project</h2>
              <p>Interactive Full-Stack Application</p>
              <figure className="icons-list h-10 p-1">
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

                {/* Travelogue Image Card */}
              </figure>
              <div className="card-actions p-4 justify-end">
                    <button className="btn btn-primary bg-bitter">Link</button>
                <button className="btn btn-primary bg-bitter">Repo</button>
              </div>
            </div>
          </div>
          <div className="card w-96 h-50 bg-base-100">
            <figure>
              <img
                className="object-cover"
                src="/src/assets/images/Travelogue.png"
                alt="travelogue"
              />
            </figure>
          </div>

          {/* WOD Image Card */}
          <div className="card w-96 h-50 bg-base-100">
            <figure>
              <img
                className="object-cover h-50"
                src="/src/assets/images/WOD.png"
                alt="WOD"
              />
            </figure>
          </div>

          {/* WOD Text Card */}
          <div className="card w-96 h-50 bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Wheels of Date Night Project</h2>
              <p>Node.js Application</p>
              <figure>
                <img
                  className="h-10 p-1"
                  src="/src/assets/images/JSLogo.png"
                  alt="JS"
                />
                <img
                  className="h-10 p-1"
                  src="/src/assets/images/htmlLogo.jpeg"
                  alt="handlebars"
                />
                <img
                  className="h-10 p-1"
                  src="/src/assets/images/cssLogo.jpeg"
                  alt="nodejs"
                />
                <img
                  className="h-10 p-1"
                  src="/src/assets/images/materializeLogo.jpeg"
                  alt="mysql"
                />
                <img
                  className="h-10 p-1"
                  src="/src/assets/images/spoonLogo.png"
                  alt="Sequelize"
                />
                <img
                  className="h-10 p-1"
                  src="/src/assets/images/movieLogo.jpeg"
                  alt="Sequelize"
                />
              </figure>
              <div className="card-actions p-4 justify-end">
                <button className="btn btn-primary  bg-bitter">Link</button>
                <button className="btn btn-primary  bg-bitter">Repo</button>
              </div>
            </div>
          </div>

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
      </div>
    );
    }

    export default Projects;
