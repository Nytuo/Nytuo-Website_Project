import React from "react";

export const SSD = ({ rm, src }) => {
  if (rm === "t") {
    return <></>;
  } else {
    return (
      <li>
        <img class="responsive-img" alt="" src={"../images/" + src + ".png"} />
      </li>
    );
  }
};
