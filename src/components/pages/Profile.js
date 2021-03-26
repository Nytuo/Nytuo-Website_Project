import React, { Component } from "react";
import firebase, { storage } from "../../Firebase";
import Cards from "../Cards";

//set key for activate game
//get games from DB
//set games to DB
//set pseudo
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: firebase.auth().currentUser,
      image: null,
      Pseudo: "",
    };
    const db = firebase.database();
    this.Games = [];
    console.log(this.state.User);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ User: user });
        var fetchGames = db.ref("users/" + this.state.User.uid + "/games");
        fetchGames.on("value", (snapshot) => {
          const data = snapshot.val();
          const listOfGames = data;
          this.Games = listOfGames.split(",");
          this.forceUpdate();
          console.log(listOfGames, this.Games);
        });
      } else {
        this.setState({ User: "" });
      }
    });
  }

  changePseudo = () => {
    this.state.User.updateProfile({
      displayName: this.state.Pseudo,
    });
  };

  handleUploadPP = () => {
    const uploadTask = storage
      .ref(`images/${this.state.User.uid}`)
      .put(this.state.image);
    this.state.User.updateProfile({
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/nytuowebsite.appspot.com/o/images%2F" +
        this.state.User.uid +
        "?alt=media",
    });
  };
  componentDidMount() {
    console.log(this.Games);
  }
  render() {
    return (
      <div>
        {this.state.User ? (
          <div>
            {firebase.auth().currentUser.providerData.map((userInfo) => {
              if (userInfo.providerId != "google.com") {
                return (
                  <>
                    <p>Change UserName</p>
                    <input
                      type="text"
                      id="pseudo"
                      className="validate"
                      require
                      placeholder={this.state.Pseudo}
                      onChange={(e) =>
                        this.setState({ Pseudo: e.target.value })
                      }
                    />
                    <button
                      className="btn waves-effect waves-light"
                      onClick={this.changePseudo}
                    >
                      Save
                    </button>

                    <p>Change profile picture</p>
                    <div class="file-field input-field">
                      <div class="btn">
                        <span>
                          Choisir une image de profile (PNG,JPG,JPEG,GIF)
                        </span>

                        <input
                          type="file"
                          name="file"
                          onChange={(e) =>
                            this.setState({ image: e.target.files[0] })
                          }
                        />
                      </div>

                      <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" />
                      </div>
                    </div>
                    <button
                      class="btn waves-effect waves-light"
                      onClick={this.handleUploadPP}
                    >
                      Upload
                      <i class="material-icons right">cloud_upload</i>
                    </button>
                  </>
                );
              }
            })}

            <div class="cards-list">
              {(console.log(this.state.User), console.log(this.Games))}
              {this.Games.map((game) => {
                console.log(game);

                switch (game) {
                  case "SGB":
                    return (
                      <Cards
                        link="sgb"
                        img="SGB2"
                        Title="Super Geoffrey Bros"
                        desc="Un jeu a la Mario pour le mariage de mon cousin Geoffrey"
                      />
                    );
                  case "SFO":
                    return (
                      <Cards
                        link="sfo"
                        img="IMGSFO2"
                        Title="ShootFighter Origins"
                        desc="Survie a des vagues de Zombies en 2D"
                      />
                    );
                  case "SF":
                    return (
                      <Cards
                        link="sf"
                        img="IMGSF"
                        Title="ShootFighter"
                        desc="Survie a des vagues de Zombies en 3D"
                      />
                    );
                  case "AE":
                    return (
                      <Cards
                        link="ae"
                        img="IMGAE"
                        Title="AsteroidEscape"
                        desc="Détruit tout les astéroids et essaye de marquer le plus de
                  point"
                      />
                    );
                  case "FWD":
                    return (
                      <Cards
                        link="fwd"
                        img="IMGFWD"
                        Title="Firewall Defender"
                        desc="Evite la destruction du processeur en plaçant des tourelles
                  pour detruire les virus"
                      />
                    );
                  case "LA":
                    return (
                      <Cards
                        link="la"
                        img="IMGLA"
                        Title="Lutin Adventure"
                        desc="Retrouve toutes les pièces et monte en haut de la tour"
                      />
                    );
                  case "LAATIM":
                    return (
                      <Cards
                        link="laatim"
                        img="IMGLAATIM"
                        Title="Legend Adventure and the Infernal Maze"
                        desc="Tu viens pour des vacances mais quelque chose va nuir a ton
                  séjour"
                      />
                    );
                  case "SNRE":
                    return (
                      <Cards
                        link="sn"
                        img="IMGSN"
                        Title="Sans Nom Réédition"
                        desc="Un jeu juste pour le FUN."
                      />
                    );
                  case "TB":
                    return (
                      <Cards
                        link="tb"
                        img="IMGTB"
                        Title="TanksBattle"
                        desc="Jeu de tanks a travers le LAN"
                      />
                    );
                  case "TTD":
                    return (
                      <Cards
                        link="ttd"
                        img="IMGTTD"
                        Title="The TARDIS Defender"
                        desc="Protège le TARDIS des Cybermans et des Daleks"
                      />
                    );
                  case "VITF":
                    return (
                      <Cards
                        link="vitf"
                        img="IMGVITF"
                        Title="Vincent In The Forest"
                        desc="Retrouve touts les composants pour quitter la foret"
                      />
                    );
                  case "WR":
                    return (
                      <Cards
                        link="wr"
                        img="IMGWR"
                        Title="WinRun"
                        desc="Jeu de course basic"
                      />
                    );
                  default:
                    return <p>Va dans la boutique pour activer des jeux !</p>;
                }
              })}
            </div>
          </div>
        ) : (
          <p>Connecte toi pour voir les jeux que tu possèdes !</p>
        )}
      </div>
    );
  }
}

export default Profile;
