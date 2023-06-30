import React from "react";
import NavbarContent from "../../components/navbars/navbarContent";
import Contents from "./contents";
import CardDonorList from "../donorList/cardDonorList";

function List() {
  return (
    <div>
      <NavbarContent title={<span className="h2-bold-size24">Donor List</span>} item="Button" />
      <Contents className="bg-white" content={<CardDonorList/>} />
    </div>
  );
}

export default List;
