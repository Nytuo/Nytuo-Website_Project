import React from "react";

export const SSD = ({ rm, src }) => {
  if (rm === "t") {
    return <></>;
  } else {
    return (
      <li>
        <img src={"../images/" + src + ".png"} />
      </li>
    );
  }
};
