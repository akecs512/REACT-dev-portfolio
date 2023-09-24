function Section({ title, subtitle }) {
  return (
    <section>
      <h2>{title}</h2>
      <p className="text-3xl font-bold text-antique bg-bitter">{subtitle}</p>
      <p className="text-3xl font-bold text-antique bg-lilac">{subtitle}</p>
      <p className="text-3xl font-bold text-antique bg-antique">{subtitle}</p>
      <p className="text-3xl font-bold text-antique bg-russian">{subtitle}</p>
    </section>
  );
}

export default Section;
