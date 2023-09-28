function SkillsCard ({items}) {
    const {icons} = items;

    return (
      <>
        <div>
          {icons.map((icon, index) => (
            <img
              className="h-10 p-1"
              src={icon.path}
              alt={icon.alt}
              key={index}
            />
          ))}
        </div>
      </>
    );




}
export default SkillsCard;