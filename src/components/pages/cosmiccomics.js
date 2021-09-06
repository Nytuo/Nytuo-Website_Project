import React, { Component } from "react";
import Footer from "../Footer";
import ScreenShotsDisplayer from "../ScreenShotsDisplayer";
import { ButtonA } from "../ButtonA";

export default class CC extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <meta name="robots" content="noindex"></meta>
        <div style={{ textAlign: "center", paddingTop: "100px" }}>
          <img
            src="../images/LogoStretch_cc.png"
            alt=""
            style={{ width: "90%", height: "auto" }}
          />
        </div>
        <p style={{ textAlign: "center" }}></p>
        <h1>Vous avez déjà Cosmic-Comics? Lancer d'ici:</h1>
        <div style={{ textAlign: "center" }}>
          <ButtonA link="cosmic-comics://">Ouvrir Cosmic-Comics</ButtonA>
        </div>
        <h1>Description :</h1>
        <p>
          Cosmic-Comics est mon logiciel Open Source, fait avec Electron
          (HTML/CSS/JS) et Node.JS disponible sur Windows/Linux/Mac.
          <br />
          Cosmic-Comics est une application qui permet de lire ces comics et
          manga de manière simple.
        </p>
        <h1>Informations :</h1>
        <p>
          Plateformes : Windows (Store, exe et zip), Linux (Snapcraft, deb,
          appimage, snap, RPM et .zip), MACOS (Voir disponibilité sur GitHub) et
          une Portable edition pour les versions ZIP (Windows et Linux, MACOS
          voir Github).Plus d'info{" "}
          <a href="https://github.com/Nytuo/CosmicComics#Installation">ICI</a>
          <br />
          Languages : Français, Anglais (Vous pouvez en faire d'autres vous
          même, les partagés ou demander que je fasse la langue pour vous). Plus
          d'info{" "}
          <a href="https://github.com/Nytuo/CosmicComics#Languages">ICI</a>
        </p>
        <div className="hero-container">
          <ScreenShotsDisplayer
            i1="cc_img1"
            i2="cc_img2"
            i3="cc_img3"
            i4="cc_img4"
            i5="cc_img5"
            i6="cc_img6"
            rm1=""
            rm2=""
            rm3=""
            rm4=""
            rm5=""
            rm6=""
            rm7="t"
            rm8="t"
            rm9="t"
            rm10="t"
          />
        </div>
        <div style={{ paddingTop: "50px" }}></div>
        <div style={{ textAlign: "center" }}>
          <div class="column3" id="githubdiv">
            <a href="https://github.com/Nytuo/CosmicComics/releases/latest">
              <img
                alt=""
                src="../images/available_github.png"
                style={{ width: "284px", height: "auto" }}
              />
            </a>
          </div>
          <div class="column3" id="snapdiv">
            <a href="https://snapcraft.io/cosmiccomics">
              <img
                alt="Get it from the Snap Store"
                src="https://snapcraft.io/static/images/badges/en/snap-store-black.svg"
                style={{ width: "284px", height: "auto" }}
              />
            </a>
          </div>
          <div class="column3" id="msdiv">
            <a href="//www.microsoft.com/store/apps/9NFN9CG8TGP7?cid=storebadge&ocid=badge">
              <img
                src="https://developer.microsoft.com/store/badges/images/French_get-it-from-MS.png"
                alt="French badge"
                style={{ width: "284px", height: "auto" }}
              />
            </a>
          </div>
        </div>
        <div style={{ paddingTop: "120px" }}></div>
        <br />
        <div style={{ textAlign: "center" }}>
          <ButtonA link="https://github.com/Nytuo/CosmicComics/releases/latest">
            Télécharger sur GITHUB
          </ButtonA>
          <ButtonA link="https://github.com/Nytuo/CosmicComics">
            Voir le code sur GITHUB
          </ButtonA>
          <div style={{ paddingTop: "5px" }}></div>
        </div>
        <br />
        <h1>Fonctionnalités:</h1>
        <p>
          - Lis les CBR, CBZ, CB7, CBT, ZIP, RAR, 7z, TAR, Folder qui
          contiennent PNG, JPG, JPEG, BMP.
          <br />
          - Affichez vos livres et naviguez dans vos dossiers avec des
          couvertures personnalisées. (automatiquement par extraction ou
          définies manuellement).
          <br />
          - Discord Rich Presence (RPC)
          <br />
          - Support multi-langue (l'anglais (US) et le français (FR) sont
          officiellement supportés mais vous pouvez écrire votre propre, voir
          plus sous la section Langues section)
          <br />
          - Raccourcis clavier et souris (voir plus sur la section Raccourcis
          clavier et souris). section raccourcis)
          <br />
          - Conserver les infos de vos livres et les paramètres de l'app dans un
          JSON sous l'AppData.
          <br />
          - Définissez vos livres comme lus, non lus, en lecture ou favoris et
          notez-les.
          <br />
          - De nombreux paramètres personnalisables.
          <br />
          - Zoom, Couleur de fond automatique, Mode double page, Première page
          vierge, Non. double page pour Horizontal, Mode Manga, Mode Webtoon,
          Plein écran, rotations, Signets, Diaporama, SideBar, Masquer la barre
          de menu.
          <br />
          - Afficher les informations sur les bandes dessinées / mangas.
          <br />
          - Ouvrir un seul ou un dossier entier (recommandé).
          <br />
          - Ouvrir un fichier par drag&Drop, ou l'ouvrir via l'explorateur de
          fichiers (uniquement si vous avez défini Cosmic-Comics comme
          application par défaut pour cette extension).
          <br />
          - Continuer la lecture là où vous vous êtes arrêté et plus encore....
          <br />
        </p>
        <br></br>
        <h1>Changes-Logs:</h1>
        <p>
          Les changeslogs sont directement sur GITHUB
          <ButtonA link="https://github.com/Nytuo/Nytuo-Launcher/releases">
            Voir
          </ButtonA>
        </p>

        <Footer />
      </div>
    );
  }
}
