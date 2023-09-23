import "../styles/Section.css";

const styles = {
  sectionStyles: {
    background: "orange",
  },
};

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
      <p>hello</p>
    </section>
  );
}

export default Section;
