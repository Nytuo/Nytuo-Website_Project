import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleMenuClick = () => setClick(!click);
  const closeMobileView = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">
          <img
            src="./images/logo.png"
            className="logonav"
            title="Logo de Nytuo"
          />
        </a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li className="active">
            <a href="home.html">Accueil</a>
          </li>
          <li>
            <a href="games.html">Jeux</a>
          </li>
          <li>
            <a href="softwares.html">Logiciels</a>
          </li>
          <li>
            <a href="/php/profile.php">Profile</a>
          </li>
          <li>
            <a href="feedback.html">FeedBack</a>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li className="active">
          <a href="home.html">Accueil</a>
        </li>
        <li>
          <a href="games.html">Jeux</a>
        </li>
        <li>
          <a href="softwares.html">Logiciels</a>
        </li>
        <li>
          <a href="profile.php">Profile</a>
        </li>
        <li>
          <a href="feedback.html">FeedBack</a>
        </li>
        <li>
          <Link to="/about">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
