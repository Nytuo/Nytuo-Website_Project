import React from "react";

function Cards(props) {
  return (
    <div class="homeresize">
      <a href={"nytuo://launchid/" + props.link}>
        <div class="card">
          <div class="card-image">
            <img src={"../images/" + props.img + ".png"} />
            <span class="card-title">{props.Title}</span>
          </div>
          <div class="card-content">
            <p>{props.desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Cards;
