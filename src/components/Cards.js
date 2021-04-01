import React from "react";
import { ButtonA } from "./ButtonA";

function Cards(props) {
  return (
    <div class="homeresize">
      <div class="card">
        <a href={props.weblink}>
          <div class="card-image">
            <img alt="" src={"../images/" + props.img + ".png"} />
            <span class="card-title">{props.Title}</span>
          </div>
        </a>
        <div class="card-content">
          <ButtonA link={"nytuo://launchid/" + props.link}>Jouer</ButtonA>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
