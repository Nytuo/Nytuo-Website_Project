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
        className="btn-primary btn disabled"
        style={{ backgroundColor: bgcolor, color: colori, margin: "5px" }}
      >

        {children}
      </a>
    );
  } else {
    return (
      <a
        onClick={link}
        className="btn-primary btn"
        style={{ backgroundColor: bgcolor, color: colori, margin: "5px" }}
      >

        {children}
      </a>
    );
  }
};
