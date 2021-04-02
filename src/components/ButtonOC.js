import React from "react";

export const ButtonOC = ({ children, colori, bgcolor, link }) => {
  return (
    <a
      onClick={link}
      className="waves-effect waves-light btn"
      style={{ backgroundColor: bgcolor, color: colori, margin: "5px" }}
    >
      {children}
    </a>
  );
};
