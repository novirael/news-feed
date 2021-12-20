import React from "react";

export const Tag = ({ name, onClick }) => (
  <span style={{ marginRight: "1em" }} onClick={() => onClick(name)}>
    {name}
  </span>
);
