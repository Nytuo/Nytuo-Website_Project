import React, { Component } from "react";
import M from "materialize-css";
import Login from "./Login";
import firebase from "../Firebase";

export default class Modal extends Component {
  componentDidMount() {
    M.Modal.init(this.Modal,[])
    firebase.auth().onAuthStateChanged((user) => {
      M.Modal.getInstance(this.Modal).close();
    
  });
  }

  render() {
    return (
        <div ref={Modal=>{this.Modal = Modal;}} id={"modal"+this.props.id} class="modal">
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
        </div>
        <div class="modal-footer" style={{textAlign: "center" }}>
          <a href="#!" class="modal-close waves-effect waves-light btn"><i class="material-icons left">close</i>
            Fermer
          </a>
          <button
          className="oauth-container btn darken-4 white black-text"
          style={{ margin: "5px" }}
          onClick={this.props.f}
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
        {!this.props.hasAccount && (<button
          className="btn waves-effect waves-light"
          onClick={this.props.resetPassword}
        ><i class="material-icons left">sentiment_very_dissatisfied</i>
          Mot de passe oublier (Compte Nytuo)
        </button>)}
        
        </div>
      </div>
    );
  }
}
