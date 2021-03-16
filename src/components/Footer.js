import React from "react";

function Footer() {
  return (
    <div>
      <div className="spaceX"></div>

      <div className="row">
        <div className="column">
          <h2>Liens utiles :</h2>
          <a style={{color: "whitesmoke"}} href="https://gamejolt.com/@Nytuo">
            Voir les jeux sur Gamejolt
          </a>
          <br />
          <br />

          <a style={{color: "whitesmoke"}} href="home.html">
            Aller à l'accueil
          </a>
          <br />
          <br />

          <a style={{color: "whitesmoke"}} href="https://nytuo.itch.io">
            Voir les jeux sur Itch.io
          </a>
        </div>
        <div className="column">
          <h2>Outils :</h2>
          <div id="google_translate_element"></div>
          <br />
          <br />
        </div>
        <div className="column">
          <h2>Liens Rapides :</h2>
          <a style={{color: "whitesmoke"}} href="aide.html">
            Aide
          </a>
          <br />
          <a
            style={{color: "whitesmoke"}}
            href="https://github.com/Nytuo/Nytuo-Launcher"
          >
            GitHub
          </a>
          <br />
          <a style={{color: "whitesmoke"}} href="nytuo_launcher.html">
            Nytuo Launcher
          </a>
          <br />
          <a style={{color: "whitesmoke"}} href="sn.html">
            Sans Nom Réédition
          </a>
          <br />
          <a style={{color: "whitesmoke"}} href="sgb.html">
            Super Geoffrey Bros
          </a>
          <br />
          <a style={{color: "whitesmoke"}} href="nlcl.html">
            Changes-Logs du Nytuo Launcher
          </a>
          <br />
          <a style={{color: "whitesmoke"}} href="privacy.html">
            Privacy
          </a>
          <br />
        </div>
      </div>

      <p className="txtfoot">
        Website of Nytuo, Host by PlanetHoster WorldLite. Made with React {React.version}. Created by Nytuo (BEUX Arnaud) using
        <a href="https://materializecss.com">Materialize-Css</a> components.
        All Rights Reserved. &#169; 2021
      </p>
    </div>
  );
}

export default Footer;
