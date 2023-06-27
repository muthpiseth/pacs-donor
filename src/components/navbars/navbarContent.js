import React from "react";

function NavbarContent(props) {
    const { title, item } = props;
  return (
    <div className="d-flex justify-content-between pb-4">
      <div>{title}</div>
      <div>{item}</div>
    </div>
  );
}

export default NavbarContent;
