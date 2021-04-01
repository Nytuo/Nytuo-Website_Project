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
            <a href="nytuo-launcher">
              <div className="card">
                <div className="card-image">
                  <img alt="" src="../images/LogoLauncher.png" />
                </div>
                <div className="card-content">
                  <p>Un simple launcher pour mes jeux</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Softwares;
