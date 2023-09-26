function Skills() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="underline-offset-8 pb-10" id="skills">
          Skills
        </h1>
        <div>
          <h4 className="text-lg text-antique py-4 leading-loose">
            These are some major languages, tools, and platforms I have
            experience with:
          </h4>
        </div>
        {/* Languages */}
        <div>
          <h3>Languages & Databases</h3>
          <div className="icons-list h-30 p-1 flex">
            <div>
              <img
                className="flex h-20 p-1"
                src="src/assets/images/icons/skills/html.png"
                alt="html"
              />
              <p>HTML</p>
            </div>

            <div>
              <img
                className="flex h-20 p-1"
                src="src/assets/images/icons/skills/css.png"
                alt="CSS"
              />
              <p>CSS</p>
            </div>

            <div>
              <img
                className="flex h-20 p-1"
                src="src/assets/images/icons/skills/js.png"
                alt="JavaScript"
              />
              <p>JavaScript</p>
            </div>

            <div>
              <img
                className="flex h-20 p-1"
                src="/src/assets/images/mysqlLogo.jpg"
                alt="MySQL"
              />
              <p>MySQL</p>
            </div>
            <div>
              <img
                className="flex h-20 p-1"
                src="src/assets/images/icons/skills/mongo-db.png"
                alt="MongoDB"
              />
              <p>MongoDB</p>
            </div>
          </div>
          {/* Frameworks */}
          <div>
            <h3>Frameworks & Technologies</h3>
            <div className="icons-list h-30 p-1 flex">
              <div>
                <img
                  className="flex h-20 p-1"
                  src="src/assets/images/icons/skills/react.png"
                  alt="React"
                />
                <p>React</p>
              </div>
              <div>
                <img
                  className="flex h-20 p-1"
                  src="src/assets/images/icons/skills/nodejswhite.png"
                  alt="Nodejs"
                />
                <p>Node.js</p>
              </div>
              <div>
                <img
                  className="flex h-20 p-1"
                  src="src/assets/images/handlebarsLogo.png"
                  alt="Handlebarsjs"
                />
                <p>Handlebars.js</p>
              </div>
            </div>
            {/* Tools */}
            <div>
              <h3>Tools</h3>
              <div className="icons-list h-30 p-1 flex">
                <div>
                  <img
                    className="flex h-20 p-1"
                    src="src/assets/images/icons/skills/illustrator.png"
                    alt="Adobe Illustrator"
                  />
                  <p>Adobe Illustrator</p>
                </div>
                <div>
                  <img
                    className="flex h-20 p-1"
                    src="src/assets/images/icons/skills/insomnia.png"
                    alt="Insomnia"
                  />
                  <p>Insomnia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
