import React from "react";
import LaptopListItem from "./laptopListItem/LaptopListItem";

const LaptopList = ({ laptops }) => {
  return (
    <ul>
      {laptops.map((laptop) => {
        return <LaptopListItem laptop={laptop} key={laptop.id} />;
      })}
    </ul>
  );
};

export default LaptopList;
