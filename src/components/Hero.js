import React from "react";
import "../App.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="spaceX2"></div>
      <h1 className="blanc">Welcome to a new Universe</h1>
      <h2>
        Important : Le site internet vient de changer de domaine !<br />
        Avant Nytuo.yo.fr était le domaine officiel, il passe désormais à
        nytuowebsite.web.app ou nytuowebsite.firebase.com (c'est le même) hoster
        par Google Firebase. Ce changement est dû à ReactJS qui me permet de
        faire cette nouvelle version du site mais il m'est impossible de
        l'heberger sur mon domaine précédent... Deplus Firebase me permet de
        gérer facilement les connexions avec Google qui est plus rapide pour
        vous, utilisateurs.
        <br />
        Le domaine nytuo.yo.fr continuera d'exister mais redirigera à cette
        adresse.
        <br />
        Pour le launcher, une reconstruction de ce dernier avec React et la base
        de données Firebase est prévue. Elle prendra un peu de temps pour
        sortir. Pour les éventuelles nouveaux utilisateurs, veuillez-vous
        connecter directement par l'interface du launcher qui reste
        fonctionnelle.
        <br />
        Ce site est dorénavant, le domaine principal.
        <br />
        -Merci, Nytuo, Arnaud BEUX
      </h2>
      <p>
        Domaines faisant parties de l'Univers Nytuo : nytuo.yo.fr |
        Beta.nytuo.yo.fr | launcher.nytuo.yo.fr | nytuowebsite.wep.app |
        nytuo-launcher.web.app | nytuo.github.io
      </p>

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
export default Hero;
