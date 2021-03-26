import React from "react";

function Login(props) {
  const {
    email,
    password,
    setPassword,
    setEmail,
    handleLogin,
    handleSignUp,
    passwordError,
    emailError,
    hasAccount,
    setHasAccount,
    pseudo,
    setPseudo,
  } = props;
  return (
    <div className="spaceX2">
      <div className="row">
        <div className="input-field col s12">
          <input
            type="email"
            className="validate"
            autoFocus
            id="mail"
            require
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="mail">E-Mail</label>
        </div>
      </div>
      {hasAccount ? (
        ""
      ) : (
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              id="pseudo"
              className="validate"
              require
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
            />
            <label for="pseudo">Pseudo</label>
          </div>
        </div>
      )}
      <div className="row">
        <div className="input-field col s12">
          <input
            type="password"
            id="pwd"
            className="validate"
            require
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="pwd">Mot de passe</label>
        </div>
      </div>
      <div>
        {hasAccount ? (
          <div style={{ textAlign: "center" }}>
            <p>{emailError}</p>
            <p>{passwordError}</p>
            <button
              className="btn waves-effect waves-light"
              onClick={handleLogin}
            >
              Se connecter
            </button>
            <p>
              Pas encore de compte ?{" "}
              <span
                style={{ color: "dodgerblue", cursor: "pointer" }}
                onClick={() => setHasAccount(!hasAccount)}
              >
                Créé en un
              </span>
            </p>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <button
              className="btn waves-effect waves-light"
              onClick={handleSignUp}
            >
              S'inscrire
            </button>
            <p>
              Vous avez déjà un compte ?{" "}
              <span
                style={{ color: "dodgerblue", cursor: "pointer" }}
                onClick={() => setHasAccount(!hasAccount)}
              >
                Connectez-vous
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
