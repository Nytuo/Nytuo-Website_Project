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
      <video src="/videos/V4.mp4" autoPlay loop muted></video>
      <ReactAudioPlayer src={SelectMusic(randomNumber(0, 11))} autoPlay loop />

      <h1 className="blanc">Welcome to a new Universe</h1>
      <div className="hero-btns">
        <Button link="/Games" colori="white" bgcolor="dodgerblue">
          Go to the page
        </Button>
      </div>
    </div>
  );
}
export default Hero;
