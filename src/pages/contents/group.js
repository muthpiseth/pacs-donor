import React from "react";
import NavbarContent from "../../components/navbars/navbarContent";
import Contents from "./contents";
import DonorGroup from '../donorGroup/donorGroup'

function Group() {
  return (
    <div>
      <NavbarContent title={<span className="h2-bold-size24">Donor Group</span>} />
      <Contents content={<DonorGroup/>} />
    </div>
  );
}
export default Group;
