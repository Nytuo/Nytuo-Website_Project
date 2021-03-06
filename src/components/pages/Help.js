import React, { Component } from "react";
import Footer from "../Footer";

export default class Help extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <meta name="robots" content="noindex"></meta>
        <h1>Page d'aide Nytuo (Site, Jeux, Launcher) :</h1>
        <p>
          Cette page permet de vous aider en cas de problème avec le Nytuo
          Launcher, le site ou même les jeux.
          <br />
          Cette page est suceptible à des changements.
        </p>
        <h1>Nytuo Launcher :</h1>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Avertissements
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Le Nytuo Launcher est souvent détecter par les antivirus comme
                un virus car il modifie les dossiers et les fichiers du Launcher
                et télécharge depuis internet. De plus, le Nytuo-Launcher
                n'étant pas signer les systemes d'exploitation(Windows, Linux),
                Antivirus et navigateurs internet vous signalerons que le
                launcher est suceptible d'être une menace. Ce n'est pas le cas,
                l'entiereté du projet est open-source et consultable sur Github.
                Le projet est créé directement sur GitHub. Vous pouvez vérifier
                les fichiers avec Virus Total qui permet l’analyse sur plusieurs
                base de données antivirus (lien par fichier disponible{" "}
                <a
                  href={
                    "https://github.com/Nytuo/Nytuo-Launcher/releases/latest"
                  }
                >
                  ici
                </a>
                ). Si vous souhaiter utilisé le launcher mais que votre
                antivirus le détecte, il faut restauré les fichiers en
                quarantaine et mettre le dossier générale en exclusion d’analyse
                et de lancement. Paramètres différents entre les antivirus.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Téléchargement, installation et lancement
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {/*<h1>Windows : </h1>
                <p>
                  I/ En cliquant sur le boutton 'Télécharger le Nytuo Launcher'
                  sur la page du site concernant le Nytuo-Launcher, Télécharger
                  sur Github le fichier vous convenant.
                </p>
                <p>
                  Note : Pour une installation calssique sur votre ordinateur,
                  choisissez, le "Nytuo-Launcher-Setup-[dernière version].exe",
                  pour une version portable choisissez,le
                  "Nytuo-Launcher-[dernière version]-win.zip" et allez voir la
                  section "Portable Edition"
                </p>
                <p style={{fontWeight:"bold"}}>Uniquement pour ce qui ont choisi le ".exe" </p>
                <p>II/Lancer l'installeur, toutes est automatique!</p>
                  <p>III/Après l'installation, ouvrer le Nytuo launcher. Un raccourcie à était créé sur le
                  bureau.
                </p>

                <h1>Linux : </h1>
                <p>
                  I/ En cliquant sur le boutton 'Télécharger le Nytuo Launcher'
                  sur la page du site concernant le Nytuo-Launcher, Télécharger
                  sur Github le fichier vous convenant.
                </p>
                <p>
                  Note : Pour une utilisation classique sur votre ordinateur,
                  choissisez,le ".appimage" / ".deb" / ".snap". Pour une version portable,
                  choisissez,".zip" ne contenant pas la "windows" ou "win" dans le nom et allez
                  voir la section "Portable Edition".
                </p>
                <p>
                  II/A/ Vous avez choisi la version ".snap" (recommender):<br/>
                  Ouvrez un terminal dans le dossier où se trouve le fichier et taper : <br/><strong>snap install nytuo_launcher_file --dangerous --classic</strong>
                  <br/>Où <strong>nytuo_launcher_file</strong> est le nom du fichier avec l'extension (<strong>.snap</strong>).<br/>
                  Exemple --> <strong>snap install nytuo-launcher_2.23.1_amd64.snap --dangerous --classic</strong>
                </p>
                <p>II/B/ Vous avez choisi la version ".deb":<br/>
                  Ouvrez le fichier et cliquer sur le boutton "Installer" dans la page qui s'ouvre (comme tout autre programme en .deb)<br/>
                  Remarque: ce format de fichier fonctionne uniquement sur les distributions linux debian ou basé sur debian (comme Ubuntu, Mint, Zorin, etc...)
                </p>
                <p>
                  II/C/ Vous avez choisi la version ".appimage":<br/>
                  Ouvrez les propriétés du fichier et dans "Permissions" cochez la case "Lancer ce fichier en tant que programme" et ouvrez le fichier.<br/>
                  Remarque: Ce fichier peut etre placé n'importe où et le Nytuo-Launcher n'est pas installer sur votre machine. Une fois l'utilisation terminer et l'ordinateur redemarrer, toute trace interne du fichier (exclus de fichier lui même) comme les cookies, personalisations et connexions au compte seront supprimés.
                </p>
                <h1>Général :</h1>
                <p>
                  Lors du premier lancement du launcher vous serez inviter à
                  selectionner un dossier où stocker les jeux (ce dossier doit
                  être dédier et exclusif. Il peut provenir d'une autre
                  installation et déjà contenir les jeux(en respectant la
                  hiérarchisation)). Vous devrez également choisir une langue
                  (Français, Anglais ou Espagnol).
                  Une connexion a un compte tiers (Google, Microsoft, Twitter, Github ou Facebook) est disponible et recommander.
                  Une connexion (ou création) a/d'un compte Nytuo est disponible.
                  Une connexion en tant qu'anonyme est disponible et non recommander.
                  La connexion de compte tiers et Nytuo est rendu possible grâce à Google Firebase. Le tout est sécurisé.
                </p>*/}
                <a
                  href={"https://github.com/Nytuo/Nytuo-Launcher#installation-"}
                >
                  https://github.com/Nytuo/Nytuo-Launcher#installation-
                </a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading11">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse11"
                aria-expanded="false"
                aria-controls="flush-collapse11"
              >
                Déconnexion
              </button>
            </h2>
            <div
              id="flush-collapse11"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading11"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <a href={"https://github.com/Nytuo/Nytuo-Launcher#logout"}>
                  https://github.com/Nytuo/Nytuo-Launcher#logout
                </a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Dossier des jeux
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Pour que vous soyez plus libre, le dossier des jeux est
                dynamique, c'est à vous de le choisir lors de la première
                utilisation ou dans les paramètres pour le changer.Il peut
                provenir d'une autre installation et déjà contenir les jeux(en
                respectant la hérarchisation (Games\[ID]\[Game files]))).
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Backup des jeux
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Dans le cadre d'une sauvegarde des jeux manuellement,
                  <br />
                  I/Dans les paramètres se trouve l'emplacement du dossier
                  "Games" contenant les jeux.Suivez cette emplacement dans
                  l'explorateur de fichier.
                  <br />
                  II/ Copier et coller le dossier "Games" ailleurs sur votre
                  machine. <br />
                  Note: Le dossier "Games" se trouve en cas d'erreur dans vos
                  Documents sur Linux ou au dossier précédent le dossier du
                  Nytuo-Launcher sur Windows.Ce dossier étant attribué
                  dynamiquement (c'est à vous de déterminer son emplacement lors
                  de la première utilisation), il est difficile de pouvoir vous
                  aider plus...
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Mettre à jour le Nytuo Launcher
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {/*<p>
                  Sur Windows:<br/> Si une mise à jour est disponible, le Nytuo
                  Launcher la télécharge au démarrage, se ferme et lance un
                  Batch (fichier en .bat lançant un invite de commandes (CMD))
                  de manière à lancer le programme de mise à jour de manière
                  différé et que le launcher puisse se fermer correctement.
                  <br />
                  Sur Linux:<br/> Ayant 3 fichiers différents, il y a 3 façon differentes de faire, toutefois le launcher téléchargera toujours le fichier même si vous devez l'executer manuellement:<br/>
                  Pour le .snap:<br/>
                  Ouvrez un terminal et taper (dans le même dossier que la où se trouve le fichier)<br/>
                  <strong>snap remove nytuo-launcher</strong><br/>
                  <strong>snap install nytuo_launcher_file --dangerous --classic</strong><br/>
                  Où <strong>nytuo_launcher_file</strong> est le nom du fichier en <strong>.snap</strong><br/>
                  Pour le .appimage:<br/>
                  La mise à jour, si disponible se télécharge et sera
                  accessible directement sur le bureau Linux. Vous pourrez alors
                  la déplacé et même supprimer l'autre version manuellement. A noter que vous devrez recocher la case d'execution en tant que programme dans les permissions comme lors de l'installation.
                  <br />
                  Pour le .deb<br/>
                  Vous devez juste lancer le fichier et suivre l'installation. Si cela ne suffit pas déinstaller l'ancienne version et installer la nouvelle.<br/>
                  Note : Vous pouvez forcer la mise à jour du launcher depuis
                  les paramètres
                  <br />
                  Note II : en mode portable, les mises à jour sont désactiver,
                  le guide pour mettre à jour le launcher en mode portable se
                  trouve dans la section "portable".
                </p>*/}
                <a href={"https://github.com/Nytuo/Nytuo-Launcher#update"}>
                  https://github.com/Nytuo/Nytuo-Launcher#update
                </a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                Déinstallation
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Sur Windows: <br />
                  <br />
                  La déinstallation se fait en trois temps:
                  <br />
                  (Seulement si vous souhaiter également supprimer les jeux)
                  <br />
                  Aller dans le Nytuo Launcher, dans les paramètres, regardé la
                  ligne concernant l'emplacement du dossier des jeux.Fermer le
                  launcher et aller à cette emplacement et supprimer-le.
                  <br />
                  I/Déinstaller le logiciel comme n'importe qu'elle autres, dans
                  les paramètres.
                  <br />
                  II/Dans le dossier "Local" de "Appdata", trouver le dossier
                  "nytuolauncher" et "nytuolauncher_data" et supprimer les.
                  <br />
                  III/Vous pouvez effectuer un redémarrage au besoin
                  <br />
                  Vous venez de supprimer le Launcher de votre machine
                  <br />
                  <br />
                  Sur Linux :<br />
                  (Seulement si vous souhaiter également supprimer les jeux)
                  <br />
                  Aller dans le Nytuo Launcher, dans les paramètres, regardé la
                  ligne concernant l'emplacement du dossier des jeux.Fermer le
                  launcher et aller à cette emplacement et supprimer-le.
                  <br />
                  I/A/ Pour ceux qui ont le .appimage:
                  <br />
                  Supprimer le .appimage du Nytuo Launcher
                  <br />
                  I/B/ Pour ceux qui ont le .deb
                  <br />
                  Déinstaller le comme toute autre application en .deb (dans la
                  liste des logiciels installer dans la logiteque)
                  <br />
                  I/C/ Pour ceux qui ont le .snap:
                  <br />
                  Ouvrez un terminal et taper:
                  <br />
                  <strong>snap remove nytuo-launcher</strong>
                  <br />
                  II/Supprimer dans le dossier "Documents", le dossier
                  "nytuolauncher_data".
                  <br />
                  IV/Redémarrer l'ordinateur pour enlever toutes traces local.
                  <br />
                  Vous venez de supprimer le Launcher de votre machine
                  <br />
                  <br />
                  Pour les versions Portable :<br />
                  Mettez le dossier contenant les jeux, le launcher et le
                  nytuolauncher_data à la corbeille et videz-là.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSeven"
                aria-expanded="false"
                aria-controls="flush-collapseSeven"
              >
                Portable Edition
              </button>
            </h2>
            <div
              id="flush-collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSeven"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Le Nytuo Launcher existe en version portable. Elle ne
                  nécessite donc pas d'installation.Cependant, les mises à jour
                  automatiques sont désactivés et le dossier des jeux ne peut
                  être choisi.
                </p>
                <p>
                  I/Pour obtenir la version portable du launcher, télécharger
                  depuis GitHub le zip : "Nytuo-Launcher-[dernière
                  version]-win.zip" pour windows et le zip :
                  "nytuolauncher-[dernière version].zip" pour Linux.Où [dernière
                  version] correspond à la dernière version du launcher.
                </p>
                <p>
                  II/Créer un dossier "Nytuo" pour accueillir le tout (le nom de
                  ce dossier n'a pas d'importance mais c'est logique).Dans ce
                  dossier créer un dossier "Nytuo-Launcher"(encore une fois, le
                  nom n'a pas d'importance) puis extrayer le contenu de
                  l'archive dans ce dossier.
                </p>
                <p>
                  III/Aller dans le dossier "Nytuo-Launcher" puis aller dans :
                  "Resources/app/", ouvrez le fichier "portable.txt" et modifier
                  le "false" en "true".Cela permet d'activer les fonctionnalités
                  portable. Sinon le launcher fonctionnera mais les mises à jour
                  causeront problèmes et le dossier des jeux ne sera pas
                  portable.
                </p>
                <p>
                  IV/Par la suite vous avez juste, dans le dossier
                  "Nytuo-Launcher" a lancé le "Nytuo-Launcher.exe", pour Windows
                  et "Nytuo-Launcher" sous Linux (A noter que vous devrez
                  peut-être coché la case "Executer en tant que programme" dans
                  les propriétés rubrique "Permissions".
                </p>
                <p>
                  Pour les mises à jour, supprimer le contenu du dossier
                  "Nytuo-Launcher" (mais pas le dossier) et refaite les étapes
                  depuis la I sans créé de nouveau dossiers et en utilisant ceux
                  existants.{" "}
                </p>
                <p>
                  Pour déinstaller le launcher, vous devez mettre le dossier
                  "Nytuo" à la corbeille et la vider, si vous voulez garder les
                  jeux ne supprimer que les dossier "Nytuo-Launcher" et
                  "nytuolauncher_data".
                </p>
                <p>
                  Note : Si vous devez déplacer le logiciel, vous devez déplacer
                  le dossier "Nytuo" en entier.
                  <br />
                  Note II : le launcher va créé deux nouveaux dossiers dans le
                  dossier "Nytuo".Un pour les jeux, l'autre pour les paramètres
                  externes.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseEight"
                aria-expanded="false"
                aria-controls="flush-collapseEight"
              >
                En cas d'erreurs
              </button>
            </h2>
            <div
              id="flush-collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingEight"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Visiter la section "FeedBack" du site ou rendez-vous sur
                  GitHub et créé une nouvelle "issue"
                </p>
                <p>Je corrige les bugs quand je les connais au plus vite...</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseNine"
                aria-expanded="false"
                aria-controls="flush-collapseNine"
              >
                Notes
              </button>
            </h2>
            <div
              id="flush-collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingNine"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  I/ Sous Linux, pendant l'execution d'un jeu le launcher ne
                  fonctionne pas ! Vous devez fermer le jeu pour retrouver
                  l'accès au launcher.
                </p>
                <p>
                  II/ Sous Linux, Pour lancer le launcher dans le cas où,
                  celui-ci ne ce lance pas, veuillez à cocher la case dans
                  l'onglet "permissions" des "propriétés" du fichier et
                  réessayer.Si l'erreur persiste, envoyer un feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1>Générale :</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTen"
                aria-expanded="false"
                aria-controls="flush-collapseTen"
              >
                Comptes
              </button>
            </h2>
            <div
              id="flush-collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTen"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  <strong>Intro et avertissement:</strong>
                  <br />
                  Depuis la dernière mise à jour en date du 09/04/2021 pour le
                  launcher et de quelques jours plus tot pour le site internet,
                  le systeme de compte est maintenant gérer par Google Firebase,
                  permettant la connexion avec des services comme Google,
                  Github, Twitter, Microsoft ou encore Facebook et bien sûre
                  toujours avec la combinaison mail/ mot de passe.
                  <br />
                  La connexion est gérer par FireBase, tout est sécuriser. Pour
                  plus d'informations, aller directement sur le site de Google
                  Firebase ou poser votre question dans la rubrique FeedBack.
                  <br />
                  Vous pouvez bien sûre aller consulter le project du site sur{" "}
                  <a href="https://github.com/Nytuo/Nytuo-Website_Project">
                    GitHub
                  </a>
                  .<br />
                  <strong>Connexion au compte dans le Nytuo-Launcher:</strong>
                  <br />
                  1.Quand la page de connexion apparait, connecter vous ! 2.Un
                  message apparaitera après vous être connecté. Vous allez
                  devoir fermer tout fenêtre du Launcher et relancer ce dernier.
                  3.La connexion s'effectue tout seul automatiquement et le
                  launcher continu vers la page principale. Si jamais vous
                  abandonnez la connexion (vous quittez le launcher avant/sans
                  de vous être connecté), le prochain lancement vous aurez un
                  message qui vous demandera de fermer les fenêtre et de
                  redémarrer le launcher. En cas d'erreur envoyer moi un
                  feedback.
                  <br />
                  <strong>Déconnexion du compte sur le Launcher</strong>
                  <br />
                  Connecter dans le launcher depuis n'importe qu'elle page
                  cliquer dans la bar de navigation à gauche sur 'se
                  déconnecter'. Sur Windows, un CMD se lance (tout est
                  automatique) et au bout de 5 secondes, apres fermeture du
                  launcher, il vous déconnecte en supprimant toutes traces de
                  votre compte dans le Launcher. Sur Linux, cela est un peu
                  différent, vous devrez ouvrir un Terminal et mettre les
                  commandes dans l'ordre :{" "}
                  <strong>cd ~/snap/nytuo-launcher/x1/.config</strong> et{" "}
                  <strong>rm -rf Nytuo-Launcher</strong>. Vous pouvez alors
                  redémarrer le launcher et vous Connectez.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1>Questionnements :</h1>
        <p>Visiter la section "FeedBack" du site</p>
        <Footer />
      </div>
    );
  }
}
