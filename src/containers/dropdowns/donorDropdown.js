import { Dropdown } from "antd";
import React from "react";

const items = [
  {
    label: "Home",
    key: "1",
  },
  {
    label: "Daily Operation",
    key: "2",
  },
  {
    label: "Donor",
    key: "3",
  },
  {
    label: "Unit & Sample",
    key: "4",
  },
  {
    label: "Marketing",
    key: "5",
    disabled: true
  },
  {
    label: "Equipment & Supplies",
    key: "6",
  },
  {
    label: "Site",
    key: "7",
  },
  {
    label: "System Setup",
    key: "8",
  },
  {
    label: "Employee",
    key: "9",
  },
  {
    label: "Report",
    key: "10",
    disabled: true
  },
];

function DonorDropdown(props) {
  const button = props.button;
  return (
    <div>
      <Dropdown
      overlayStyle={{
        borderRadius: "0.5rem",
        border: "1px solid #0075FF"
      }}
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        {button}
      </Dropdown>
    </div>
  );
}

export default DonorDropdown;
