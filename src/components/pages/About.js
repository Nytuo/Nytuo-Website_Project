import React from "react";
import "../../App.css";
import Footer from "../Footer";

function About() {
  return (
    
    <div>
      <meta name="robots" content="noindex"></meta>
      <div className="spaceX2"></div>
      <h1>A Propos :</h1>
      <p>
        Je suis Nytuo (Arnaud BEUX), j’ai 17 ans et je créé des jeux pour
        m’amuser depuis 2016 !<br />
        Je me débrouille seul pour créé mes jeux (sauf contre-indication).Plus
        tard j’aimerai travailler dans les jeux vidéo…
        <br />
        Mes jeux sont développés sous Construct 2, Unreal Engine 4 et Unity.
        <br />
        Je suis fan d’High-Tech, de MARVEL, de Doctor Who et plus encore…
      </p>
      <Footer></Footer>
    </div>
  );
}

export default About;
