import React from "react";

export const ButtonOC = ({ children, colori, bgcolor, link }) => {
  return (
    <a
      onClick={link}
      className="btn-primary btn"
      style={{ backgroundColor: bgcolor, color: colori, margin: "5px" }}
    >
      {children}
    </a>
  );
};
