import React from "react";

export const ButtonStore = ({
  children,
  colori,
  bgcolor,
  link,
  ico,
  disabled,
}) => {
  if (disabled === "disabled") {
    return (
      <a
        onClick={link}
        className="waves-effect waves-light btn disabled"
        style={{ backgroundColor: bgcolor, color: colori, margin: "5px" }}
      >
        <i class="material-icons right">{ico}</i>
        {children}
      </a>
    );
  } else {
    return (
      <a
        onClick={link}
        className="waves-effect waves-light btn"
        style={{ backgroundColor: bgcolor, color: colori, margin: "5px" }}
      >
        <i class="material-icons right">{ico}</i>
        {children}
      </a>
    );
  }
};