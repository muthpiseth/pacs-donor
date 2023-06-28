import React from "react";
import NavbarContent from "../../components/navbars/navbarContent";
import Contents from "./contents";

function Group() {
  return (
    <div>
      <NavbarContent title={<span className="h2-bold-size24">Donor Group</span>} item="Button" />
      <Contents content="Group" />
    </div>
  );
}

export default Group;
