import React, { Component } from "react";
import firebase from "../../Firebase";
import { ButtonA } from "../ButtonA";
import { ButtonStore } from "../ButtonStore";
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
      gamestring: "",
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

  handleClickBtnSNRE = () => {
    const db = firebase.database();
    if (this.state.gamestring == "") {
      var NewList = this.state.gamestring + "SNRE";
    } else {
      var NewList = this.state.gamestring + ",SNRE";
    }
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
        {this.state.User ? (
          <div class="cards-list">
            {(console.log(this.state.User), console.log(this.Games))}
            <div class="cards-list">
              <div class="homeresize">
                <a href="/shootFighterOrigins">
                  <div class="card">
                    <div class="card-image">
                      <img src="../images/IMGSFO2.png" />
                      <span class="card-title">ShootFighter Origins</span>
                    </div>
                    <div class="card-content"></div>
                  </div>
                </a>
              </div>

              <div class="homeresize">
                <a href="/legendAdventureAndTheInfernalMaze">
                  <div class="card">
                    <div class="card-image">
                      <img src="../images/IMGLAATIM.png" />
                      <span class="card-title">
                        Legend Adventure and the Infernal Maze
                      </span>
                    </div>
                    <div class="card-content"></div>
                  </div>
                </a>
              </div>

              <div class="homeresize">
                <a href="/superGeoffreyBros">
                  <div class="card">
                    <div class="card-image">
                      <img src="../images/SGB2.png" />
                      <span class="card-title">Super Geoffrey Bros</span>
                    </div>
                    <div class="card-content"></div>
                  </div>
                </a>
              </div>

              <div class="homeresize">
                <a href="/shootFighter">
                  <div class="card">
                    <div class="card-image">
                      <img src="../images/IMGSF.png" />
                      <span class="card-title">ShootFighter</span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="homeresize">
                <a href="/lutinAdventure">
                  <div class="card">
                    <div class="card-image">
                      <img src="../images/IMGLA.png" />
                      <span class="card-title">Lutin Adventure</span>
                    </div>
                    <div class="card-content"></div>
                  </div>
                </a>
              </div>

              <div class="homeresize">
                <a href="/vincentInTheForest">
                  <div class="card">
                    <div class="card-image">
                      <img src="../images/IMGVITF.png" />
                      <span class="card-title">Vincent In The Forest</span>
                    </div>
                    <div class="card-content"></div>
                  </div>
                </a>
              </div>

              <div class="homeresize">
                <a href="/theTardisDefender">
                  <div class="card">
                    <div class="card-image">
                      <img src="../images/IMGTTD.png" />
                      <span class="card-title">The TARDIS Defender</span>
                    </div>
                    <div class="card-content"></div>
                  </div>
                </a>
              </div>

              <div class="homeresize">
                <a href="/fireWallDefender">
                  <div class="card">
                    <div class="card-image">
                      <img src="../images/IMGFWD.png" />
                      <span class="card-title">Firewall Defender</span>
                    </div>
                    <div class="card-content"></div>
                  </div>
                </a>
              </div>

              <div class="homeresize">
                <a href="/tanksBattle">
                  <div class="card">
                    <div class="card-image">
                      <img src="../images/IMGTB.png" />
                      <span class="card-title">TanksBattle</span>
                    </div>
                    <div class="card-content"></div>
                  </div>
                </a>
              </div>

              <div class="homeresize">
                <a href="/winrun">
                  <div class="card">
                    <div class="card-image">
                      <img src="../images/IMGWR.png" />
                      <span class="card-title">WinRun</span>
                    </div>
                    <div class="card-content"></div>
                  </div>
                </a>
              </div>

              <div class="homeresize">
                <a href="/asteroidEscape">
                  <div class="card">
                    <div class="card-image">
                      <img src="../images/IMGAE.png" />
                      <span class="card-title">AsteroidEscape</span>
                    </div>
                    <div class="card-content"></div>
                  </div>
                </a>
              </div>

              <div class="homeresize">
                <div class="card">
                  <a href="/sansNomReedition">
                    <div class="card-image">
                      <img src="../images/IMGSN.png" />
                      <span class="card-title">Sans Nom Réédition</span>
                    </div>
                  </a>
                  <div class="card-content">
                    {this.Games.map((game) => {
                      if (game === "SNRE") {
                        return (
                          <ButtonStore ico="check_circle" disabled="disabled">
                            Unlocked
                          </ButtonStore>
                        );
                      } else {
                        return (
                          <ButtonStore
                            ico="shop"
                            link={this.handleClickBtnSNRE}
                          >
                            Unlock
                          </ButtonStore>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>
            Tu dois être connecter pour voir les jeux disponible dans la
            boutique
          </p>
        )}
      </div>
    );
  }
}

export default Profile;
