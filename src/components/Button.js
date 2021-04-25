import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ children, colori, bgcolor, link }) => {
  return (
    <Link to={link} className="btn-mobile">
      <a
        className="btn-primary btn"
        style={{ backgroundColor: bgcolor, color: colori, margin: "5px" }}
      >
        {children}
      </a>
    </Link>
  );
};
