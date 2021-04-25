import React, { Component, useEffect } from "react";
import "../App.css";

export default class Hero extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="hero-container">
        <h1 className="blanc">Welcome to a new Universe</h1>

        <div style={{ width: "50%" }}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a href="/shootFighterOrigins">
                  <img
                    src="../images/IMGSFO2.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Dernier jeu : ShootFighter Origins</h5>
                  <p>Tuer des zombies par vagues en 2D</p>
                </div>
              </div>
              <div className="carousel-item">
                <a href="/sansNomReedition">
                  <img
                    src="../images/IMGSN.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5>SansNom Réédition</h5>
                  <p>Mon premier jeu, enfin achevé.</p>
                </div>
              </div>
              <div className="carousel-item">
                <a href="/superGeoffreyBros">
                  <img
                    src="../images/SGB2.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Super Geoffrey Bros</h5>
                  <p>Une semaine, Un objectif, Un jeu</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Précedent</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Suivant</span>
            </button>
          </div>
        </div>
        <div class="cards-list">
          <div className="homeresize">
            <div className="card">
              <div className="card-header">Jeux</div>
              <div className="card-body">
                <h5 className="card-title">Aller à la page des jeux</h5>
                <p className="card-text">Voir tout les jeux de Nytuo</p>
                <a href="/games" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <div className="card-header">Logiciels</div>
              <div className="card-body">
                <h5 className="card-title">Aller à la page des Logiciels</h5>
                <p className="card-text">Tout les logiciels de Nytuo</p>
                <a href="/softwares" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <div className="card-header">Nytuo Launcher</div>
              <div className="card-body">
                <h5 className="card-title">
                  Aller à la page du Nytuo Launcher
                </h5>
                <p className="card-text">Voir le Nytuo-Launcher</p>
                <a href="/nytuo-launcher" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-list">
          <div className="homeresize">
            <div className="card">
              <img src="../images/IMGSFO2.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">ShootFighter Origins</h5>
                <p className="card-text">
                  Aller à la page du dernier jeu en date
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
                <h5 className="card-title">Meilleur jeu</h5>
                <p className="card-text">
                  Aller à la page du meilleur jeu (selon Itch.io et Gamejolt)
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
                <h5 className="card-title">Selection de l'éditeur</h5>
                <p className="card-text">
                  Aller à la page du jeu selectionner par l'editeur (moi)
                </p>
                <a href="/superGeoffreyBros" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
