import React from "react";

const NoMatch = () => {
  return (
    <div style={{textAlign: "center"}}>
      <p>
        Il n'y rien ici, passe ton chemin... ou tu peux jouer à ce jeu exclusif
        !
      </p>
        <iframe
          frameborder="0"
          src="https://itch.io/embed-upload/1967107?color=333333"
          allowfullscreen=""
          width="1280"
          height="720"
        >
          <a href="https://nytuo.itch.io/error404">Play Error404 on itch.io</a>
        </iframe>
    </div>
  );
};
export default NoMatch;
