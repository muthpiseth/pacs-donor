import React from "react";
import NavbarContent from "../../components/navbars/navbarContent";
import Contents from "./contents";

function Analysis() {
  return (
    <div>
      <NavbarContent title={<span className="h2-bold-size24">Donor Analysis</span>} item="Button" />
      <Contents content="Analysis" />
    </div>
  );
}

export default Analysis;
