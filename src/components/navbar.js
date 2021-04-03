import React, { Component } from "react";
import M from "materialize-css";
import "./navbar.css";
import firebase from "../Firebase";

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
  componentDidMount() {
    M.Sidenav.init(this.sidenav, []);
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(elems, { outDuration: 50 });
    });
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <div className="logonav">
              <a href="/" className="">
                <img
                  alt=""
                  src="../images/256.png"
                  className="logonav"
                  title="Logo de Nytuo"
                />
              </a>
            </div>

            <a data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <div class="chip">
                  {firebase.auth().currentUser ? (
                    firebase.auth().currentUser.photoURL && (
                      <img
                        className="NcircleimgC"
                        src={firebase.auth().currentUser.photoURL}
                        alt="profile"
                      />
                    )
                  ) : (
                    <img src="../images/default.png" />
                  )}

                  {firebase.auth().currentUser
                    ? firebase.auth().currentUser.displayName
                    : "Non Connecter"}
                </div>
                {firebase.auth().currentUser ? (
                  <a
                    style={{ margin: "5px" }}
                    className="btn waves-effect waves-light"
                    onClick={this.handleLogOut}
                  >
                    <i class="material-icons left">logout</i>
                    Se déconnecter
                  </a>
                ) : (
                  <>
                    <a
                      class="waves-effect waves-light btn modal-trigger"
                      data-target="Conmodal1"
                    >
                      <i class="material-icons left">login</i>
                      Formulaire de connexion
                    </a>
                  </>
                )}
              </li>
            </ul>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <a
                  class="tooltipped"
                  data-position="bottom"
                  data-tooltip="Accueil"
                  href="/"
                >
                  <i class="material-icons left">home</i>Accueil
                </a>
              </li>
              <li>
                <a
                  class="tooltipped"
                  data-position="bottom"
                  data-tooltip="Jeux"
                  href="/games"
                >
                  <i class="material-icons left">sports_esports</i>Jeux
                </a>
              </li>
              <li>
                <a
                  class="tooltipped"
                  data-position="bottom"
                  data-tooltip="Logiciels"
                  href="/softwares"
                >
                  <i class="material-icons left">wysiwyg</i>Logiciels
                </a>
              </li>
              <li>
                <a
                  class="tooltipped"
                  data-position="bottom"
                  data-tooltip="Launch GitHub"
                  href="https://github.com/Nytuo"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  class="tooltipped"
                  data-position="bottom"
                  data-tooltip="Profile"
                  href="/profile"
                >
                  <i class="material-icons left">contact_page</i>Profile
                </a>
              </li>
              <li>
                <a
                  class="tooltipped"
                  data-position="bottom"
                  data-tooltip="Boutique"
                  href="/store"
                >
                  <i class="material-icons left">local_grocery_store</i>Boutique
                </a>
              </li>
              <li>
                <a
                  class="tooltipped"
                  data-position="bottom"
                  data-tooltip="FeedBack"
                  href="/feedback"
                >
                  <i class="material-icons left">feedback</i>Feedback
                </a>
              </li>
              <li>
                <a
                  class="tooltipped"
                  data-position="bottom"
                  data-tooltip="A propos"
                  href="/about"
                >
                  <i class="material-icons left">info</i>A propos
                </a>
              </li>
            </ul>
          </div>
          <ul
            className="sidenav"
            id="mobile-demo"
            ref={(sidenav) => {
              this.sidenav = sidenav;
            }}
          >
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/games">Jeux</a>
            </li>
            <li>
              <a href="/softwares">Logiciels</a>
            </li>
            <li>
              <a href="https://github.com/Nytuo">GitHub</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/store">Boutique</a>
            </li>
            <li>
              <a href="/feedback">FeedBack</a>
            </li>
            <li>
              <a href="/about">A Propos</a>
            </li>
            <li>
              <div class="chip">
                {firebase.auth().currentUser &&
                  firebase.auth().currentUser.photoURL && (
                    <img
                      className="NcircleimgC"
                      src={firebase.auth().currentUser.photoURL}
                      alt="profile"
                    />
                  )}

                {firebase.auth().currentUser
                  ? firebase.auth().currentUser.displayName
                  : "Non Connecter"}
              </div>
              <br />
              {firebase.auth().currentUser ? (
                <button
                  style={{ margin: "5px" }}
                  className="btn waves-effect waves-light"
                  onClick={this.handleLogOut}
                >
                  Se déconnecter
                </button>
              ) : (
                <>
                  <a
                    class="waves-effect waves-light btn modal-trigger"
                    data-target="Conmodal1"
                  >
                    Formulaire de connexion
                  </a>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
