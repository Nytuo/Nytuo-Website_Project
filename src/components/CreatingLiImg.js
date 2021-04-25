import React from "react";

export const SSD = ({ rm, src }) => {
  if (rm === "t") {
    return <></>;
  } else {
    return (
      <>
        <div className="carousel-item">
        <img className="d-block w-100" alt="" src={"../images/" + src + ".png"} />
        </div>
      </>
    );
  }
};
