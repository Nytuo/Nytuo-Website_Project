import React, { Component } from "react";
import firebase from "../../Firebase";
import { ButtonStore } from "../ButtonStore";
import LoaderMultiColor from "../LoaderMultiColor";

//set key for activate game
//get games from DB
//set games to DB
//set pseudo
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: firebase.auth().currentUser,
      gamestring: "",
      currentclickedbtn: "",
      stateLoading: true,
    };
    const db = firebase.database();
    this.Games = [];
    console.log(this.state.User);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ User: user });
        this.timeout = setTimeout(() => {
          var fetchGames = db.ref("users/" + this.state.User.uid + "/games");
        fetchGames.on("value", (snapshot) => {
          const data = snapshot.val();
          const listOfGames = data;
          this.setState({ gamestring: listOfGames });
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

  handleClickBtn = () => {
    const db = firebase.database();
    console.log(this.state.gamestring);
    var NewList = "";
    if (this.state.gamestring === "") {
      NewList = this.state.gamestring + this.state.currentclickedbtn;
    } else {
      NewList = this.state.gamestring + "," + this.state.currentclickedbtn;
    }
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
    var SNREO = false;
    var SFOO = false;
    var LAATIMO = false;
    var SGBO = false;
    var SFO = false;
    var LAO = false;
    var VITFO = false;
    var TTDO = false;
    var FWDO = false;
    var TBO = false;
    var WRO = false;
    var AEO = false;
    return (
      <div>
        <meta name="robots" content="noindex"></meta>
        <div className="spaceX2">
          {this.state.User ? (
            <div>
              {this.state.stateLoading == true ? (
                <LoaderMultiColor />
              ) : (
                <div>
                  <p>
                    Vous êtes connecté avec l'adresse mail :{" "}
                    {this.state.User.email}
                  </p>
                  {this.state.User.photoURL && (
                  <div>
                    <img
                      className="NcircleimgC"
                      alt="profile"
                      src={this.state.User.photoURL}
                    />
                  </div>)}
                  <p>Bienvenue, {this.state.User.displayName}</p>
                </div>
              )}<br/>
              <img
                src="../images/Nytuo Store.png"
                alt="Nytuo Store Logo"
                style={{ width: "20%" }}
              />

              <h1>Boutique: (gratuite mais boutique quand même)</h1>
              <div class="cards-list">
                {this.state.stateLoading == true ? (
                  <LoaderMultiColor />
                ) : (
                  <div class="cards-list">
                    <div class="homeresize">
                      <div class="card">
                        <a href="/shootFighterOrigins">
                          <div class="card-image">
                            <img alt="" src="../images/IMGSFO2.png" />
                            <span class="card-title">ShootFighter Origins</span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "SFO") {
                              SFOO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {SFOO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "SFO" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <a href="/legendAdventureAndTheInfernalMaze">
                          <div class="card-image">
                            <img alt="" src="../images/IMGLAATIM.png" />
                            <span class="card-title">
                              Legend Adventure and the Infernal Maze
                            </span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "LAATIM") {
                              LAATIMO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {LAATIMO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "LAATIM" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <a href="/superGeoffreyBros">
                          <div class="card-image">
                            <img alt="" src="../images/SGB2.png" />
                            <span class="card-title">Super Geoffrey Bros</span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "SGB") {
                              SGBO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {SGBO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "SGB" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <a href="/shootFighter">
                          <div class="card-image">
                            <img alt="" src="../images/IMGSF.png" />
                            <span class="card-title">ShootFighter</span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "SF") {
                              SFO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {SFO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "SF" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <a href="/lutinAdventure">
                          <div class="card-image">
                            <img alt="" src="../images/IMGLA.png" />
                            <span class="card-title">Lutin Adventure</span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "LA") {
                              LAO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {LAO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "LA" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        {" "}
                        <a href="/vincentInTheForest">
                          <div class="card-image">
                            <img alt="" src="../images/IMGVITF.png" />
                            <span class="card-title">
                              Vincent In The Forest
                            </span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "VITF") {
                              VITFO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {VITFO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "VITF" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <a href="/theTardisDefender">
                          <div class="card-image">
                            <img alt="" src="../images/IMGTTD.png" />
                            <span class="card-title">The TARDIS Defender</span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "TTD") {
                              TTDO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {TTDO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "TTD" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        {" "}
                        <a href="/fireWallDefender">
                          <div class="card-image">
                            <img alt="" src="../images/IMGFWD.png" />
                            <span class="card-title">Firewall Defender</span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "FWD") {
                              FWDO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {FWDO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "FWD" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <a href="/tanksBattle">
                          <div class="card-image">
                            <img alt="" src="../images/IMGTB.png" />
                            <span class="card-title">TanksBattle</span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "TB") {
                              TBO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {TBO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "TB" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <a href="/winrun">
                          <div class="card-image">
                            <img alt="" src="../images/IMGWR.png" />
                            <span class="card-title">WinRun</span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "WR") {
                              WRO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {WRO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "WR" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <a href="/asteroidEscape">
                          <div class="card-image">
                            <img alt="" src="../images/IMGAE.png" />
                            <span class="card-title">AsteroidEscape</span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "AE") {
                              AEO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {AEO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "AE" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <a href="/sansNomReedition">
                          <div class="card-image">
                            <img alt="" src="../images/IMGSN.png" />
                            <span class="card-title">Sans Nom Réédition</span>
                          </div>
                        </a>
                        <div class="card-content">
                          {this.Games.map((game) => {
                            if (game === "SNRE") {
                              SNREO = true;
                              return (
                                <ButtonStore
                                  ico="check_circle"
                                  disabled="disabled"
                                >
                                  Déverrouiller
                                </ButtonStore>
                              );
                            } else {
                              return "";
                            }
                          })}
                          {SNREO === false && (
                            <ButtonStore
                              ico="shop"
                              link={() => {
                                this.setState(
                                  { currentclickedbtn: "SNRE" },
                                  function () {
                                    console.log(this.state.currentclickedbtn);
                                    this.handleClickBtn();
                                  }
                                );
                              }}
                            >
                              Vérouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p>
              Tu dois être connecter pour voir les jeux disponible dans la
              boutique
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
