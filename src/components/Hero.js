import React, { Component, useEffect } from "react";
import "../App.css";
import M from "materialize-css";

export default class Hero extends Component {
  componentDidMount() {
    M.Slider.init(this.slider,{height:650})

  }
  render() {
    return (
    <div className="hero-container">
      <h1 className="blanc">Welcome to a new Universe</h1>
      <h2>
        Important : Le site change de service de base de données et passe sous React. Les bases de données seront gérer par le service Google Firebase facilitant les choses pour tout le monde. L'ancienne base de données n'est plus accessible.
        <br/>
        Pour le launcher, une reconstruction de ce dernier avec React et la base de données Firebase est prévue. Elle prendra un peu de temps pour sortir. Pour les éventuelles nouveaux utilisateurs, veuillez-vous connecter directement par l'interface du launcher qui reste fonctionnelle.
        <br/>
        -Merci, Nytuo, Arnaud BEUX
      </h2>
      <p>
        Domaines faisant parties de l'Univers Nytuo : nytuo.yo.fr |
        Beta.nytuo.yo.fr | launcher.nytuo.yo.fr | nytuowebsite.wep.app |
        nytuo-launcher.web.app | nytuo.github.io
      </p>
        <div className="slider" style={{width: "100%" }} ref={slider=>{this.slider = slider;}}>
            <ul className="slides">
                <li>
                    <a href="sfo.html">
                        <img src="../images/IMGSFO2.png"/>
                    </a>
                    <div className="caption right-align">
                        <h3>Dernier jeu : ShootFighter Origins</h3>
                        <h5 className="light grey-text text-lighten-3">Tuer des zombies par vagues en 2D</h5>
                    </div>
                </li>
                <li><a href="sn.html">
                        <img src="../images/IMGSN.png"/></a>
                    <div class="caption center-align">
                        <h3>SansNom Réédition</h3>
                        <h5 class="light grey-text text-lighten-3">Mon premier jeu, enfin achevé.</h5>
                    </div>
                </li>
                <li><a href="sgb.html">
                        <img src="../images/SGB2.png"/></a>
                    <div class="caption right-align">
                        <h3>Super Geoffrey Bros</h3>
                        <h5 class="light grey-text text-lighten-3">Une semaine, Un objectif, Un jeu</h5>
                    </div>
                </li>
            </ul>
        </div>
      <div class="cards-list">
        <div class="homeresize">
          <a href="/games">
            <div class="card">
              <div class="card-image">
                <img alt="" src="../images/Nytuo games.png" />
                <span class="card-title">Jeux</span>
              </div>
              <div class="card-content">
                <p>Aller à la page des jeux</p>
              </div>
            </div>
          </a>
        </div>
        <div class="homeresize">
          <a href="/softwares">
            <div class="card">
              <div class="card-image">
                <img alt="" src="../images/Nytuo softwares.png" />
                <span class="card-title">Logiciels</span>
              </div>
              <div class="card-content">
                <p>Aller à la page des Logiciels</p>
              </div>
            </div>
          </a>
        </div>
        <div class="homeresize">
          <a href="/nytuo-launcher">
            <div class="card">
              <div class="card-image">
                <img alt="" src="../images/LogoLauncher.png" />
                <span class="card-title">Nytuo Launcher</span>
              </div>
              <div class="card-content">
                <p>Aller à la page du Nytuo Launcher</p>
              </div>
            </div>
          </a>
        </div>
        <div class="homeresize">
          <a href="/shootFighterOrigins">
            <div class="card">
              <div class="card-image">
                <img alt="" src="../images/IMGSFO2.png" />
                <span class="card-title">ShootFighter Origins</span>
              </div>
              <div class="card-content">
                <p>Aller à la page du dernier jeu en date</p>
              </div>
            </div>
          </a>
        </div>
        <div class="homeresize">
          <a href="/legendAdventureAndTheInfernalMaze">
            <div class="card">
              <div class="card-image">
                <img alt="" src="../images/IMGLAATIM.png" />
                <span class="card-title">Meilleur jeu</span>
              </div>
              <div class="card-content">
                <p>
                  Aller à la page du meilleur jeu (selon Itch.io et Gamejolt)
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="homeresize">
          <a href="/superGeoffreyBros">
            <div class="card">
              <div class="card-image">
                <img alt="" src="../images/SGB2.png" />
                <span class="card-title">Selection de l'éditeur</span>
              </div>
              <div class="card-content">
                <p>Aller à la page du jeu selectionner par l'editeur (moi)</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
  }
  