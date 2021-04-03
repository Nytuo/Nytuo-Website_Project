import React, { Component } from "react";
import M from "materialize-css";
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
  componentDidMount() {
    M.Modal.init(this.ModModal, []);
  }
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
        ref={(ModModal) => {
          this.ModModal = ModModal;
        }}
        id="Modmodal"
        class="modal"
      >
        <div class="modal-content">
          <div class="row" style={{ textAlign: "center" }}>
            <p>Changer le nom d'utilisateur:</p>
            <input
              type="text"
              id="pseudo"
              className="validate"
              require
              placeholder={this.state.Pseudo}
              onChange={(e) => this.setState({ Pseudo: e.target.value })}
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
            <p>Changer la photo de profile:</p>
            <div class="file-field input-field">
              <div class="btn">
                <span>Choisir une image de profile (PNG,JPG,JPEG,GIF)</span>

                <input
                  type="file"
                  name="file"
                  onChange={(e) => this.setState({ image: e.target.files[0] })}
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
            {this.state.loadingUp && (
              <p>
                Veuillez patienter pendant la modification, la page se
                rafraichira à la fin de celui-ci
              </p>
            )}
          </div>
          <p>Modifier le mot de passe :</p>
          <div style={{ textAlign: "center" }}>
          <button
            className="btn waves-effect waves-light"
            onClick={this.handlePassWordChange}
          >
            Envoyer l'e-mail !
            <i class="material-icons right">send</i>
          </button>
          <p>Modifier le mail: </p>
          <input
            type="email"
            id="SetEmail"
            className="validate"
            require
            onChange={(e) => this.setState({ Email: e.target.value })}
          />
          <button
            className="btn waves-effect waves-light"
            onClick={this.handleChangeMail}
          >
            Envoyer
            <i class="material-icons right">send</i>
          </button>
          </div>
          <p>Envoyer l'email de vérification de l'adresse mail:</p>
          {this.state.User != null && (
            <div style={{ textAlign: "center" }}>
              {this.state.User.emailVerified ? (
                <button className="btn waves-effect waves-light disabled">
                  Envoyer l'e-mail !
                  <i class="material-icons right">send</i>
                </button>
              ) : (
                <button
                  className="btn waves-effect waves-light"
                  onClick={this.handleVerifMail}
                >
                  Envoyer l'e-mail !
                  <i class="material-icons right">send</i>
                </button>
              )}
            </div>
          )}
        </div>
        <div class="modal-footer" style={{ textAlign: "center" }}>
          <a href="#!" class="modal-close waves-effect waves-light btn">
            <i class="material-icons left">close</i>
            Fermer
          </a>
        </div>
      </div>
    );
  }
}
