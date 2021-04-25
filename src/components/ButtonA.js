import React from "react";

export const ButtonA = ({ children, colori, bgcolor, link }) => {
  return (
    <a
      href={link}
      className="btn-primary btn"
      style={{ backgroundColor: bgcolor, color: colori, margin: "5px" }}
    >
      {children}
    </a>
  );
};
