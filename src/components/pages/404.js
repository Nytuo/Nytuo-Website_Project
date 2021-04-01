import React from "react";
import Footer from "../Footer";

const NoMatch = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <meta name="robots" content="noindex"></meta>
      <h1>
        Il n'y rien ici, passe ton chemin... ou tu peux jouer à ce jeu exclusif
        !
      </h1>
      <iframe
        frameborder="0"
        src="https://itch.io/embed-upload/1967107?color=333333"
        allowfullscreen=""
        width="1280"
        height="720"
        title="Nytuo Games 404"
      >
        <a href="https://nytuo.itch.io/error404">Play Error404 on itch.io</a>
      </iframe>
      <Footer />
    </div>
  );
};
export default NoMatch;
