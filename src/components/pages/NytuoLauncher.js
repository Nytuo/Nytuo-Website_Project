import React, { Component } from "react";
import Footer from "../Footer";
import M from "materialize-css";
import ScreenShotsDisplayer from "../ScreenShotsDisplayer";
import { ButtonA } from "../ButtonA";

export default class NytuoLauncher extends Component {
  componentDidMount() {
    M.Collapsible.init(this.collapsible, []);
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
            <i class="material-icons right">launch</i>Ouvrir le Nytuo Launcher
          </ButtonA>
          <ButtonA link="https://launcher.nytuo.yo.fr/profile.php">
            <i class="material-icons right">launch</i>Ouvrir page Launcher
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
        </p>
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
        />
        <div style={{ paddingTop: "50px" }}></div>
        <div style={{ textAlign: "center" }}>
          <ButtonA link="https://github.com/Nytuo/Nytuo-Launcher/releases/latest">
            <i class="material-icons right">launch</i>Télécharger sur GITHUB
          </ButtonA>
          <ButtonA link="https://github.com/Nytuo/Nytuo-Launcher">
            <i class="material-icons right">launch</i>Voir le code sur GITHUB
          </ButtonA>
          <ButtonA link="help">
            <i class="material-icons right">help_outline</i>Voir l'aide
            (recommandée)
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
          Certaines versions ne sont pas notifié pour raison d’oublie, manque de
          temps ou petits ajouts. Les changesLogs seront maintenant écrient en
          anglais
        </p>
        <br />
        <ul
          class="collapsible expandable"
          ref={(collapsible) => {
            this.collapsible = collapsible;
          }}
        >
          <li>
            <div class="collapsible-header">2021.02.06</div>
            <div class="collapsible-body">
              <span>
                {" "}
                <p>
                  <span class="fixed">fixed</span>Bug for new users because the
                  launcher doesn't create a folder containing the user
                  informations.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2021.01.15</div>
            <div class="collapsible-body">
              <span>
                {" "}
                <p>
                  <span class="enhanced">enhanced</span>License changed from ISC
                  to GNU General Public License V3 (GNU GPLv3)
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2021.01.13</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="new">New</span>Progress bar in taskbar
                </p>
                <p>
                  <span class="fixed">fixed</span>Correction of bugs
                </p>
                <p>
                  <span class="new">new</span>Profile Picture (Global)
                </p>
                <p>
                  <span class="new">new</span>Cryptage of the password and some
                  others things like available games and conection attestation
                </p>
                <p>
                  <span class="enhanced">enhanced</span>Account gestion are no
                  more on the Launcher domain and have changed to the website
                  pages
                </p>
                <p>
                  <span class="enhanced">enhanced</span>Offline mode enhanced
                </p>
                <p>
                  <span class="enhanced">enhanced</span>Redisgn of the launcher
                </p>
                <p>
                  <span class="enhanced">enhanced</span>Connection system has
                  changed and the games page has been replaced by an local page.
                </p>
                <p>
                  <span class="enhanced">enhanced</span>Game Launch design
                </p>
                <p>
                  <span class="enhanced">enhanced</span>Update system
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2020.12.31</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="fixed">fixed</span>Impossible to launch a game
                  directly by launching the launcher. (Error due to splitting
                  the ancient js file into part and I forgot a thing...)
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2020.12.29</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="new">New</span>French and Spanish languages in
                  addition of the English
                </p>
                <p>
                  <span class="fixed">fixed</span>Correction of bugs
                </p>
                <p>
                  <span class="new">new</span>You can change the languages in
                  the settings.
                </p>
                <p>
                  <span class="new">new</span>The Profile page has been updated
                  to correspond with the selected languages.
                </p>
                <p>
                  <span class="new">new</span>the JS file is now split in many
                  other JS files in the 'js/' directory.
                </p>

                <p>
                  <span class="enhanced">enhanced</span>the JS file is now split
                  in many other JS files in the 'js/' directory.
                </p>
                <p>
                  <span class="enhanced">enhanced</span>Format of version
                  change: The version is now at this format [YEAR].[MONTH].[DAY]
                  corresponding to the date of publication.
                </p>
                <p>
                  <span class="enhanced">enhanced</span>About text is now
                  shorter
                </p>
                <p>
                  <span class="enhanced">enhanced</span>Selecting a Games Folder
                  is now in a dedicated page at the launch of the launcher.
                </p>
                <p>
                  <span class="enhanced">enhanced</span>Update for windows: One
                  click Installer is back (it is easier for installing) and a
                  Batch file is started to launch after 10 seconds the update
                  file (because in some computers the update begins before the
                  launcher close and create an error).
                </p>

                <p>
                  <span class="fixed">removed</span>Old js.js file
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.011.000</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="new">New</span>New Design (Material Design using
                  Materialize-css)
                </p>
                <p>
                  <span class="fixed">fixed</span>Correction of bugs
                </p>
                <p>
                  <span class="new">new</span>Restart option in settings
                </p>

                <p>
                  <span class="fixed">removed</span>Old Notification system
                </p>

                <p>
                  <span class="fixed">removed</span>Old Overlay
                </p>
                <p>
                  <span class="enhanced">enhanced</span>News page now on the
                  launcher website to avoid download it each time
                </p>
                <p>
                  <span class="enhanced">enhanced</span>Games launch with the
                  same window on Windows and Linux
                </p>
                <p>
                  <span class="enhanced">enhanced</span>Download / repair /
                  re-install user-interface, now say what is going on
                </p>

                <p>
                  <span class="fixed">removed</span>Old navigation bar
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.010.002</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="new">New</span>ShootFighter Origins game added
                </p>
                <p>
                  <span class="enhanced">Enhanced</span>Game Update loop issue
                </p>
                <p>
                  <span class="enhanced">Enhanced</span>Game page look (logo
                  instead of cover in the game page)
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.010.001</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="new">New</span>The Launcher can now force the
                  update (update manually by redownload the latest installer or
                  appimage)
                </p>
                <p>
                  <span class="updated">Updated</span>"Check For Update" Button
                  is now "Force Update"
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.10.0</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="enhanced">Enhanced</span>Windows Shortcuts now
                  launch the Launcher before launch the game.
                </p>
                <p>
                  <span class="enhanced">Enhanced</span>Windows Shortcuts are
                  now in URL Format instead of the path to the game.
                </p>
                <p>
                  <span class="updated">Updated</span>Connection form now
                  support auto-connection to your account
                </p>
                <p>
                  <span class="fixed">Fixed</span>Some bugs on Linux and Windows
                </p>
                <p>
                  <span class="new">New</span>Dedicated Launching window for
                  Launcher load and games load.
                </p>
                <p>
                  <span class="new">New</span>News page have now a music playing
                  in background
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.9.2</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="enhanced">Enhanced</span>Repair will now generate
                  a file of all files in the game folder and compare to the
                  downloaded one.
                </p>
                <p>
                  <span class="updated">Updated</span>Website & Discord &
                  feedback form
                </p>
                <p>
                  <span class="fixed">Fixed</span>Achievements not showing
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.9.1</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="fixed">Fixed</span>Linux Logo, loading page and
                  games pages fix
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.9.0</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="fixed">Delete</span>All games pages
                </p>
                <p>
                  <span class="new">New</span>Global game page who can adapt to
                  the cible game.
                </p>
                <p>
                  <span class="enhanced">Enhanced</span>NSIS Assisted installer
                  updated to launch the launcher after finish
                  installing/upgrading.
                </p>
                <p>
                  <span class="enhanced">Enhanced</span>Rename of the
                  Notification system in the code (nothings change for user)
                </p>
                <p>
                  <span class="enhanced">Enhanced</span>The Loading page now
                  have a Nytuo logo Animation and a gif play according to the
                  loading message.{" "}
                </p>
                <p>
                  <span class="enhanced">Enhanced</span>The Download system now
                  show the speed, time remaining and the size downloaded of the
                  total size.
                </p>
                <p>
                  <span class="new">New</span>Portable version.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.8.4</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Updated</span>Electron version 9.0.3
                  with chromium 83.
                </p>
                <p>
                  <span class="enhanced">Enhanced</span>NSIS installer for
                  Windows now assisted to patch a bug when the launcher don't
                  quit too quickly and the update failed
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.8.3</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="fixed">Fixed</span>Code compile error provide
                  out-dated code
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.8.2</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="enhanced">Enhanced</span>New icons are available
                  for both the launcher and website
                </p>
                <p>
                  <span class="new">New</span>Pages transition added, smooth go
                  on every pages.
                </p>
                <p>
                  <span class="new">New</span>The Nytuo Website and the Nytuo
                  Launcher have now an account system for attribut games (if I
                  made paid game, all free games are available for free),
                  Username (for in-game username(if the game allow a custom
                  Username)) and more. You can now create an account and get
                  started for free.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.8.0</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Updated</span>Page d'actualités
                </p>
                <p>
                  <span class="updated">Updated</span>Linux Support are now
                  better
                </p>
                <p>
                  <span class="enhanced">Enhanced</span>Look : the Nytuo
                  Launcher was redesigned
                </p>
                <p>
                  <span class="enhanced">Enhanced</span>locations of the
                  achievements for the games are now in Documents (wait until
                  games beeing updated)
                </p>
                <p>
                  <span class="enhanced">Enhanced</span>Achievements are now
                  directly on the game page or in the library (Home)
                </p>
                <p>
                  <span class="new">New</span>The "Games" folder is now movable
                </p>
                <p>
                  <span class="new">New</span>The Nytuo Launcher have now to be
                  installed on Windows (for update reason) / On linux, just
                  update the AppImage (Under Desktop)
                </p>
                <p>
                  <span class="new">New</span>Add a new folder named
                  "nytuolauncher_data" on Documents (linux) or just before the
                  folder of the Launcher (windows), for store locations and
                  things can't be on the main folder
                </p>
                <p>
                  <span class="updated">Updated</span>The Nytuo Launcher have
                  now a fonctional Update System (I hope)
                </p>
                <p>
                  <span class="fixed">Delete</span>MacOSX Support in Nytuo
                  Launcher and for download. Reason I don't have a Mac to signed
                  and publish
                </p>
                <p>
                  <span class="fixed">Delete</span>All achievements pages
                </p>
                <p>
                  <span class="new">New</span>Windows users can now access to a
                  beta program.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.7.4</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Mis à jour</span>Page d'actualités
                </p>
                <p>
                  <span class="updated">Mis à jour</span>Notification : passage
                  par fenètre secondaire, design plus propre
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Page de chargement
                </p>
                <p>
                  <span class="new">Nouveau</span>Page Achivements et page
                  secondaire pour les jeux pris en charge
                </p>
                <p>
                  <span class="new">Nouveau</span>Système d'achivements (succès)
                  pour les jeux supportés.
                </p>
                <br />
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.7.0 | 2.7.1 | 2.7.2 | 2.7.3</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Mis à jour</span>Page d'actualités
                </p>
                <p>
                  <span class="fixed">Fixé</span>Erreur du systeme de mise à
                  jour
                </p>
                <p>
                  <span class="fixed">Supprimer</span>Nytuo Launcher Updater
                  (Updater maintenant intégrer dans le launcher)
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Design
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Support petit-ecran
                  (ainsi que sur le site)
                </p>
                <p>
                  <span class="new">Nouveau</span>Ajout de la page News
                  (actualités)
                </p>
                <p>
                  <span class="new">Nouveau</span>Launcher codé avec HTML5 CSS3
                  et JS
                </p>
                <p>
                  <span class="new">Nouveau</span>Launcher Disponible sur la
                  plateforme GitHub
                </p>
                <p>
                  <span class="new">Nouveau</span>Launcher recréé avec Electron
                  pour un support multi-plateformes
                </p>
                <p>
                  <span class="new">Nouveau</span>Possibilité de jouer dans le
                  launcher, avec une connexion internet, aux jeux sans
                  téléchargement
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.6.5.1</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Mis à jour</span>Mise à jour de
                  L'updater
                </p>
                <p>
                  <span class="fixed">Fixé</span>Bug de la fenetre de
                  message,pour lancer le jeu SansNom sur internet,les boutons
                  changaient de texte.
                </p>
                <p>
                  <span class="fixed">Supprimer</span>effet de transparence
                  supprimer
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>apparence
                </p>
                <p>
                  <span class="new">Nouveau</span>Posiblité de télécharger
                  l'updater si il n'est pas disponible
                </p>
                <p>
                  <span class="new">Nouveau</span>Animation de changement de
                  jeux(image d'arriere plan)
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.6.5.0</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="fixed">Fixé</span>correction de bugs et de faute
                  orthographiques
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>changement de
                  design/look retravailler
                </p>
                <p>
                  <span class="new">Nouveau</span>Recréation du projet
                </p>
                <p>
                  <span class="new">Nouveau</span>Ajout d’images en arrière plan
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.6.4.0</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="fixed">Supprimer</span>msgbox (permettant
                  d’affiche un message) de .NET abandonner
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>bouton remplacer par
                  des icônes
                </p>
                <p>
                  <span class="new">Nouveau</span>ajout d’une fenêtre ayant les
                  mêmes attributs qu'une msgbox mais personnalisé.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.6.3.2</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="enhanced">Améliorer</span>bar de progression
                  aligner
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>agrandissement du
                  logiciel
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Boutons réorganiser
                </p>
                <p>
                  <span class="new">Nouveau</span>ajout du bouton d’accès au
                  sauvegarde (pour les jeux dotés de cette fonctionnalité)
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.6.3.x (pas de 2.6.2.x)</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Mis à jour</span>NL_UIU mis à jour et
                  renommé NL_Updater.
                </p>
                <p>
                  <span class="fixed">Fixé</span>
                </p>
                <p>
                  <span class="fixed">Supprimer</span>
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Allègement de
                  l’interface.
                </p>
                <p>
                  <span class="new">Nouveau</span>Reconstruction du launcher
                  après avoir perdu le projet.
                </p>
                <p>
                  <span class="new">Nouveau</span>Reconstruction avec MetroSet
                  UI.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.6.1.x</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Mis à jour</span>Changement du système
                  de fichiers : Games to NLGames
                </p>
                <p>
                  <span class="updated">Mis à jour</span>NLGames et Download
                  sont à l’extérieur du dossier Nytuo Launcher.
                </p>
                <p>
                  <span class="updated">Mis à jour</span>Interface mis à jour et
                  centraliser.
                </p>
                <p>
                  <span class="fixed">Supprimer</span>Abandon des incrustation
                  de vidéo YouTube.
                </p>
                <p>
                  <span class="fixed">Supprimer</span>Abandon de PatchMaker de
                  ClickTeam pour les mise à jour.
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Amélioration générale
                  et correction de Bugs.
                </p>
                <p>
                  <span class="new">Nouveau</span>Mises à jour, installation et
                  désinstallation gérer par le NL_UIU.
                </p>
                <p>
                  <span class="new">Nouveau</span>Création du logiciel externe
                  NL_UIU (Update & Install & Uninstall)
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.6.0.2</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Mis à jour</span>Recréation de la page A
                  Propos.
                </p>
                <p>
                  <span class="updated">Mis à jour</span>Recodage entier du
                  launcher
                </p>
                <p>
                  <span class="updated">Mis à jour</span>Recréation des
                  paramètres et paramètres jeux.
                </p>
                <p>
                  <span class="fixed">Supprimer</span>TBMP (lecteur audio)
                  supprimé
                </p>
                <p>
                  <span class="fixed">Supprimer</span>abandon des notifications
                  Windows.
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Amélioration du système
                  de mise à jour.
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Amélioration de
                  l’interface graphique.
                </p>
                <p>
                  <span class="new">Nouveau</span>Mise à jour directe par le
                  bouton jouer.
                </p>
                <p>
                  <span class="new">Nouveau</span>Notification personnaliser
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Correction de bugs et
                  amélioration générale
                </p>
                <p>
                  <span class="new">Nouveau</span>Incorporation de vidéo
                  YouTube.
                </p>
                <br />
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.5.3.x</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="fixed">Fixé</span>Correction du Bug « Value : 105
                  » lors du chargement des fichiers du jeu.
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Amélioration de
                  l’interface
                </p>
                <p>
                  <span class="new">Nouveau</span>Ajout du protocole de
                  lancement du launcher en cas d’erreur.
                </p>
                <p>
                  <span class="new">Nouveau</span>Ajout du systeme de
                  personnalisation des couleurs.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.5.2.2</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="enhanced">Améliorer</span>Correction de bugs et
                  modernisation de l’interface de téléchargement et de
                  lancement.
                </p>
                <p>
                  <span class="new">Nouveau</span>Ajout du TBMP (logiciel
                  multimédia)
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.5.0.x</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Mis à jour</span>Recréation du launcher
                  sans plug-in Tiers
                </p>
                <p>
                  <span class="fixed">Supprimer</span>Abandon du plug-in «
                  Material Skin »
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Autres ajout et
                  amélioration de l’interface.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.4.1.1</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="enhanced">Améliorer</span>Correction de bug
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Correction graphique
                  des diviseurs.
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>
                </p>
                <p>
                  <span class="new">Nouveau</span> Mise à jour des jeux de
                  manière automatique.
                </p>
                <p>
                  <span class="new">Nouveau</span> Icone de notification.
                </p>
                <p>
                  <span class="new">Nouveau</span>Mise à jour manuelle.{" "}
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.4.0.x</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="new">Nouveau</span>Utilisation du plug-in tiers
                  MaterialSkin
                </p>
                <p>
                  <span class="new">Nouveau</span>Refonte du launcher avec
                  Material Design (même que Google)
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.3.2.3</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Mis à jour</span>Thème noël mis à jour.
                </p>
                <p>
                  <span class="fixed">Fixé</span>Correction du bug « ressources
                  manquante »
                </p>
                <p>
                  <span class="new">Nouveau</span>Changer le thème
                  automatiquement selon la période.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.3.2.1</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="fixed">Fixé</span>Taille du logiciel diminué : de
                  120 Mio à 8 Mio
                </p>
                <p>
                  <span class="fixed">Supprimer</span>Abandon de la musique du
                  dev par les musiques des thèmes.
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Correction de bugs.
                </p>
                <p>
                  <span class="new">Nouveau</span>Mise en place de la
                  fonctionnalités des thèmes.5 inclus et 5 téléchargeables
                  (indisponible).
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.3.2.0</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Mis à jour</span>Changement de musique.
                </p>
                <p>
                  <span class="fixed">Fixé</span>Correction de bug
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Changement de
                  l’interface.
                </p>
                <p>
                  <span class="new">Nouveau</span>Ajout de fonctionnalités.
                </p>
                <p>
                  <span class="new">Nouveau</span>Mise en place des paramètres.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.3.1.x</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Mis à jour</span>Passage au framework
                  4.7.2.
                </p>
                <p>
                  <span class="fixed">Fixé</span>correction de bugs mineurs.
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>progressBar amélioré
                </p>
                <p>
                  <span class="new">Nouveau</span>A chaque mise à jour une
                  nouvelle musique.
                </p>
                <p>
                  <span class="new">Nouveau</span>Vérification de version pour
                  tous les jeux
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.3.0.2</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="fixed">Fixé</span>Correction du bug de
                  téléchargement de Firewall Defender.
                </p>
                <p>
                  <span class="new">Nouveau</span> Mise en place de manifeste et
                  d’assembly pour eviter la detection de faux-possitifs des
                  antivirus.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.3.0.1</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="fixed">Fixé</span>Correction de bug
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Correction de faute
                  d’orthographes.
                </p>
                <p>
                  <span class="new">Nouveau</span>Interface de lancement
                  séparer.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">2.3.0.x</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <span class="updated">Mis à jour</span>Recréation du launcher
                  sans plug-in tiers.
                </p>
                <p>
                  <span class="fixed">Supprimer</span>Abandon de BUNIFU UI pour
                  des problème graphiques empêchant certains fonctionnalités.
                </p>
                <p>
                  <span class="enhanced">Améliorer</span>Changement de
                  l’interface vers une plus basique.
                </p>
                <p>
                  <span class="new">Nouveau</span>Ajout du changeLogs sur le
                  site
                </p>
                <p>
                  <span class="new">Nouveau</span>Ajout de la section aide sur
                  le site
                </p>
                <p>
                  <span class="new">Nouveau</span>Ajout des feedback pour le
                  Nytuo Launcher et le site
                </p>
              </span>
            </div>
          </li>
        </ul>
        <Footer />
      </div>
    );
  }
}
