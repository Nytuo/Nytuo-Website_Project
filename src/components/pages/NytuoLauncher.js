import React, { Component } from "react";
import Footer from "../Footer";
import ScreenShotsDisplayer from "../ScreenShotsDisplayer";
import { ButtonA } from "../ButtonA";

export default class NytuoLauncher extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <meta name="robots" content="noindex"></meta>
        <div style={{ textAlign: "center", paddingTop: "100px" }}>
          <img src="../images/LogoLauncher.png" alt="" />
        </div>
        <h1>Description :</h1>
        <p style={{ textAlign: "center" }}></p>
        <h1>Vous avez déjà le Nytuo Launcher? Lancer le d'ici:</h1>
        <div style={{ textAlign: "center" }}>
          <ButtonA link="nytuo://">
            Ouvrir le Nytuo Launcher
          </ButtonA>
        </div>

        <p>
          Le Nytuo Launcher est un lanceur pour les jeux de Nytuo. Il est fait
          maison. Il permet de télécharger, mettre à jour, lancer et supprimer
          les jeux de Nytuo.
          <br /> Le Nytuo Launcher apporte des fonctionnalités comme les succès
          (achievements, pour les jeux supportés), raccourcies sur le bureau
          (windows uniquement), réparation, et plus...
          <br />
          Le Nytuo Launcher est en dévelopement actif, cela veut dire qu'il
          subit beaucoup de modifications et de nouvelles fonctionnalités sont
          apportés à chaque mise à jour (pas vraiment à chaque mise à jour mais
          régulièrement).
        </p>
        <h1>Informations :</h1>
        <p>
          Plateformes : Windows(x64), linux(x64)
          <br />
          Languages : Français, Anglais et Espagnol
          <br />
          Necessite la connexion ou la création à un compte Nytuo (Gratuit)
        </p>        <div className="hero-container" >

      <ScreenShotsDisplayer
          i1="NLSC"
          i2="NLSC2"
          i3="NLSC3"
          rm1=""
          rm2=""
          rm3=""
          rm4="t"
          rm5="t"
          rm6="t"
          rm7="t"
          rm8="t"
          rm9="t"
          rm10="t"
      /></div>
        <div style={{ paddingTop: "50px" }}></div>
        <div style={{ textAlign: "center" }}>
          <ButtonA link="https://github.com/Nytuo/Nytuo-Launcher/releases/latest">
            Télécharger sur GITHUB
          </ButtonA>
          <ButtonA link="https://github.com/Nytuo/Nytuo-Launcher">
            Voir le code sur GITHUB
          </ButtonA>
          <ButtonA link="help">
           Voir l'aide
          </ButtonA>
          <div style={{ paddingTop: "5px" }}></div>
        </div>
        <h1>Fonctionnalités:</h1>
        <p>
          -Téléchargements des jeux.
          <br />
          -Mise à jour des jeux
          <br />
          -Lancement des jeux
          <br />
          -Systeme de succès (pour les jeux pris en charges)
          <br />
          -Reparation, re-téléchargement et suppression des jeux
          <br />
          -Mise à jour du launcher automatique
          <br />
          -Jouer sans téléchargement en HTML5 (nécessite une connexion internet,
          seulement pour certains jeux compatibles)
          <br />
          -Sauvegarde locale (pour certains jeux ayant des sauvegardes et
          compatibles)
          <br />
          -Création de raccourcie sur le bureau Windows uniquement
        </p>
        <br></br>
        <h1>Changes-Logs:</h1>
        <p>
          Les changeslogs sont maintenant directement sur GITHUB <ButtonA link="https://github.com/Nytuo/Nytuo-Launcher/releases">
          Voir
        </ButtonA>
        </p>
        <Footer />
      </div>
    );
  }
}
