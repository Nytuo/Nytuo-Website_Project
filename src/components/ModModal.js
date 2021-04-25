import React, { Component } from "react";
import firebase, { storage } from "../Firebase";

export default class ModModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: firebase.auth().currentUser,
      image: null,
      Pseudo: "",
      loadingUp: false,
      Email: "",
      PWD: "",
    };
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ User: user });
        this.forceUpdate();
      } else {
        this.setState({ User: "" });
      }
    });
  }
  componentDidMount() {}
  changePseudo = () => {
    this.state.User.updateProfile({
      displayName: this.state.Pseudo,
    })
      .then(() => {
        this.setState({ loadingUp: true });
        this.manualRefresh();
      })
      .catch(function (error) {
        alert("Erreur lors de l'envoie de l'image sur le serveur: ", error);
      });
  };
  handleUploadPP = () => {
    storage.ref(`images/${this.state.User.uid}`).put(this.state.image);
    this.state.User.updateProfile({
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/nytuowebsite.appspot.com/o/images%2F" +
        this.state.User.uid +
        "?alt=media",
    })
      .then(() => {
        this.setState({ loadingUp: true });
        this.manualRefresh();
      })
      .catch(function (error) {
        alert(error);
      });
  };
  manualRefresh = () => {
    this.timeout = setTimeout(() => {
      window.location.reload();
    }, 5000);
  };
  handleVerifMail = () => {
    firebase.auth().useDeviceLanguage();
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        alert("Email Envoyé !");
      })
      .catch((error) => {
        alert(error);
      });
  };
  handlePassWordChange = () => {
    firebase.auth().useDeviceLanguage();
    firebase
      .auth()
      .sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert("Email Envoyé !");
      })
      .catch((error) => {
        alert(error);
      });
  };
  handleChangeMail = () => {
    firebase
      .auth()
      .currentUser.updateEmail(this.state.Email)
      .then(() => {
        alert("Email changé !");
      })
      .catch((error) => {
        alert(error);
      });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="Modmodal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Personalisation
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Changer le nom d'utilisateur:</p>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="pseudo"
                  required
                  placeholder="Pseudo"
                  onChange={(e) => this.setState({ Pseudo: e.target.value })}
                />
                <label htmlFor="pseudo">Pseudo</label>
              </div>{" "}
              <div className="row">
                <button className="btn btn-primary" onClick={this.changePseudo}>
                  Envoyer
                </button>
              </div>
              <br />
              <p>Changer la photo de profile:</p>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Choisir une image de profile (PNG,JPG,JPEG,GIF)
                </label>
                <input
                  className="form-control"
                  name="file"
                  type="file"
                  id="formFile"
                  onChange={(e) => this.setState({ image: e.target.files[0] })}
                />
              </div>
              <div className="row">
                <button class="btn btn-primary" onClick={this.handleUploadPP}>
                  Envoyer
                </button>
              </div>
              <br />
              {this.state.loadingUp && (
                <p style={{ color: "red" }}>
                  Veuillez patienter pendant la modification, la page se
                  rafraichira à la fin de celui-ci
                </p>
              )}
              <p>Modifier le mot de passe :</p>
              <div style={{ textAlign: "center" }}>
                <div className="row">
                  <button
                    className="btn btn-primary"
                    onClick={this.handlePassWordChange}
                  >
                    Envoyer l'e-mail !
                  </button>
                </div>
                <br />
                <p>Modifier le mail: </p>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="SetEmail"
                    required
                    placeholder="Email"
                    onChange={(e) => this.setState({ Email: e.target.value })}
                  />
                  <label htmlFor="SetEmail">Email</label>
                </div>
                <div className="row">
                  <button
                    className="btn btn-primary"
                    onClick={this.handleChangeMail}
                  >
                    Envoyer
                  </button>
                </div>
                <br />
              </div>
              <p>Envoyer l'email de vérification de l'adresse mail:</p>
              {this.state.User != null && (
                <div style={{ textAlign: "center" }}>
                  {this.state.User.emailVerified ? (
                    <div className="row">
                      <button className="btn btn-primary disabled">
                        Envoyer l'e-mail !
                      </button>
                    </div>
                  ) : (
                    <div className="row">
                      <button
                        className="btn btn-primary"
                        onClick={this.handleVerifMail}
                      >
                        Envoyer l'e-mail !
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
