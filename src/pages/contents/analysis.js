import React from "react";
import NavbarContent from "../../components/navbars/navbarContent";
import Contents from "./contents";
import DonorAnalysis from "../donorAnalysis/donorAnalysis";

function Analysis() {
  return (
    <div>
      <NavbarContent title={<span className="h2-bold-size24">Donor Analysis</span>} item="Button" />
      <Contents content={<DonorAnalysis/>} />
    </div>
  );
}

export default Analysis;
