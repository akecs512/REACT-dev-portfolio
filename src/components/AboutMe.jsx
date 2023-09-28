function AboutMe() {
  return (
    <>
    <h1>About Me</h1>
      <div className="card my-10 lg:card-side bg-base-100">
        <figure>
          <img
            className="meImage "
            src="/src/assets/images/meImage.jpeg"
            alt="Me Image"
          />
        </figure>
        <div className="card-body flex flex-col justify-center">
          {/* <h2 className="card-title">New album is released!</h2> */}
          <p>
            {" "}
            Computers and art have always had significant influences on me.
            After completing my Bachelors in Visual Arts with an emphasis in art
            history and criticism, I decided to combine my interests by taking
            courses in graphic arts, and recently decided to take my computer
            skills to the next level by learning software development. I am
            advancing my knowledge and experience in computer coding through a
            University of Texas bootcamp.
          </p>
        </div>
      </div>
  
    </>
  );
}

export default AboutMe;
