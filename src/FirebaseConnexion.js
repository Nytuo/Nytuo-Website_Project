import React, { useState, useEffect } from "react";
import { Button } from "./components/Button";
import Login from "./components/Login";
import firebase from "./Firebase";

function FirebaseConnexion() {
  const [User, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const db = firebase.database();
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        var dbco1 = db.ref("users");
        dbco1.child(credentials.user.uid).set({
          games: "",
        });
        return credentials.user.updateProfile({
          displayName: pseudo,
        });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogOut = () => {
    firebase.auth().signOut();
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  var provider = new firebase.auth.GoogleAuthProvider();
  const GoogleAuth = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        if (!db.ref("users/" + user.uid + "/games")) {
          var dbco1 = db.ref("users");
          dbco1.child(user.uid).set({
            games: "",
          });
        }

        /*           var dbco2 = db.ref('users/'+user.uid)
          dbco2.child("games") */
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorMessage);
      });
  };
  const resetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("email send");
        alert("email send");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
    <div>
      {User && (
        <div className="spaceX2">
          <p>Vous êtes connecté avec l'adresse mail : {User.email}</p>
          <div>
            <img className="NcircleimgC" src={User.photoURL} />
          </div>
          <p>Bienvenue, {User.displayName}</p>
        </div>
      )}
      {User ? (
        <div style={{ textAlign: "center" }}>
          <button
            className="btn waves-effect waves-light"
            onClick={handleLogOut}
          >
            LogOut
          </button>
        </div>
      ) : (
        <>
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            pseudo={pseudo}
            setPseudo={setPseudo}
          />
          <div style={{ textAlign: "center" }}>
            <button
              className="oauth-container btn darken-4 white black-text"
              style={{ margin: "5px" }}
              onClick={GoogleAuth}
            >
              <div className="left">
                <img
                  width="20px"
                  style={{ marginTop: "7px", marginRight: "8px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                />
              </div>
              Se connecter avec le dieu Google
            </button>
            <button
              className="btn waves-effect waves-light"
              onClick={resetPassword}
            >
              Mot de passe oublier (Compte Nytuo)
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default FirebaseConnexion;
