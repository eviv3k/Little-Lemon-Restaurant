import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <>
      <Link to="/">
        <img
          src={require("../assets/nav-logo.png")}
          alt="Little Lemon logo"
          className="nav-image"
        ></img>
      </Link>
      <ul>
        <li>
          <Link className="hover-effect" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover-effect" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover-effect" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="hover-effect" to="/reservations">
            Reservations
          </Link>
        </li>
        <li>
          <Link className="hover-effect" to="/order">
            Order
          </Link>
        </li>
        <li>
          <Link className="hover-effect" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </>
  );
}
