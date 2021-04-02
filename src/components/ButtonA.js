import React from "react";

export const ButtonA = ({ children, colori, bgcolor, link }) => {
  return (
    <a
      href={link}
      className="waves-effect waves-light btn"
      style={{ backgroundColor: bgcolor, color: colori, margin: "5px" }}
    >
      {children}
    </a>
  );
};
