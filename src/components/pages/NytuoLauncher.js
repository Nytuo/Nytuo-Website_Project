import React, { Component } from "react";
import Footer from "../Footer";
import ScreenShotsDisplayer from "../ScreenShotsDisplayer";
import { ButtonA } from "../ButtonA";

export default class NytuoLauncher extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <meta name="robots" content="noindex"></meta>
        <div style={{ textAlign: "center", paddingTop: "100px" }}>
          <img src="../images/LogoLauncher.png" alt="" />
        </div>
        <p style={{ textAlign: "center" }}></p>
        <h1>Vous avez déjà le Nytuo Launcher? Lancer le d'ici:</h1>
        <div style={{ textAlign: "center" }}>
          <ButtonA link="nytuo://">Ouvrir le Nytuo Launcher</ButtonA>
        </div>
        <h1>Description :</h1>
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
          Plateformes : Windows(x64) (.exe et .zip), Linux(x64) (.deb /
          .appimage / .snap et .zip), Pas de version x86 ou ARM (Les jeux sont
          disponible uniquement en x64) et pas de version MACOSX (Parceque c'est
          comme ça).
          <br />
          Languages : Français, Anglais et Espagnol (Si vous voulez d'autres
          langues, je peux les ajouter si vous le demander directement sur la
          page GitHub du projet)
          <br />
          La connexion ou la création à un compte Nytuo / Google / Microsoft /
          Twitter / GitHub / Facebook (même que sur le site) est fortement
          recommandé bien que l'utilisation en mode Anonyme ne necessite pas de
          compte (fonctionnalités et personalisations limités).
        </p>{" "}
        <div className="hero-container">
          <ScreenShotsDisplayer
            i1="NLSC"
            i2="NLSC2"
            i3="NLSC3"
            i4="NLSC4"
            i5="NLSC5"
            rm1=""
            rm2=""
            rm3=""
            rm4=""
            rm5=""
            rm6="t"
            rm7="t"
            rm8="t"
            rm9="t"
            rm10="t"
          />
        </div>
        <div style={{ paddingTop: "50px" }}></div>
        <div style={{ textAlign: "center" }}>
          <ButtonA link="https://github.com/Nytuo/Nytuo-Launcher/releases/latest">
            Télécharger sur GITHUB
          </ButtonA>
          <ButtonA link="https://github.com/Nytuo/Nytuo-Launcher">
            Voir le code sur GITHUB
          </ButtonA>
          <ButtonA link="help">Voir l'aide</ButtonA>
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
          Les changeslogs sont maintenant directement sur GITHUB{" "}
          <ButtonA link="https://github.com/Nytuo/Nytuo-Launcher/releases">
            Voir
          </ButtonA>
        </p>
        <Footer />
      </div>
    );
  }
}
