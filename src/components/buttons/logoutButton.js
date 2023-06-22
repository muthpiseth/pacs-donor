import React from 'react'
import { logout } from '../../assets/icons/icon'
import { Button } from 'antd'

function LogoutButton(props) {
    const { title, click } = props;
  return (
    <div>
        <Button
            onClick={click}
            type="text" 
            icon={<img src={logout} alt="" />} 
            size="small"
            style={{
                color: "#152C5B",
                fontWeight: 500
            }}
        >
            {title}
        </Button>
    </div>
  )
}

export default LogoutButton