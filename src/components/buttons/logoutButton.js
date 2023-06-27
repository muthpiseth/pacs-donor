import React from 'react'
import { logout } from '../../assets/icons/icon'
import { Button } from 'antd'
import '../../styles/buttons/logoutButton.css';

function LogoutButton(props) {
    const { title, onClick } = props;
  return (
    <div>
        <Button
          className="logout-button"
          onClick={onClick}
          type="text" 
          icon={<img src={logout} alt="" />} 
          size="small"
        >
          {title}
        </Button>
    </div>
  )
}

export default LogoutButton