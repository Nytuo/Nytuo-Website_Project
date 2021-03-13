import React from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.css";

export const Button = ({ children, colori, bgcolor, link }) => {
  return (
    <Link to={link} className="btn-mobile">
      <a
        className="waves-effect waves-light btn"
        style={{ backgroundColor: bgcolor, color: colori }}
      >
        {children}
      </a>
    </Link>
  );
};
