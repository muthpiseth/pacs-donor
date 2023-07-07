import { Dropdown } from "antd";
import React from "react";

const items = [
  {
    label: <span className="h5-bold-size13">Home</span>,
    key: 1,
  },
  {
    label: <span className="h5-bold-size13">Daily Operation</span>,
    key: 2,
  },
  {
    label: <span className="h5-bold-size13">Donor</span>,
    key: 3,
  },
  {
    label: <span className="h5-bold-size13">Unit & Sample</span>,
    key: 4,
  },
  {
    label: <span className="h5-bold-size13-grey">Marketing</span>,
    key: 5,
    disabled: true
  },
  {
    label: <span className="h5-bold-size13">Equipment & Supplies</span>,
    key: 6,
  },
  {
    label: <span className="h5-bold-size13">Site</span>,
    key: 7,
  },
  {
    label: <span className="h5-bold-size13">System Setup</span>,
    key: 8,
  },
  {
    label: <span className="h5-bold-size13">Employee</span>,
    key: 9,
  },
  {
    label: <span className="h5-bold-size13-grey">Report</span>,
    key: 10,
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
