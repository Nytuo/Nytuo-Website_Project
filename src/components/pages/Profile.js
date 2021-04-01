import React, { Component } from "react";
import firebase, { storage } from "../../Firebase";
import { ButtonA } from "../ButtonA";
import { ButtonOC } from "../ButtonOC";
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
      currentclickedbtn: "",
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
  handleDeleteGamefromDB = () => {
    const db = firebase.database();
    for (let i = 0; i < this.Games.length; i++) {
      const game = this.Games[i];
      if (game === this.state.currentclickedbtn) {
        this.Games.splice(i, 1);
      }
    }
    var NewList = this.Games.toString();
    console.log(NewList);
    var dbco1 = db.ref("users");
    dbco1.child(this.state.User.uid).set({
      games: NewList,
    });
  };
  handleUploadPP = () => {
    storage.ref(`images/${this.state.User.uid}`).put(this.state.image);
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
        <meta name="robots" content="noindex"></meta>
        {this.state.User ? (
          <div>
            <div className="spaceX2">
              <p>
                Vous êtes connecté avec l'adresse mail : {this.state.User.email}
              </p>
              <div>
                <img
                  alt=""
                  className="NcircleimgC"
                  src={this.state.User.photoURL}
                />
              </div>
              <p>Bienvenue, {this.state.User.displayName}</p>
            </div>
            {firebase.auth().currentUser.providerData.map((userInfo) => {
              if (userInfo.providerId !== "google.com") {
                return (
                  <div style={{ textAlign: "center" }}>
                    <div class="row" style={{ textAlign: "center" }}>
                      <p>Changer le nom d'utilisateur</p>
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
                        <i class="material-icons right">cloud_upload</i>
                        Envoyer
                      </button>
                    </div>

                    <div class="row" style={{ textAlign: "center" }}>
                      <p>Changer la photo de profile</p>
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
                        Envoyer
                        <i class="material-icons right">cloud_upload</i>
                      </button>
                    </div>
                  </div>
                );
              } else {
                return "";
              }
            })}

            <div class="cards-list">
              {(console.log(this.state.User), console.log(this.Games))}
              {this.Games.map((game) => {
                console.log(game);

                switch (game) {
                  case "SGB":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/superGeoffreyBros">
                            <div class="card-image">
                              <img alt="" src={"../images/SGB2.png"} />
                              <span class="card-title">
                                Super Geoffrey Bros
                              </span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/sgb"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "SGB" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  case "SFO":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/shootFighterOrigins">
                            <div class="card-image">
                              <img alt="" src={"../images/IMGSFO2.png"} />
                              <span class="card-title">
                                ShootFighter Origins
                              </span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/sfo"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "SFO" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  case "SF":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/shootFighter">
                            <div class="card-image">
                              <img alt="" src={"../images/IMGSF.png"} />
                              <span class="card-title">ShootFighter</span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/sf"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "SF" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  case "AE":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/asteroidEscape">
                            <div class="card-image">
                              <img alt="" src={"../images/IMGAE.png"} />
                              <span class="card-title">AsteroidEscape</span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/ae"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "AE" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  case "FWD":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/fireWallDefender">
                            <div class="card-image">
                              <img alt="" src={"../images/IMGFWD.png"} />
                              <span class="card-title">FireWall Defender</span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/fwd"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "FWD" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  case "LA":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/lutinAdventure">
                            <div class="card-image">
                              <img alt="" src={"../images/IMGLA.png"} />
                              <span class="card-title">Lutin Adventure</span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/la"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "LA" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  case "LAATIM":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/legendAdventureAndTheInfernalMaze">
                            <div class="card-image">
                              <img alt="" src={"../images/IMGLAATIM.png"} />
                              <span class="card-title">
                                Legend Adventure And The Infernal Maze
                              </span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/laatim"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "LAATIM" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  case "SNRE":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/sansNomReedition">
                            <div class="card-image">
                              <img alt="" src={"../images/IMGSN.png"} />
                              <span class="card-title">Sans Nom Réédition</span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/sn"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "SNRE" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  case "TB":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/tanksBattle">
                            <div class="card-image">
                              <img alt="" src={"../images/IMGTB.png"} />
                              <span class="card-title">TanksBattle</span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/tb"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "TB" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  case "TTD":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/theTardisDefender">
                            <div class="card-image">
                              <img alt="" src={"../images/IMGTTD.png"} />
                              <span class="card-title">
                                The Tardis Defender
                              </span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/ttd"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "TTD" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  case "VITF":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/vincentInTheForest">
                            <div class="card-image">
                              <img alt="" src={"../images/IMGVITF.png"} />
                              <span class="card-title">
                                Vincent In The Forest
                              </span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/vitf"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "VITF" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  case "WR":
                    return (
                      <div class="homeresize">
                        <div class="card">
                          <a href="/winRun">
                            <div class="card-image">
                              <img alt="" src={"../images/IMGWR.png"} />
                              <span class="card-title">WinRun</span>
                            </div>
                          </a>
                          <div class="card-content">
                            <ButtonA link={"nytuo://launchid/wr"}>
                              <i class="material-icons left">play_arrow</i>
                              Jouer
                            </ButtonA>
                            <ButtonOC
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "WR" },
                                  function () {
                                    this.handleDeleteGamefromDB();
                                  }
                                );
                              }}
                            >
                              <i class="material-icons left">delete</i>
                              Retirer de la bibliothèque
                            </ButtonOC>
                          </div>
                        </div>
                      </div>
                    );
                  default:
                    return <p>Va dans la boutique pour activer des jeux !</p>;
                }
              })}
            </div>
          </div>
        ) : (
          <div className="spaceX2">
            <p>Connecte toi pour voir les jeux que tu possèdes !</p>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
