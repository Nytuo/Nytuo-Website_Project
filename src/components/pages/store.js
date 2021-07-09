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
    var SFTWO = false;
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
                    </div>
                  )}
                  <p>Bienvenue, {this.state.User.displayName}</p>
                </div>
              )}
              <br />
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
                    <div className="homeresize">
                      <div className="card">
                        <img alt="" src="../images/IMGSFTW.png"/>
                        <div className="card-body">
                          <h5 className="card-title">ShootFighter Total Warfare</h5>
                          <a
                              href="/shootFighterTotalWarfare"
                              className="btn btn-primary"
                              style={{margin: "5px"}}
                          >
                            Voir
                          </a>

                          {this.Games.map((game) => {
                            if (game === "SFTW") {
                              SFTWO = true;
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
                          {SFTWO === false && (
                              <ButtonStore
                                  ico="shop"
                                  link={() => {
                                    this.setState(
                                        {currentclickedbtn: "SFTW"},
                                        function () {
                                          console.log(this.state.currentclickedbtn);
                                          this.handleClickBtn();
                                        }
                                    );
                                  }}
                              >
                                Déverrouiller
                              </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/IMGSFO2.png" />
                        <div className="card-body">
                          <h5 className="card-title">ShootFighter Origins</h5>
                          <a
                            href="/shootFighterOrigins"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>

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
                              Déverrouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/IMGLAATIM.png" />
                        <div className="card-body">
                          <h5 className="card-title">
                            Lutin Adventure And The Infernal Maze
                          </h5>
                          <a
                            href="/legendAdventureAndTheInfernalMaze"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>
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
                              Déverrouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/SGB2.png" />
                        <div className="card-body">
                          <h5 className="card-title">Super Geoffrey Bros</h5>
                          <a
                            href="/superGeoffreyBros"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>

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
                              Déverrouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/IMGSF.png" />
                        <div className="card-body">
                          <h5 className="card-title">ShootFighter</h5>
                          <a
                            href="/shootFighter"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>
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
                              Déverrouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/IMGLA.png" />

                        <div className="card-body">
                          <h5 className="card-title">Lutin Adventure</h5>
                          <a
                            href="/lutinAdventure"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>
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
                              Déverrouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/IMGVITF.png" />
                        <div className="card-body">
                          <h5 className="card-title">Vincent In The Forest</h5>
                          <a
                            href="/vincentInTheForest"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>
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
                              Déverrouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/IMGTTD.png" />
                        <div className="card-body">
                          <h5 className="card-title">The TARDIS Defender</h5>
                          <a
                            href="/theTardisDefender"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>
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
                              Déverrouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/IMGFWD.png" />

                        <div className="card-body">
                          <h5 className="card-title">Firewall Defender</h5>
                          <a
                            href="/fireWallDefender"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>
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
                              Déverrouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/IMGTB.png" />

                        <div className="card-body">
                          <h5 className="card-title">TanksBattle</h5>
                          <a
                            href="/tanksBattle"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>
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
                              Déverrouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/IMGWR.png" />

                        <div className="card-body">
                          <h5 className="card-title">WinRun</h5>
                          <a
                            href="/winrun"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>
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
                              Déverrouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/IMGAE.png" />

                        <div className="card-body">
                          <h5 className="card-title">AsteroidEscape</h5>
                          <a
                            href="/asteroidEscape"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>
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
                              Déverrouiller
                            </ButtonStore>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="homeresize">
                      <div class="card">
                        <img alt="" src="../images/IMGSN.png" />

                        <div className="card-body">
                          <h5 className="card-title">Sans Nom Réédition</h5>
                          <a
                            href="/sansNomReedition"
                            className="btn btn-primary"
                            style={{ margin: "5px" }}
                          >
                            Voir
                          </a>
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
                              Déverrouiller
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
