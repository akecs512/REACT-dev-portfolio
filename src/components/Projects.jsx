function Projects () {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Travelogue Project</h2>
              <p>Interactive Full-Stack Application</p>
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
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Link</button>
                <button className="btn btn-primary">Repo</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="/src/assets/images/Travelogue.png" alt="Shoes" />
            </figure>
          </div>
          <div>Project 2 Image</div>
          <div>Project 2 Text</div>
          <div>Project 3 Text</div>
          <div>Project 3 Image</div>
        </div>
      </div>
    );
    }

    export default Projects;
