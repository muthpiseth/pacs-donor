import React from 'react';
import NavbarProfile from './navbarProfile';
import men from '../../assets/images/men.jpg';
import logoama from '../../assets/logos/logoama.svg';

function Navbar() {
  return (
    <div className="bg-white d-flex justify-content-between align-items-center p-2 fixed-top ">
      <div className="ms-4" >
        <img style={{ height: "3.5rem", cursor: "pointer" }} src={logoama} alt="" />
      </div>
      <div>
        <NavbarProfile
          name="Muth Piseth"
          position="Reception"
          picture={men}
        />
      </div>
    </div>
  )
}

export default Navbar