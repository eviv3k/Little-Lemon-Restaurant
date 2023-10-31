import {Link} from 'react-router-dom';
export default function Heading() {
    return (
      <article id="article-background">
        <div className="call-to-action">
          <section className="hero-text">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, located on Maldove
              Street in Chicago, Illionis. We focus on traditional recipes
              served with a modern twist.
            </p>
            <br></br>
            <Link className="action-button" to="/reservations">
              Reserve a Table
            </Link>
          </section>
          <section className="hero-image">
            <img
              src={require("../../../assets/food/food1.jpeg")}
              alt="Little Lemon restaurant cuisine"
            ></img>
          </section>
        </div>
      </article>
    );
}