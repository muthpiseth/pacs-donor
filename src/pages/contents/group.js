import React from "react";
import NavbarContent from "../../components/navbars/navbarContent";
import Contents from "./contents";

function Group() {
  return (
    <div>
      <NavbarContent title="Donor Group" item="Button" />
      <Contents content="Group" />
    </div>
  );
}

export default Group;
