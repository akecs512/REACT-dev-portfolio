function ProjectCard({ title, subtitle, images }) {
  const { icons, screenshot, screenshotAlt } = images;
  return (
    <>
      <div className="card w-96 h-50 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{subtitle}</p>
          <figure className="icons-list h-10 p-1">
            {icons.map((icon, index) => (
              <img
                className="h-10 p-1"
                src={icon.path}
                alt={icon.alt}
                key={index}
              />
            ))}
          </figure>
          <div className="card-actions p-4 justify-end">
            <button className="btn btn-primary bg-bitter">Link</button>
            <button className="btn btn-primary bg-bitter">Repo</button>
          </div>
        </div>
      </div>

      <div className="card w-96 h-50 bg-base-100">
        <figure>
          <img className="object-cover" src={screenshot} alt={screenshotAlt} />
        </figure>
      </div>
    </>
  );
}

export default ProjectCard;
