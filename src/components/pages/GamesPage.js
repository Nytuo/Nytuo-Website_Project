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
          <div className="homeresize">
            <div className="card">
              <img src="../images/logoSFTW.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">ShootFighter TotalWarfare</h5>
                <p className="card-text">Multijoueurs FFA, TDM et Zombies</p>
                <a href="/shootFighterTotalWarfare" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div class="homeresize">
            <div className="card">
              <img src="../images/IMGSFO2.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">ShootFighter Origins</h5>
                <p className="card-text">
                  Survie a des vagues de Zombies en 2D
                </p>
                <a href="/shootFighterOrigins" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/IMGLAATIM.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Legend Adventure And The Infernal Maze
                </h5>
                <p className="card-text">
                  Tu viens pour des vacances mais quelque chose va nuir a ton
                  séjour
                </p>
                <a
                  href="/legendAdventureAndTheInfernalMaze"
                  className="btn btn-primary"
                >
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/SGB2.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Super Geoffrey Bros</h5>
                <p className="card-text">
                  Un jeu a la Mario pour le mariage de mon cousin Geoffrey
                </p>
                <a href="/superGeoffreyBros" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/IMGSF.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">ShootFighter</h5>
                <p className="card-text">
                  Survie a des vagues de Zombies en 3D
                </p>
                <a href="/shootFighter" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/IMGLA.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lutin Adventure</h5>
                <p className="card-text">
                  Retrouve toutes les pièces et monte en haut de la tour
                </p>
                <a href="/lutinAdventure" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/IMGVITF.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Vincent In The Forest</h5>
                <p className="card-text">
                  Retrouve touts les composants pour quitter la foret
                </p>
                <a href="/vincentInTheForest" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/IMGTTD.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">The TARDIS Defender</h5>
                <p className="card-text">
                  Protège le TARDIS des Cybermans et des Daleks
                </p>
                <a href="/theTardisDefender" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/IMGFWD.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">FireWall Defender</h5>
                <p className="card-text">
                  Evite la destruction du processeur en plaçant des tourelles
                  pour detruire les virus
                </p>
                <a href="/fireWallDefender" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/IMGTB.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">TanksBattle</h5>
                <p className="card-text">Jeu de tanks a travers le LAN</p>
                <a href="/tanksBattle" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/IMGWR.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">WinRun</h5>
                <p className="card-text">Jeu de course basic</p>
                <a href="/winrun" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/IMGAE.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">AsteroidEscape</h5>
                <p className="card-text">
                  Détruit tout les astéroids et essaye de marquer le plus de
                  point
                </p>
                <a href="/asteroidEscape" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/IMGSN.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sans Nom Réédition</h5>
                <p className="card-text">Un jeu juste pour le FUN</p>
                <a href="/sansNomReedition" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default GamesPage;
