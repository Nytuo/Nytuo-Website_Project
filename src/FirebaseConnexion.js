import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import Modal from "./components/Modal";

function FirebaseConnexion() {
  const [User, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
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
          default:
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
          default:
        }
      });
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
        // This gives you a Google Access Token. You can use it to access the Google API.
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
        var errorMessage = error.message;
        // The email of the user's account used.
        // The firebase.auth.AuthCredential type that was used.
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
      <Modal
        f={GoogleAuth}
        id="1"
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
        resetPassword={resetPassword}
      />
    </div>
  );
}

export default FirebaseConnexion;
