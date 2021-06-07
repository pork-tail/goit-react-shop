import React from "react";
import data from "../../data/index";

const HeaderList = () => {
  return (
    <ul>
      {data.header.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default HeaderList;
