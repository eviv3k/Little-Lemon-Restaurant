export default function About() {
  return (
    <div id="about-us">
      <article className="about-us container">
        <section className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p className="about-subtext">
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </p>
        </section>

        <section className="double-image">
          <img
            className="about-1"
            src={require("../../../assets/food/food3.jpeg")}
            alt="Little Lemon restaurant cuisine 1"
          ></img>
          <img
            className="about-2"
            src={require("../../../assets/food/food2.jpeg")}
            alt="Little Lemon restaurant cuisine 2"
          ></img>
        </section>
      </article>
    </div>
  );
}
