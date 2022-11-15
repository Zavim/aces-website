import React from "react";
import Dropdown from "./Dropdown";
import acesLogo from "../images/ACES-logo-transparent-no-words.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={acesLogo} class="logo" alt="ACES logo" />
      </a>
      <div className="nav-link-container">
        <a href="/">
          <h3>About Us</h3>
        </a>
      </div>
      <Dropdown
        label={<h3>Programs</h3>}
        content={["Summer of Innovation", "Community Service"]}
        links={["#", "#"]}
      />
      <Dropdown
        label={<h3>Media</h3>}
        content={["Videos", "Photos", "Newspaper"]}
        links={["/#", "/#", "/#"]}
      />
      <Dropdown label={<h3>Donate</h3>} content={["Sponsors"]} links={["#"]} />
    </nav>
  );
}
