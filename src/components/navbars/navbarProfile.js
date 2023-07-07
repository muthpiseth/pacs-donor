import { DownOutlined } from '@ant-design/icons'
import React from 'react'
import { Dropdown } from 'antd';
const items = [
    {
      label: <span className="h5-bold-size13">Account Settings</span>,
      key: 1,
    },
    {
      label: <span className="h5-bold-size13">Sign Out</span>,
      key: 2,
    }
];

function NavbarProfile(props) {
  const { icon, name, position, picture, className, nameID, positionID } = props;
  return (
    <div className="d-flex justify-content-center align-items-center">
        <div 
          style={{ color: "#152C5B", cursor: "pointer" }}
          className="me-lg-4 me-md-2 d-flex fs-4"
        >
          {icon}
        </div>
        <div className={className}>
            <div id={nameID} className="h3-bold-size17">{name}</div>
            <div id={positionID} className="h5-bold-size13-grey">{position}</div>
        </div>
        <div className="mx-lg-3 mx-md-1">
            <img 
              className="me-lg-3 me-md-1" 
              style={{ height: "2.5rem", border: "0.1rem solid #0075FF", borderRadius: "0.5rem", cursor: "pointer" }} 
              src={picture} 
              alt="" 
            />
            <Dropdown
              overlayStyle={{ top: "4rem" }}
              menu={{
              items,
              }}
              trigger={['click']}
            >
              <DownOutlined />
            </Dropdown>
        </div>
    </div>
  )
}

export default NavbarProfile