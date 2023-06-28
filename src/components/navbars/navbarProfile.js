import { DownOutlined } from '@ant-design/icons'
import React from 'react'
import { Dropdown } from 'antd';
const items = [
    {
      label: 'Account Settings',
      key: '1',
    },
    {
      label: 'Sign Out',
      key: '2',
    }
];

function NavbarProfile(props) {
  const { icon, name, position, picture, className } = props;
  return (
    <div className="d-flex justify-content-center align-items-center">
        <div className="me-lg-4 me-md-2 d-flex fs-4">{icon}</div>
        <div className={className}>
            <div id="name" style={{ fontSize: "1rem", fontWeight: "500", color: "#152C5B" }}>{name}</div>
            <div id="position" style={{ fontSize: "0.8rem", fontWeight: "500", color: "#152C5B", opacity: "50%" }}>{position}</div>
        </div>
        <div className="mx-lg-3 mx-md-1">
            <img 
              className="me-lg-3 me-md-1" 
              style={{ height: "2.5rem", border: "0.1rem solid #0075FF", borderRadius: "0.5rem", cursor: "pointer" }} 
              src={picture} 
              alt="" 
            />
            <Dropdown
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