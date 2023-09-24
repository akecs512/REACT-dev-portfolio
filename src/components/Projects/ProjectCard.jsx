function ProjectCard({ title, subtitle, images, reverse = false }) {
  const { icons, screenshot, screenshotAlt } = images;
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="card w-96 h-50 bg-base-100">
        <div className="card-body">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col items-center">
              <h2 className="card-title">{title}</h2>
              <p>{subtitle}</p>
            </div>
            <div className="icons-list h-10 p-1 flex">
              {icons.map((icon, index) => (
                <img
                  className="h-10 p-1"
                  src={icon.path}
                  alt={icon.alt}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="card-actions p-6 justify-end">
            <button className="btn btn-primary bg-bitter">Link</button>
            <button className="btn btn-primary bg-bitter">Repo</button>
          </div>
        </div>
      </div>

      <img
        className="card w-96 h-50 bg-base-100 object-cover"
        src={screenshot}
        alt={screenshotAlt}
      />
    </div>
  );
}

export default ProjectCard;
