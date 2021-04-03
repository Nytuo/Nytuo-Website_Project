import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import ConModal from "./components/ConModal";

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
          photoURL: "../images/default.png"
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

  var GoogleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();
  const GoogleAuth = () => {
    firebase
      .auth()
      .signInWithPopup(GoogleProvider)
      .then((result) => {
        var user = result.user;
        var tmp = db.ref("users/"+user.uid + "/games");
        tmp.on("value",(snapshot)=>{
          const data = snapshot.data;
          if (data == null) {
            var dbco1 = db.ref("users");
          dbco1.child(user.uid).set({
            games: "",
          });
          }
        })
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  var TwitterProvider = new firebase.auth.TwitterAuthProvider();
  const TwitterAuth = () => {
    firebase.auth().signInWithPopup(TwitterProvider).then((result) => {
      var user = result.user;
      var tmp = db.ref("users/"+user.uid + "/games");
      tmp.on("value",(snapshot)=>{
        const data = snapshot.data;
        if (data == null) {
          var dbco1 = db.ref("users");
        dbco1.child(user.uid).set({
          games: "",
        });
        }
      })
    }).catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage);
    })
  }
  var FaceBookProvider = new firebase.auth.FacebookAuthProvider();
  const FaceBookAuth = () => {
    firebase.auth().signInWithPopup(FaceBookProvider).then((result) =>{
      var user = result.user;
      var tmp = db.ref("users/"+user.uid + "/games");
      tmp.on("value",(snapshot)=>{
        const data = snapshot.data;
        if (data == null) {
          var dbco1 = db.ref("users");
        dbco1.child(user.uid).set({
          games: "",
        });
        }
      })
    }).catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      })
  }
  var GitHubProvider = new firebase.auth.GithubAuthProvider();
  const GithubAuth = () => {
    firebase.auth().signInWithPopup(GitHubProvider).then((result) => {
      var user = result.user;
      var tmp = db.ref("users/"+user.uid + "/games");
      tmp.on("value",(snapshot)=>{
        const data = snapshot.data;
        if (data == null) {
          var dbco1 = db.ref("users");
        dbco1.child(user.uid).set({
          games: "",
        });
        }
      })
    }).catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      })
  }
  var MSProvider = new firebase.auth.OAuthProvider('microsoft.com')
  const MSAuth = () => {
    firebase.auth().signInWithPopup(MSProvider).then((result) => {
    var user = result.user;
      var tmp = db.ref("users/"+user.uid + "/games");
      tmp.on("value",(snapshot)=>{
        const data = snapshot.data;
        if (data == null) {
          var dbco1 = db.ref("users");
        dbco1.child(user.uid).set({
          games: "",
        });
        }
      })
  }).catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      })
  }
  
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
      <ConModal
        Google={GoogleAuth}
        Twitter={TwitterAuth}
        Facebook={FaceBookAuth}
        Github={GithubAuth}
        Microsoft={MSAuth}
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
