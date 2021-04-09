import React, { Component } from "react";
import M from "materialize-css";
import Footer from "../Footer";

export default class Help extends Component {
  componentDidMount() {
    M.Collapsible.init(this.collapsible, []);
    M.Collapsible.init(this.collapsible2, []);

  }
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
        <ul
          class="collapsible"
          ref={(collapsible) => {
            this.collapsible = collapsible;
          }}
        >
          <li>
            <div class="collapsible-header">Avertissements</div>
            <div class="collapsible-body">
              <span>
                <p>
                  Le Nytuo Launcher est souvent détecter par les antivirus comme
                  un virus car il modifie les dossiers et les fichiers du
                  Launcher.Vous pouvez vérifier les fichiers avec Virus Total
                  qui permet l’analyse sur plusieurs base de données.Si vous
                  souhaiter utilisé le launcher mais que votre antivirus le
                  détecte, il faut restauré les fichiers en quarantaine et
                  mettre le dossier générale en exclusion d’analyse et de
                  lancement. Paramètres différents entre les antivirus.
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              Téléchargement, installation et lancement
            </div>
            <div class="collapsible-body">
              <span>
                <h1>Windows : </h1>
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
                <p>(Uniquement pour ce qui ont choisi le ".exe" )</p>
                <p>II/Lancer l'installeur, toutes est automatique!</p>
                <p>
                  III/Windows : Après l'installation, le Nytuo launcher s'ouvre
                  automatiquement. Un raccourcie à également était créé sur le
                  bureau.
                </p>
                <p>
                  Lors du premier lancement du launcher vous serez inviter à
                  selectionner un dossier où stocker les jeux (ce dossier doit
                  être dédier et exclusif. Il peut provenir d'une autre
                  installation et déjà contenir les jeux(en respectant la
                  hiérarchisation)). Vous devrez également choisir une langue
                  (Français, Anglais ou Espagnol)
                </p>
                <h1>Linux : </h1>
                <p>
                  I/ En cliquant sur le boutton 'Télécharger le Nytuo Launcher'
                  sur la page du site concernant le Nytuo-Launcher, Télécharger
                  sur Github le fichier vous convenant.
                </p>
                <p>
                  Note : Pour une utilisation classique sur votre ordinateur,
                  choissisez,"Nytuo-Launcher-Setup-[dernière
                  version].AppImage".Pour une version portable,
                  choisissez,"nytuolauncher-[dernière version].zip" et allez
                  voir la section "Portable Edition"{" "}
                </p>
                <p>
                  II/Clique droit sur le ".appimage" puis "propriétés".Cocher
                  dans "permissions" la case "Executer comme une
                  application".Double cliques sur le fichier ".appimage" pour
                  l'executer.
                </p>
                <p>
                  Lors du premier lancement du launcher vous serez inviter à
                  selectionner un dossier où stocker les jeux (ce dossier doit
                  être dédier et exclusif. Il peut provenir d'une autre
                  installation et déjà contenir les jeux(en respectant la
                  hiérarchisation)). Vous devrez également choisir une langue
                  (Français, Anglais ou Espagnol)
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Dossier des jeux</div>
            <div class="collapsible-body">
              <span>
                <p>
                  Pour que vous soyez plus libre, le dossier des jeux est
                  dynamique, c'est à vous de le choisir lors de la première
                  utilisation ou dans les paramètres pour le changer.Il peut
                  provenir d'une autre installation et déjà contenir les jeux(en
                  respectant la hérarchisation (Games\[ID]\[Game files]))).
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Backup des jeux</div>
            <div class="collapsible-body">
              <span>
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
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              Mettre à jour le Nytuo Launcher
            </div>
            <div class="collapsible-body">
              <span>
                <p>
                  Sur Windows: Si une mise à jour est disponible, le Nytuo
                  Launcher la télécharge au démarrage, se ferme et lance un
                  Batch (fichier en .bat lançant un invite de commandes (CMD))
                  de manière à lancer le programme de mise à jour de manière
                  différé et que le launcher puisse se fermer correctement.
                  <br />
                  Sur Linux: La mise à jour, si disponible se télécharge et sera
                  accessible directement sur le bureau Linux. Vous pourrez alors
                  la déplacé et même supprimer l'autre version manuellement
                  <br />
                  Note : Vous pouvez forcer la mise à jour du launcher depuis
                  les paramètres
                  <br />
                  Note II : en mode portable, les mises à jour sont désactiver,
                  le guide pour mettre à jour le launcher en mode portable se
                  trouve dans la section "portable".
                </p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Déinstallation</div>
            <div class="collapsible-body">
              <span>
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
                  I/Supprimer le .appimage du Nytuo Launcher
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
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Portable Edition</div>
            <div class="collapsible-body">
              <span>
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
                  "Nytuo-Launcher" a lancé le "Nytuo-Launcher.exe"
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
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">En cas d'erreurs</div>
            <div class="collapsible-body">
              <span>
                <p>
                  Visiter la section "FeedBack" du site ou rendez-vous sur
                  GitHub et créé une nouvelle "issue"
                </p>
                <p>Je corrige les bugs quand je les connais au plus vite...</p>
              </span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Notes</div>
            <div class="collapsible-body">
              <span>
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
              </span>
            </div>
          </li>
        </ul>
        <h1>Générale :</h1>
        <ul class="collapsible"
          ref={(collapsible2) => {
            this.collapsible2 = collapsible2;
          }}>
          <li>
            <div class="collapsible-header">Comptes</div>
            <div class="collapsible-body">
              <span>
                <p>
                  <strong>Intro et avertissement:</strong><br/>
                  Depuis la dernière mise à jour en date du 09/04/2021 pour le launcher et de quelques jours plus tot pour le site internet, le systeme de compte est maintenant gérer par Google Firebase, permettant la connexion avec des services comme Google, Github, Twitter, Microsoft ou encore Facebook et bien sûre toujours avec la combinaison mail/ mot de passe.
                  <br/>La connexion est gérer par FireBase, tout est sécuriser. Pour plus d'informations, aller directement sur le site de Google Firebase ou poser votre question dans la rubrique FeedBack.<br/>
                  Vous pouvez bien sûre aller consulter le project du site sur <a href="https://github.com/Nytuo/Nytuo-Website_Project">GitHub</a>.<br/>
                  <strong>Connexion au compte dans le Nytuo-Launcher:</strong><br/>
                  1.Quand la page de connexion apparait, connecter vous !
                  2.Un message apparaitera après vous être connecté. Vous allez devoir fermer tout fenêtre du Launcher et relancer ce dernier.
                  3.La connexion s'effectue tout seul automatiquement et le launcher continu vers la page principale.
                  Si jamais vous abandonnez la connexion (vous quittez le launcher avant/sans de vous être connecté), le prochain lancement vous aurez un message qui vous demandera de fermer les fenêtre et de redémarrer le launcher.
                  En cas d'erreur envoyer moi un feedback.
                  <strong>Déconnexion du compte sur le Launcher</strong><br/>
                  Connecter dans le launcher depuis n'importe qu'elle page cliquer dans la bar de navigation à gauche sur 'se déconnecter'.
                  Sur Windows, un CMD se lance (tout est automatique) et au bout de 5 secondes, apres fermeture du launcher, il vous déconnecte en supprimant toutes traces de votre compte dans le Launcher.
                  Sur Linux, cela est un peu différent, vous devrez ouvrir un Terminal et mettre les commandes dans l'ordre : <strong>cd ~/snap/nytuo-launcher/x1/.config</strong> et <strong>rm -rf Nytuo-Launcher</strong>.
                  Vous pouvez alors redémarrer le launcher et vous Connectez.
                </p>
              </span>
            </div>
          </li>
        </ul>
        <h1>Questionnements :</h1>
        <p>Visiter la section "FeedBack" du site</p>
        <Footer />
      </div>
    );
  }
}
