import React from "react";
import NavbarContent from "../../components/navbars/navbarContent";
import Contents from "./contents";

function List() {
  return (
    <div>
      <NavbarContent title="Donor List" item="Button" />
      <Contents content="List" />
    </div>
  );
}

export default List;
