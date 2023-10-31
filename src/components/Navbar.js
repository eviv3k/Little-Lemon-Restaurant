import { useState } from "react";
import Navigation from "./Navigation";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <header id="top-header" className="container">
      <nav>
        <Navigation device="desktop" />
        {/* <nav className="burger">
        <img
          src={require("../assets/nav-logo.png")}
          alt="Little Lemon logo"
          className="nav-image"
        ></img>

        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </nav>
      <Navigation device="desktop" />
      {navbarOpen ? <Navigation device="mobile" /> : ""} */}
      </nav>
    </header>
  );
}
