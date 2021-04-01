import React from "react";
import "../../App.css";
import Footer from "../Footer";

function GamesPage() {
  return (
    <>
      <meta name="robots" content="noindex"></meta>
      <div class="spaceX2">
        <img alt="" src="../images/Nytuo games.png" style={{ width: "20%" }} />
        <h1>Mes jeux :</h1>

        <div class="cards-list">
          <div class="homeresize">
            <a href="/shootFighterOrigins">
              <div class="card">
                <div class="card-image">
                  <img alt="" src="../images/IMGSFO2.png" />
                  <span class="card-title">ShootFighter Origins</span>
                </div>
                <div class="card-content">
                  <p>Survie a des vagues de Zombies en 2D</p>
                </div>
              </div>
            </a>
          </div>

          <div class="homeresize">
            <a href="/legendAdventureAndTheInfernalMaze">
              <div class="card">
                <div class="card-image">
                  <img alt="" src="../images/IMGLAATIM.png" />
                  <span class="card-title">
                    Legend Adventure and the Infernal Maze
                  </span>
                </div>
                <div class="card-content">
                  <p>
                    Tu viens pour des vacances mais quelque chose va nuir a ton
                    séjour
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
                  <span class="card-title">Super Geoffrey Bros</span>
                </div>
                <div class="card-content">
                  <p>
                    Un jeu a la Mario pour le mariage de mon cousin Geoffrey
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div class="homeresize">
            <a href="/shootFighter">
              <div class="card">
                <div class="card-image">
                  <img alt="" src="../images/IMGSF.png" />
                  <span class="card-title">ShootFighter</span>
                </div>
                <div class="card-content">
                  <p>Survie a des vagues de Zombies en 3D</p>
                </div>
              </div>
            </a>
          </div>

          <div class="homeresize">
            <a href="/lutinAdventure">
              <div class="card">
                <div class="card-image">
                  <img alt="" src="../images/IMGLA.png" />
                  <span class="card-title">Lutin Adventure</span>
                </div>
                <div class="card-content">
                  <p>Retrouve toutes les pièces et monte en haut de la tour</p>
                </div>
              </div>
            </a>
          </div>

          <div class="homeresize">
            <a href="/vincentInTheForest">
              <div class="card">
                <div class="card-image">
                  <img alt="" src="../images/IMGVITF.png" />
                  <span class="card-title">Vincent In The Forest</span>
                </div>
                <div class="card-content">
                  <p>Retrouve touts les composants pour quitter la foret</p>
                </div>
              </div>
            </a>
          </div>

          <div class="homeresize">
            <a href="/theTardisDefender">
              <div class="card">
                <div class="card-image">
                  <img alt="" src="../images/IMGTTD.png" />
                  <span class="card-title">The TARDIS Defender</span>
                </div>
                <div class="card-content">
                  <p>Protège le TARDIS des Cybermans et des Daleks</p>
                </div>
              </div>
            </a>
          </div>

          <div class="homeresize">
            <a href="/fireWallDefender">
              <div class="card">
                <div class="card-image">
                  <img alt="" src="../images/IMGFWD.png" />
                  <span class="card-title">Firewall Defender</span>
                </div>
                <div class="card-content">
                  <p>
                    Evite la destruction du processeur en plaçant des tourelles
                    pour detruire les virus
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div class="homeresize">
            <a href="/tanksBattle">
              <div class="card">
                <div class="card-image">
                  <img alt="" src="../images/IMGTB.png" />
                  <span class="card-title">TanksBattle</span>
                </div>
                <div class="card-content">
                  <p>Jeu de tanks a travers le LAN</p>
                </div>
              </div>
            </a>
          </div>

          <div class="homeresize">
            <a href="/winrun">
              <div class="card">
                <div class="card-image">
                  <img alt="" src="../images/IMGWR.png" />
                  <span class="card-title">WinRun</span>
                </div>
                <div class="card-content">
                  <p>Jeu de course basic</p>
                </div>
              </div>
            </a>
          </div>

          <div class="homeresize">
            <a href="/asteroidEscape">
              <div class="card">
                <div class="card-image">
                  <img alt="" src="../images/IMGAE.png" />
                  <span class="card-title">AsteroidEscape</span>
                </div>
                <div class="card-content">
                  <p>
                    Détruit tout les astéroids et essaye de marquer le plus de
                    point
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div class="homeresize">
            <a href="/sansNomReedition">
              <div class="card">
                <div class="card-image">
                  <img alt="" src="../images/IMGSN.png" />
                  <span class="card-title">Sans Nom Réédition</span>
                </div>
                <div class="card-content">
                  <p>Un jeu juste pour le FUN.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default GamesPage;
