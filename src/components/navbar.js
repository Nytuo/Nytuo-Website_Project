import React, { Component } from "react";
import "./navbar.css";
import firebase from "../Firebase";
import bootstrap from "bootstrap";

class Navbar extends Component {
  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged(() => {
      this.forceUpdate();
    });
  }
  handleLogOut = () => {
    firebase.auth().signOut();
  };
  componentDidMount() {}
  render() {
    return (
      <>
        <nav
          className="navbar sticky-top navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#262626" }}
        >
          <a
            className="navbar-brand animate__animated animate__backInDown"
            href="#"
          >
            <img src="../images/256.png" alt="" width="120" height="67.5" />
          </a>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link animate__animated animate__backInDown"
                    href="/"
                  >
                    Accueil
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle animate__animated animate__backInDown"
                    href="/games"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Jeux
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="animate__animated animate__bounceIn">
                      <a
                        className="dropdown-item"
                        href="/shootFighterTotalWarfare"
                      >
                        ShootFighter Total Warfare
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/shootFighterOrigins">
                        ShootFighter Origins
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a
                        className="dropdown-item"
                        href="/legendAdventureAndTheInfernalMaze"
                      >
                        Legend Adventure And The Infernal Maze
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/superGeoffreyBros">
                        Super Geoffrey Bros
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/shootFighter">
                        ShootFighter
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/lutinAdventure">
                        Lutin Adventure
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/vincentInTheForest">
                        Vincent In The Forest
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/theTardisDefender">
                        The TARDIS Defender
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/fireWallDefender">
                        FireWall Defender
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/tanksBattle">
                        TanksBattle
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/winrun">
                        WinRun
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/asteroidEscape">
                        Asteroid Escape
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/sansNomReedition">
                        SansNom R????dition
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/games">
                        Tout voir
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown animate__animated animate__backInDown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/softwares"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Logiciels
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/nytuo-launcher">
                        Nytuo-Launcher
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/cosmic-comics">
                        Cosmic-Comics
                      </a>
                    </li>
                    <li className="animate__animated animate__bounceIn">
                      <a className="dropdown-item" href="/softwares">
                        Voir Tout
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item animate__animated animate__backInDown">
                  <a className="nav-link" href="https://github.com/Nytuo">
                    GitHub
                  </a>
                </li>
                <li className="nav-item animate__animated animate__backInDown">
                  <a className="nav-link" href="/profile">
                    Profile
                  </a>
                </li>
                <li className="nav-item animate__animated animate__backInDown">
                  <a className="nav-link" href="/store">
                    Boutique
                  </a>
                </li>
                <li className="nav-item animate__animated animate__backInDown">
                  <a className="nav-link" href="/feedback">
                    FeedBack
                  </a>
                </li>
                <li className="nav-item animate__animated animate__backInDown">
                  <a className="nav-link" href="/about">
                    A Propos
                  </a>
                </li>
              </ul>
              <div
                style={{ marginLeft: "auto" }}
                className="animate__animated animate__backInDown"
              >
                {firebase.auth().currentUser ? (
                  firebase.auth().currentUser.photoURL && (
                    <img
                      className="NcircleimgC animate__animated animate__backInDown"
                      style={{ height: "50px", width: "50px", margin: "5px" }}
                      src={firebase.auth().currentUser.photoURL}
                      alt="profile"
                    />
                  )
                ) : (
                  <img
                    src="../images/default.png"
                    style={{ height: "50px", width: "50px", margin: "5px" }}
                  />
                )}

                {firebase.auth().currentUser
                  ? firebase.auth().currentUser.displayName
                  : "Non Connecter"}
                {firebase.auth().currentUser ? (
                  <a
                    style={{ margin: "10px" }}
                    className="btn btn-primary animate__animated animate__backInDown"
                    href="#"
                    role="button"
                    onClick={this.handleLogOut}
                  >
                    Se d??connecter
                  </a>
                ) : (
                  <>
                    <a
                      style={{ margin: "10px" }}
                      className="btn btn-primary animate__animated animate__backInDown"
                      data-bs-toggle="modal"
                      data-bs-target="#conmod"
                    >
                      Formulaire de connexion
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
