import Footer from "../Footer";

import React from "react";

function Softwares() {
  return (
    <div>
      <meta name="robots" content="noindex"></meta>
      <div className="spaceX2">
        <img
          alt=""
          src="../images/Nytuo softwares.png"
          style={{ width: "20%" }}
        />

        <h1>Mes Logiciels :</h1>
        <div className="cards-list">
          <div className="homeresize">
            <div className="card">
              <img src="../images/LogoLauncher.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nytuo-Launcher</h5>
                <p className="card-text">Un simple launcher pour mes jeux</p>
                <a href="/nytuo-launcher" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
          <div className="homeresize">
            <div className="card">
              <img src="../images/LogoBig_cc.png" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cosmic Comics</h5>
                <p className="card-text">Lisez vos comics et manga</p>
                <a href="/cosmic-comics" className="btn btn-primary">
                  Voir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Softwares;
