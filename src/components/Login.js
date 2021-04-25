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
    <>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="mail" required placeholder="name@example.com" value={email}
               onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="floatingInput">Email (même pour mot de passe oublier)</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="pwd" required placeholder="Password" value={password}
               onChange={(e) => setPassword(e.target.value)}/>
          <label htmlFor="floatingPassword">Mot de passe</label>
      </div>


      {hasAccount ? (
        ""
      ) : (
          <div className="form-floating mb-3">
              <input type="text" className="form-control" id="pseudo" required placeholder="Pseudo" value={pseudo}
                     onChange={(e) => setPseudo(e.target.value)}/>
              <label htmlFor="floatingPseudo">Pseudo</label>
          </div>
      )}
      <div>
        {hasAccount ? (
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "red" }}>{emailError}</p>
            <p style={{ color: "red"}}>{passwordError}</p>
            <div className="d-grid gap-2 mx-auto">
              <button className="btn btn-primary" type="button" onClick={handleLogin}>
                Se connecter</button>
            </div>

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
              <div className="d-grid gap-2 mx-auto">
                  <button className="btn btn-primary" type="button" onClick={handleSignUp}>
                      S'inscrire
                  </button>
              </div>

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
    </>
  );
}

export default Login;
