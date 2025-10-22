import React from "react";
import NavbarContent from "../../components/navbars/navbarContent";
// import Contents from "./contents";
import BackgroundButton from "../../components/buttons/backgroundButton";
import { AiOutlinePlus } from "react-icons/ai";
import Contents from "./contents";

function Dashboard() {
  return (
    <div>
      <NavbarContent
        title={<span className="h2-bold-size24">Donor List</span>}
        item={
          <BackgroundButton
            icon={<AiOutlinePlus style={{fontWeight: 500, color: "#152C5B" }}/>}
            tittle="Create New Donor"
            txtColor="#152C5B"
            fontWeigth="500"
            fontSize="0.875rem"
            className="float-end11 border"
            width="11.25rem"
          />
        }
      />
       <div className="bg-white p-3"  style={{
        minHeight: "49rem",
        borderRadius: "0.5rem",
      }}>
        <div style={{color:"red"}}>sjjsjsjsj</div>
       </div>
    </div>
  );
}

export default Dashboard;
