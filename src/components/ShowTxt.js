import React from "react";

export const ShowTxt = ({ txt }) => {
  const text = txt;
  const newText = text.split('\n').map(str => <p>{str}</p>);
  
  return newText;
};
