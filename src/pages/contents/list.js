import React from "react";
import NavbarContent from "../../components/navbars/navbarContent";
import Contents from "./contents";
import CardDonorList from "../donorList/cardDonorList";

function List() {
  return (
    <div>
      <NavbarContent title="Donor List" item="Button" />
      <Contents content={<CardDonorList/>} />
    </div>
  );
}

export default List;
