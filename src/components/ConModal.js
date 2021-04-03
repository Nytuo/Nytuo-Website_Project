import React, { Component } from "react";
import M from "materialize-css";
import Login from "./Login";
import firebase from "../Firebase";

export default class ConModal extends Component {
  componentDidMount() {
    M.Modal.init(this.ConModal, {});
    firebase.auth().onAuthStateChanged((user) => {
      M.Modal.getInstance(this.ConModal).close();
    });
  }

  render() {
    return (
      <div
        ref={(ConModal) => {
          this.ConModal = ConModal;
        }}
        id={"Conmodal" + this.props.id}
        class="modal modal-fixed-footer"
      >
        <div class="modal-content">
          <Login
            email={this.props.email}
            setEmail={this.props.setEmail}
            password={this.props.password}
            setPassword={this.props.setPassword}
            handleLogin={this.props.handleLogin}
            handleSignUp={this.props.handleSignUp}
            hasAccount={this.props.hasAccount}
            setHasAccount={this.props.setHasAccount}
            emailError={this.props.emailError}
            passwordError={this.props.passwordError}
            pseudo={this.props.pseudo}
            setPseudo={this.props.setPseudo}
          />
          <button
            className="oauth-container btn darken-4 white black-text"
            style={{ margin: "5px" }}
            onClick={this.props.Google}
          >
            <div className="left">
              <img
                alt="Google Logo"
                width="20px"
                style={{ marginTop: "7px", marginRight: "8px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
            </div>
            Se connecter avec le dieu Google
          </button>
          <button
            className="oauth-container btn darken-4 white black-text"
            style={{ margin: "5px"}}
            onClick={this.props.Twitter}
          >
            <div className="left">
              <img
                alt="Twitter Logo"
                width="20px"
                style={{ marginTop: "7px", marginRight: "8px" }}
                src="https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg"
              />
            </div>
            Se connecter avec Twitter
          </button>
          <button
            className="oauth-container btn darken-4 white black-text"
            style={{ margin: "5px"}}
            onClick={this.props.Facebook}
          >
            <div className="left">
              <img
                alt="FaceBook Logo"
                width="20px"
                style={{ marginTop: "7px", marginRight: "8px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
              />
            </div>
            Se connecter avec FaceBook
          </button>
          <button
            className="oauth-container btn darken-4 white black-text"
            style={{ margin: "5px"}}
            onClick={this.props.Github}
          >
            <div className="left">
              <img
                alt="GitHub Logo"
                width="20px"
                style={{ marginTop: "7px", marginRight: "8px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              />
            </div>
            Se connecter avec GitHub
          </button>
          <button
            className="oauth-container btn darken-4 white black-text"
            style={{ margin: "5px"}}
            onClick={this.props.Microsoft}
          >
            <div className="left">
              <img
                alt="Microsoft Logo"
                width="20px"
                style={{ marginTop: "7px", marginRight: "8px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png"
              />
            </div>
            Se connecter avec Microsoft
          </button>
          
        </div>
        <div class="modal-footer" style={{ textAlign: "center" }}>
          <a href="#!" class="modal-close waves-effect waves-light btn" style={{ margin:"5px"}}>
            <i class="material-icons left">close</i>
            Fermer
          </a>
          {this.props.hasAccount && (
            <button
              className="btn waves-effect waves-light"
              onClick={this.props.resetPassword}
            >
              <i class="material-icons left">sentiment_very_dissatisfied</i>
              Mot de passe oublier (Compte Nytuo)
            </button>
          )}
        </div>
      </div>
    );
  }
}
