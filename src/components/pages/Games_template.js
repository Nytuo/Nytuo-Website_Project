import React, { useEffect } from "react";
import "../../App.css";
import { Button } from "../Button";
import { ShowTxt } from "../ShowTxt";
import M from "materialize-css";
import ScreenShotsDisplayer from "../ScreenShotsDisplayer";
import { ButtonA } from "../ButtonA";
import Footer from "../Footer";

function Games_template(props) {
  useEffect(() => {
    if (props.android === "") {
      document.getElementById("androidDiv").style.display = "None";
    }
  }, []);

  return (
    <>
      <h1>Avertissement :</h1>
      <ShowTxt txt={props.advTxt} />
      <h1>Description :</h1>
      <ShowTxt txt={props.desc} />
      <h1>Informations :</h1>
      <ShowTxt txt={props.info} />
      <h1>Captures d'écran :</h1>
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
      <h1>Téléchargements :</h1>
      <div style={{ textAlign: "center" }}>
        <a href={props.itch}>
          <img src="../images/itchio_badge.png" style={{ width: "20%" }} />
        </a>
        <a href="nytuo_launcher.html">
          <img src="../images/available.png" style={{ width: "20%" }} />
        </a>
        <a href={props.gamejolt}>
          <img
            src="../images/Game-jolt-logo.svg.png"
            style={{ width: "20%" }}
          />
        </a>

        <a id="androidDiv" href={props.android}>
          <img
            src="../images/fr_badge_web_generic.png"
            style={{ width: "20%" }}
          />
        </a>
      </div>
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
        Intéressés ?<a href="nytuo_launcher.html"> Voyez en plus ici.</a>
      </p>

      <ShowTxt txt="Vous avez déjà le Nytuo Launcher ou le jeu d'installer ? Aller plus vite:" />
      <div style={{ textAlign: "center" }}>
        <ButtonA link="nytuo://">Ouvrir le Nytuo Launcher</ButtonA>
        <ButtonA link={"nytuo://" + props.Name}>
          Ouvrir le jeu avec le Nytuo Launcher
        </ButtonA>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Games_template;
