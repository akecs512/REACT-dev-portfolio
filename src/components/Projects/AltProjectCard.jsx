function AltProjectCard ({ title, items }) {
  const { screenshot, screenshotAlt, pageLink, repoLink } = items;

  return (
    <>
      
      <div className="card flex bg-base-100 p-2">
        <figure>
          <img src={screenshot} alt={screenshotAlt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}!</h2>
          <p>
            "- Interactive Full-Stack Application made made in JavaScript\n -
            Interactive application that travelers log into to save
            destinations, dates, and notes about their travels.\n -Collaborative
            poject."
          </p>
          <div className="card-actions p-6 mt-2 justify-end">
            <a href={pageLink} className="btn btn-primary bg-bitter">
              Link
            </a>
            <a href={repoLink} className="btn btn-primary bg-bitter">
              Repo
            </a>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">JavaScript</div>
            <div className="badge badge-outline">Node.js</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AltProjectCard;
