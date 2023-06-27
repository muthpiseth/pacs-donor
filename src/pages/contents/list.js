import React from "react";
import NavbarContent from "../../components/navbars/navbarContent";
import Contents from "./contents";

function List() {
  return (
    <div>
      <NavbarContent title={<span className="h2-bold-size24">Donor List</span>} item="Button" />
      <Contents content="List" />
    </div>
  );
}

export default List;
