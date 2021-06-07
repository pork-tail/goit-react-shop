import React from "react";
import data from "../../data";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
const Main = () => {
  return (
    <main>
      <PhoneList phones={data.phones} />
      <LaptopList laptops={data.laptops} />
    </main>
  );
};

export default Main;
