import React from 'react';
import '../../styles/navbars/navbar.css';
import NavbarProfile from './navbarProfile';
import men from '../../assets/images/men.jpg';

function Navbar() {
  return (
    <div className="bg-white d-flex justify-content-between align-items-center p-2 fixed-top ">
      <div className="ms-4" >
        {/* <Logo /> */}w
      </div>
      <div>
        <NavbarProfile
          className="profile-text"
          nameID="name"
          positionID="position"
          position="Reception"
          picture={men}
        />
      </div>
    </div>
  )
}

export default Navbar