import React, { useEffect } from "react";
import "../../App.css";
import { ShowTxt } from "../ShowTxt";
import ScreenShotsDisplayer from "../ScreenShotsDisplayer";
import { ButtonA } from "../ButtonA";
import Footer from "../Footer";

function GamesTemplate(props) {
  useEffect(() => {
    if (props.android === "") {
      document.getElementById("androidDiv").style.display = "None";
      document.getElementById("githubdiv").className = "column";
      document.getElementById("itchdiv").className = "column";
      document.getElementById("gamejoltdiv").className = "column";
      document.getElementById("nldiv").className = "column";
    }
    if (props.advTxt === "") {
      document.getElementById("advDiv").style.display = "None";
    }
    if (props.video === "") {
      document.getElementById("videodiv").style.display = "None";
      document.getElementById("videoiframe").style.display = "None";
    }
    if (props.sn === "") {
      document.getElementById("SNC").style.display = "None";
    }
  }, []);

  return (
    <>
      <meta name="robots" content="noindex"></meta>
      <div className="spaceX2"></div>
      <div style={{ textAlign: "center" }}>
        <img
          alt=""
          src={"../images/Logo" + props.Name.toUpperCase() + ".png"}
          className="IMGGames"
        />
      </div>
      <h1>{props.nGame}</h1>
      <h1 id="advDiv">Avertissement :</h1>
      <ShowTxt txt={props.advTxt} />
      <h1>Description :</h1>
      <ShowTxt txt={props.desc} />
      <h1>Informations :</h1>
      <ShowTxt txt={props.info} />
      <h1>Captures d'écran :</h1>
      <div className="hero-container">
        <ScreenShotsDisplayer
          i1={props.i1}
          i2={props.i2}
          i3={props.i3}
          i4={props.i4}
          i5={props.i5}
          i6={props.i6}
          i7={props.i7}
          i8={props.i8}
          i9={props.i9}
          i10={props.i10}
          rm1={props.rm1}
          rm2={props.rm2}
          rm3={props.rm3}
          rm4={props.rm4}
          rm5={props.rm5}
          rm6={props.rm6}
          rm7={props.rm7}
          rm8={props.rm8}
          rm9={props.rm9}
          rm10={props.rm10}
        />
      </div>
      <br />

      <h1 id="videodiv">Vidéo :</h1>
      <div
        className="ratio ratio-16x9"
        style={{ textAlign: "center" }}
        id="videoiframe"
      >
        <iframe src={props.video} allowFullScreen />
      </div>
      <br />
      <h1>Téléchargements :</h1>
      <div id="SNC">
        <h2>SansNom Classic:</h2>
        <div style={{ textAlign: "center" }}>
          <ButtonA link="http://uploads.ungrounded.net/alternate/1035000/1035158_alternate_39079_r3.zip/?f1478359414">
            Jouer sur Newgrounds
          </ButtonA>

          <ButtonA link="http://www.kongregate.com/games/Nytuo/sansnom-alpha-2">
            Jouer sur Kongregate
          </ButtonA>
        </div>
        <h2>SansNom Réédition:</h2>
      </div>
      <div style={{ textAlign: "center" }}>
        <div class="row2">
          <div class="column2" id="itchdiv">
            <a href={props.itch}>
              <img
                alt=""
                src="../images/itchio_badge.png"
                style={{ width: "100%" }}
              />
            </a>
          </div>
          <div class="column2" id="nldiv">
            <a href="nytuo-launcher">
              <img
                alt=""
                src="../images/available.png"
                style={{ width: "100%" }}
              />
            </a>
          </div>
          <div class="column2" id="gamejoltdiv">
            <a href={props.gamejolt}>
              <img
                alt=""
                src="../images/Game-jolt-logo.svg.png"
                style={{ width: "100%" }}
              />
            </a>
          </div>
          <div class="column2" id="githubdiv">
            <a href={props.GitHub}>
              <img
                alt=""
                src="../images/available_github.png"
                style={{ width: "100%" }}
              />
            </a>
          </div>
          <div class="column2" id="androidDiv">
            <a href={props.android}>
              <img
                alt=""
                src="../images/fr_badge_web_generic.png"
                style={{ width: "100%" }}
              />
            </a>
          </div>
        </div>
      </div>
      <h1>Pourquoi utiliser le Nytuo-Launcher ?</h1>
      <ShowTxt txt="Le Nytuo Launcher est un lanceur pour les jeux de Nytuo. Il est fait maison. Il permet de télécharger, mettre à jour, lancer et supprimer les jeux de Nytuo." />
      <ShowTxt
        txt="Le Nytuo Launcher apporte des fonctionnalités comme les succès (achievements, pour les
        jeux supportés), raccourcies sur le bureau (windows uniquement), réparation, et plus..."
      />
      <ShowTxt
        txt="Le Nytuo Launcher est en dévelopement actif, cela veut dire qu'il subit beaucoup de modifications et de nouvelles fonctionnalités sont apportés à chaque
        mise à jour (pas vraiment à chaque mise à jour mais régulièrement)"
      />
      <p>
        Intéressés ?<a href="/nytuo-launcher"> Voyez en plus ici.</a>
      </p>
      <ShowTxt txt="Vous avez déjà le Nytuo Launcher ou le jeu d'installer ? Aller plus vite:" />
      <div style={{ textAlign: "center" }}>
        <ButtonA link="nytuo://">Ouvrir le Nytuo Launcher</ButtonA>
        <ButtonA link={"nytuo://launchid/" + props.Name}>
          Ouvrir le jeu avec le Nytuo Launcher
        </ButtonA>
      </div>
      <Footer></Footer>
    </>
  );
}
export default GamesTemplate;
