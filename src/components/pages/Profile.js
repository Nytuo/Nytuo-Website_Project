import React, { Component } from "react";
import firebase from "../../Firebase";
import { ButtonA } from "../ButtonA";
import { ButtonOC } from "../ButtonOC";
import LoaderMultiColor from "../LoaderMultiColor";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: firebase.auth().currentUser,
      currentclickedbtn: "",
      stateLoading: true,
    };
    const db = firebase.database();
    this.Games = [];
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ User: user });
        this.timeout = setTimeout(() => {
          
          var fetchGames = db.ref("users/" + this.state.User.uid + "/games");
          fetchGames.on("value", (snapshot) => {
            const data = snapshot.val();
            const listOfGames = data;
            this.Games = listOfGames.split(",");
            this.setState({ stateLoading: false });
            this.forceUpdate();
          });
        }, 1000);
      } else {
        this.setState({ User: "" });
      }
    });
  }

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
              {this.state.stateLoading == true ? (
                <LoaderMultiColor />
              ) : (
                <div>
                  <p>
                    Vous êtes connecté avec l'adresse mail :{" "}
                    {this.state.User.email}{" "}
                    {this.state.User.emailVerified && (
                      <i class="material-icons">verified</i>
                    )}
                  </p>
                  <p>
                    Vous êtes connecté avec :{" "}
                    {this.state.User.providerData.map((profile) => {
                      if (profile.providerId == "password") {
                        return "Nytuo Account (Firebase password)";
                      }
                      return profile.providerId;
                    })}{" "}
                  </p>
                  {this.state.User.photoURL && (<div>
                    <img
                      alt=""
                      className="NcircleimgC"
                      src={this.state.User.photoURL}
                    />
                  </div>)}
                  
                  <p>Bienvenue, {this.state.User.displayName}</p>
                </div>
              )}
            </div>
            <div style={{ textAlign: "center" }}>
              {this.state.stateLoading == true ? (
                <LoaderMultiColor />
              ) : (
                <div>
                  {firebase.auth().currentUser.providerData.map((userInfo) => {
                    if (userInfo.providerId !== "google.com") {
                      return (
                        <div style={{ textAlign: "center" }}>
                          <a
                            class="waves-effect waves-light btn modal-trigger"
                            data-target="Modmodal"
                          >
                            <i class="material-icons left">edit</i>
                            Personalisation
                          </a>
                        </div>
                      );
                    } else {
                      return "";
                    }
                  })}
                </div>
              )}
              <div class="cards-list">
                {this.state.stateLoading == true ? (
                  <LoaderMultiColor />
                ) : (
                  <div class="cards-list">
                    {this.Games.map((game) => {
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
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                                    <span class="card-title">
                                      AsteroidEscape
                                    </span>
                                  </div>
                                </a>
                                <div class="card-content">
                                  <ButtonA link={"nytuo://launchid/ae"}>
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                                    <span class="card-title">
                                      FireWall Defender
                                    </span>
                                  </div>
                                </a>
                                <div class="card-content">
                                  <ButtonA link={"nytuo://launchid/fwd"}>
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                                    <span class="card-title">
                                      Lutin Adventure
                                    </span>
                                  </div>
                                </a>
                                <div class="card-content">
                                  <ButtonA link={"nytuo://launchid/la"}>
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                                    <img
                                      alt=""
                                      src={"../images/IMGLAATIM.png"}
                                    />
                                    <span class="card-title">
                                      Legend Adventure And The Infernal Maze
                                    </span>
                                  </div>
                                </a>
                                <div class="card-content">
                                  <ButtonA link={"nytuo://launchid/laatim"}>
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                                    <span class="card-title">
                                      Sans Nom Réédition
                                    </span>
                                  </div>
                                </a>
                                <div class="card-content">
                                  <ButtonA link={"nytuo://launchid/sn"}>
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                                    <i class="material-icons left">
                                      play_arrow
                                    </i>
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
                          return (
                            <p>Va dans la boutique pour activer des jeux !</p>
                          );
                      }
                    })}
                  </div>
                )}
              </div>
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
