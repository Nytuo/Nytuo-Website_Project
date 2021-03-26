import React, { useState, useEffect } from "react";
import "../App.css";
import { Button } from "./Button";
import M from "materialize-css";
import "./Hero.css";
import ReactAudioPlayer from "react-audio-player";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function SelectMusic(rdnb) {
  return "/music/" + rdnb + ".mp3";
}

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="blanc">Welcome to a new Universe</h1>
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/aDzLWGldWG8?controls=0;&autoplay=1;&loop=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1 className="blanc"> (Under construction)</h1>
      <p>
        Que va ce passe t-il ?<br /> Le site principal (anciennement
        nytuo.yo.fr) va passer sous ReactJS et va être herbergé chez Google
        FireBase.
        <br /> L'ancien domaine (nytuo.yo.fr) continuera de servir quelques
        temps pour les comptes et le launcher avant de passer eux aussi sous FireBase (avec authentification par Google de prévu), l'ancienne adresse redirigera vers la nouvelle
        adresse du site principale.
        <br />
        Le projet de l'ancienne et nouveau site se trouvent sur GitHub{" "}
      </p>
      <div className="hero-btns">
        <Button link="/games" colori="white" bgcolor="dodgerblue">
          Go to the games page
        </Button>
      </div>

    </div>
  );
}
export default Hero;
