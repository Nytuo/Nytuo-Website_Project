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
      <video src="/videos/V6.mp4" autoPlay loop muted></video>

      <h1 className="blanc">Welcome to a new Universe</h1>
{/*       <ReactAudioPlayer src={SelectMusic(randomNumber(0, 7))} autoPlay loop />
 */}
<iframe width="0" height="0" src="https://www.youtube.com/embed/fjyizi7KsfU?controls=0;&autoplay=1;&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      <h1 className="blanc">Welcome to a new Universe</h1>
      <h1 className="blanc"> (Under construction)</h1>
      <div className="hero-btns">
        <Button link="/games" colori="white" bgcolor="dodgerblue">
          Go to the page
        </Button>
      </div>
    </div>
  );
}
export default Hero;
