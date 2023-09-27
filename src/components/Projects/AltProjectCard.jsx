function AltProjectCard({ title, subtitle, items, }) {
  const { icons, screenshot, screenshotAlt, pageLink, repoLink, tags, bodyText} = items;
  return (

<div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-image" src={screenshot} alt={screenshotAlt}></div>

  <div className="card-body">
    <h2 className="card-title">{title}</h2>
     <p>{bodyText}</p>
    <div className="card-actions justify-end">
         <a href={pageLink} className="btn btn-primary bg-bitter">Live</a>
            <a href={repoLink} className="btn btn-primary bg-bitter">Repo</a>
            </div>
            <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    )
}
export default AltProjectCard;