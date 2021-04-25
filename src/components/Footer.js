import React from "react";

function Footer() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="spaceX"></div>
      <div className="row align-items-center">
        <div className="col">
          <h2>Liens utiles :</h2>
          <a style={{ color: "whitesmoke" }} href="https://gamejolt.com/@Nytuo">
            Voir les jeux sur Gamejolt
          </a>
          <br />
          <a style={{ color: "whitesmoke" }} href="/">
            Aller à l'accueil
          </a>
          <br />
          <a style={{ color: "whitesmoke" }} href="https://nytuo.itch.io">
            Voir les jeux sur Itch.io
          </a>
          <br />
        </div>

        <div className="col">
          <h2>Liens Rapides :</h2>
          <a style={{ color: "whitesmoke" }} href="help">
            Aide
          </a>
          <br />
          <a
            style={{ color: "whitesmoke" }}
            href="https://github.com/Nytuo/Nytuo-Launcher"
          >
            GitHub
          </a>
          <br />
          <a style={{ color: "whitesmoke" }} href="nytuo-launcher">
            Nytuo Launcher
          </a>
          <br />
          <a style={{ color: "whitesmoke" }} href="sansNomReedition">
            Sans Nom Réédition
          </a>
          <br />
          <a style={{ color: "whitesmoke" }} href="superGeoffreyBros">
            Super Geoffrey Bros
          </a>
          <br />
          <a style={{ color: "whitesmoke" }} href="privacy">
            Privacy
          </a>
          <br />
          <a style={{ color: "whitesmoke" }} href="TAC">
            Terms And Conditions
          </a>
          <br />
        </div>
      </div>
      <br />
      <p className="txtfoot">
        Website of Nytuo, Host by PlanetHoster WorldLite. Made with React{" "}
        {React.version}. Created by Nytuo (BEUX Arnaud) using BootStrap
        components. All Rights Reserved. &#169; 2021 <br />
        Domaines faisant parties de l'Univers Nytuo : nytuo.yo.fr |
        Beta.nytuo.yo.fr | launcher.nytuo.yo.fr | nytuowebsite.wep.app |
        nytuo-launcher.web.app | nytuo.github.io
      </p>
    </div>
  );
}

export default Footer;
