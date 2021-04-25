import React, { Component } from "react";
import firebase from "../../Firebase";
import { ButtonA } from "../ButtonA";
import { ButtonOC } from "../ButtonOC";
import LoaderMultiColor from "../LoaderMultiColor";
import Footer from "../Footer";

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
          console.log(fetchGames);
          fetchGames.on("value", (snapshot) => {
            const data = snapshot.val();
            const listOfGames = data;
            this.Games = listOfGames.split(",");
            console.log(this.Games);

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
                    Vous êtes connecté avec :
                    {this.state.User.providerData.map((profile) => {
                      if (profile.providerId == "password") {
                        return "Nytuo Account (Firebase password)";
                      }
                      return profile.providerId;
                    })}{" "}
                  </p>
                  {this.state.User.photoURL && (
                    <div>
                      <img
                        alt=""
                        className="NcircleimgC"
                        src={this.state.User.photoURL}
                      />
                    </div>
                  )}

                  <p>Bienvenue, {this.state.User.displayName}</p>
                </div>
              )}
            </div>
            <div style={{ textAlign: "center" }}>
              {this.state.stateLoading == true ? (
                <LoaderMultiColor />
              ) : (
                <div>
                  {this.state.User.providerData.map((userInfo) => {
                    if (userInfo.providerId === "password") {
                      return (
                        <div style={{ textAlign: "center" }}>
                          <a
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#Modmodal1"
                          >

                            Personalisation
                          </a>
                        </div>
                      );
                    } else {
                      return "";
                    }
                  })} <h1>Jeux activer sur votre compte:</h1>
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
                              <div className="card">
                                <img src="../images/SGB2.png" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Super Geoffrey Bros</h5>
                                  <a href="/superGeoffreyBros" className="btn btn-primary" style={{margin: "5px"}}>Voir</a>
                                  <a href="nytuo://launchid/sgb" className="btn btn-primary">Lancer le jeu</a>
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
                                    Retirer de la bibliothèque
                                  </ButtonOC>
                                </div>
                              </div>
                            </div>
                          );
                        case "SFO":
                          return (
                              <div className="homeresize">
                                <div className="card">
                                  <img src="../images/IMGSFO2.png" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title">ShootFighter Origins</h5>
                                    <a href="/shootFighterOrigins" className="btn btn-primary"
                                       style={{margin: "5px"}}>Voir</a>
                                    <a href="nytuo://launchid/sfo" className="btn btn-primary">Lancer le jeu</a>
                                    <ButtonOC
                                        link={() => {
                                          this.setState(
                                              {currentclickedbtn: "SFO"},
                                              function () {
                                                this.handleDeleteGamefromDB();
                                              }
                                          );
                                        }}
                                    >
                                      Retirer de la bibliothèque
                                    </ButtonOC>
                                  </div>
                                </div>
                              </div>
                          );
                        case "SF":
                          return (
                              <div className="homeresize">
                                <div className="card">
                                  <img src="../images/IMGSF.png" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title">ShootFighter</h5>
                                    <a href="/shootFighter" className="btn btn-primary"
                                       style={{margin: "5px"}}>Voir</a>
                                    <a href="nytuo://launchid/sf" className="btn btn-primary">Lancer le jeu</a>
                                    <ButtonOC
                                        link={() => {
                                          this.setState(
                                              {currentclickedbtn: "SF"},
                                              function () {
                                                this.handleDeleteGamefromDB();
                                              }
                                          );
                                        }}
                                    >
                                      Retirer de la bibliothèque
                                    </ButtonOC>
                                  </div>
                                </div>
                              </div>
                          );
                        case "AE":
                          return (
                              <div className="homeresize">
                                <div className="card">
                                  <img src="../images/IMGAE.png" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title">AsteroidEscape</h5>
                                    <a href="/asteroidEscape" className="btn btn-primary"
                                       style={{margin: "5px"}}>Voir</a>
                                    <a href="nytuo://launchid/ae" className="btn btn-primary">Lancer le jeu</a>
                                    <ButtonOC
                                        link={() => {
                                          this.setState(
                                              {currentclickedbtn: "AE"},
                                              function () {
                                                this.handleDeleteGamefromDB();
                                              }
                                          );
                                        }}
                                    >
                                      Retirer de la bibliothèque
                                    </ButtonOC>
                                  </div>
                                </div>
                              </div>
                          );
                        case "FWD":
                          return (
                              <div className="homeresize">
                                <div className="card">
                                  <img src="../images/IMGFWD.png" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title">FireWall Defender</h5>
                                    <a href="/fireWallDefender" className="btn btn-primary"
                                       style={{margin: "5px"}}>Voir</a>
                                    <a href="nytuo://launchid/fwd" className="btn btn-primary">Lancer le jeu</a>
                                    <ButtonOC
                                        link={() => {
                                          this.setState(
                                              {currentclickedbtn: "FWD"},
                                              function () {
                                                this.handleDeleteGamefromDB();
                                              }
                                          );
                                        }}
                                    >
                                      Retirer de la bibliothèque
                                    </ButtonOC>
                                  </div>
                                </div>
                              </div>
                          );
                        case "LA":
                          return (
                              <div className="homeresize">
                                <div className="card">
                                  <img src="../images/IMGLA.png" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title">Lutin Adventure</h5>
                                    <a href="/lutinAdventure" className="btn btn-primary"
                                       style={{margin: "5px"}}>Voir</a>
                                    <a href="nytuo://launchid/la" className="btn btn-primary">Lancer le jeu</a>
                                    <ButtonOC
                                        link={() => {
                                          this.setState(
                                              {currentclickedbtn: "LA"},
                                              function () {
                                                this.handleDeleteGamefromDB();
                                              }
                                          );
                                        }}
                                    >
                                      Retirer de la bibliothèque
                                    </ButtonOC>
                                  </div>
                                </div>
                              </div>
                          );
                        case "LAATIM":
                          return (
                              <div className="homeresize">
                                <div className="card">
                                  <img src="../images/IMGLAATIM.png" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title">Legend Adventure And The Infernal Maze</h5>
                                    <a href="/legendAdventureAndTheInfernalMaze" className="btn btn-primary"
                                       style={{margin: "5px"}}>Voir</a>
                                    <a href="nytuo://launchid/laatim" className="btn btn-primary">Lancer le jeu</a>
                                    <ButtonOC
                                        link={() => {
                                          this.setState(
                                              {currentclickedbtn: "LAATIM"},
                                              function () {
                                                this.handleDeleteGamefromDB();
                                              }
                                          );
                                        }}
                                    >
                                      Retirer de la bibliothèque
                                    </ButtonOC>
                                  </div>
                                </div>
                              </div>
                          );
                        case "SNRE":
                          return (
                              <div className="homeresize">
                                <div className="card">
                                  <img src="../images/IMGSN.png" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title">Sans Nom Réédition</h5>
                                    <a href="/sansNomReedition" className="btn btn-primary"
                                       style={{margin: "5px"}}>Voir</a>
                                    <a href="nytuo://launchid/sn" className="btn btn-primary">Lancer le jeu</a>
                                    <ButtonOC
                                        link={() => {
                                          this.setState(
                                              {currentclickedbtn: "SNRE"},
                                              function () {
                                                this.handleDeleteGamefromDB();
                                              }
                                          );
                                        }}
                                    >
                                      Retirer de la bibliothèque
                                    </ButtonOC>
                                  </div>
                                </div>
                              </div>
                          );
                        case "TB":
                          return (
                              <div className="homeresize">
                                <div className="card">
                                  <img src="../images/IMGTB.png" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title">TanksBattle</h5>
                                    <a href="/tanksBattle" className="btn btn-primary"
                                       style={{margin: "5px"}}>Voir</a>
                                    <a href="nytuo://launchid/tb" className="btn btn-primary">Lancer le jeu</a>
                                    <ButtonOC
                                        link={() => {
                                          this.setState(
                                              {currentclickedbtn: "TB"},
                                              function () {
                                                this.handleDeleteGamefromDB();
                                              }
                                          );
                                        }}
                                    >
                                      Retirer de la bibliothèque
                                    </ButtonOC>
                                  </div>
                                </div>
                              </div>
                          );
                        case "TTD":
                          return (
                              <div className="homeresize">
                                <div className="card">
                                  <img src="../images/IMGTTD.png" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title">The Tardis Defender</h5>
                                    <a href="/theTardisDefender" className="btn btn-primary"
                                       style={{margin: "5px"}}>Voir</a>
                                    <a href="nytuo://launchid/ttd" className="btn btn-primary">Lancer le jeu</a>
                                    <ButtonOC
                                        link={() => {
                                          this.setState(
                                              {currentclickedbtn: "TTD"},
                                              function () {
                                                this.handleDeleteGamefromDB();
                                              }
                                          );
                                        }}
                                    >
                                      Retirer de la bibliothèque
                                    </ButtonOC>
                                  </div>
                                </div>
                              </div>
                          );
                        case "VITF":
                          return (
                              <div className="homeresize">
                                <div className="card">
                                  <img src="../images/IMGVITF.png" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title">Vincent In The Forest</h5>
                                    <a href="/vincentInTheForest" className="btn btn-primary"
                                       style={{margin: "5px"}}>Voir</a>
                                    <a href="nytuo://launchid/vitf" className="btn btn-primary">Lancer le jeu</a>
                                    <ButtonOC
                                        link={() => {
                                          this.setState(
                                              {currentclickedbtn: "VITF"},
                                              function () {
                                                this.handleDeleteGamefromDB();
                                              }
                                          );
                                        }}
                                    >
                                      Retirer de la bibliothèque
                                    </ButtonOC>
                                  </div>
                                </div>
                              </div>
                          );
                        case "WR":
                          return (
                              <div className="homeresize">
                                <div className="card">
                                  <img src="../images/IMGWR.png" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title">WinRun</h5>
                                    <a href="/winRun" className="btn btn-primary"
                                       style={{margin: "5px"}}>Voir</a>
                                    <a href="nytuo://launchid/wr" className="btn btn-primary">Lancer le jeu</a>
                                    <ButtonOC
                                        link={() => {
                                          this.setState(
                                              {currentclickedbtn: "WR"},
                                              function () {
                                                this.handleDeleteGamefromDB();
                                              }
                                          );
                                        }}
                                    >
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
        )}<Footer />
      </div>

    );
  }
}

export default Profile;
